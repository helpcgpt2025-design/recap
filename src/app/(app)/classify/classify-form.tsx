"use client";

import Image from "next/image";
import { useState } from "react";
import { classifyOrbitalDebris, type ClassifyOrbitalDebrisOutput } from "@/ai/flows/classify-orbital-debris";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Rocket, Zap, BarChart, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const debrisSamples = PlaceHolderImages.filter(img => img.id.startsWith('debris-sample'));

async function toDataURL(url: string): Promise<string> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

export default function ClassifyForm() {
    const [selectedImage, setSelectedImage] = useState(debrisSamples[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ClassifyOrbitalDebrisOutput | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const photoDataUri = await toDataURL(selectedImage.imageUrl);
            const classificationResult = await classifyOrbitalDebris({
                photoDataUri,
                additionalDetails: "Image captured by RECAP capsule's primary sensor."
            });
            setResult(classificationResult);
        } catch (e) {
            console.error(e);
            setError("Failed to classify debris. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <Card className="hud-card">
                    <CardHeader>
                        <CardTitle className="font-headline">Sensor Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-square relative mb-4">
                            <Image
                                src={selectedImage.imageUrl}
                                alt={selectedImage.description}
                                fill
                                className="object-cover rounded-md"
                                data-ai-hint={selectedImage.imageHint}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {debrisSamples.map((sample) => (
                                <button key={sample.id} onClick={() => setSelectedImage(sample)} className={`relative aspect-square rounded-md overflow-hidden ring-offset-background ring-offset-2 focus:ring-2 focus:ring-primary ${selectedImage.id === sample.id ? 'ring-2 ring-primary' : ''}`}>
                                    <Image src={sample.imageUrl} alt={sample.description} fill className="object-cover" />
                                </button>
                            ))}
                        </div>

                        <Button onClick={handleSubmit} disabled={isLoading} className="w-full glowing-btn">
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Rocket className="mr-2 h-4 w-4" />}
                            Analyze Debris
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <div>
                {isLoading && (
                    <Card className="hud-card flex flex-col items-center justify-center min-h-[400px]">
                        <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                        <p className="font-headline text-lg">Analyzing Image...</p>
                        <p className="text-muted-foreground">AI is classifying the debris. Please wait.</p>
                    </Card>
                )}
                {error && (
                    <Card className="hud-card text-destructive-foreground bg-destructive min-h-[400px]">
                        <CardHeader>
                            <CardTitle>Analysis Failed</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{error}</p>
                        </CardContent>
                    </Card>
                )}
                {result && (
                    <Card className="hud-card">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Analysis Complete</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="font-headline flex items-center gap-2"><Zap className="text-primary"/> Classification</h3>
                                <p className="text-xl font-bold">{result.classification}</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-headline flex items-center gap-2"><BarChart className="text-primary"/> Confidence</h3>
                                <div className="flex items-center gap-2">
                                    <Progress value={result.confidence * 100} className="w-[80%]" />
                                    <span className="font-mono text-lg">{(result.confidence * 100).toFixed(1)}%</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-headline flex items-center gap-2"><FileText className="text-primary"/> Report Summary</h3>
                                <p className="text-muted-foreground bg-black/20 p-4 rounded-md">{result.reportSummary}</p>
                            </div>
                            <Button className="w-full">Download Full Report (PDF)</Button>
                        </CardContent>
                    </Card>
                )}
                 {!isLoading && !result && !error && (
                    <div className="hud-card flex items-center justify-center min-h-[400px] border-dashed">
                        <div className="text-center text-muted-foreground">
                            <p>AI Analysis results will appear here.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
