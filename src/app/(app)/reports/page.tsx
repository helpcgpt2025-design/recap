
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const reports = [
    {
        title: "Mission Alpha - Q2 2024 Summary",
        date: "July 1, 2024",
        description: "A comprehensive summary of all debris collected and key performance indicators for the second quarter.",
    },
    {
        title: "Debris Analysis Report #DA-734",
        date: "June 28, 2024",
        description: "Detailed analysis of a defunct satellite fragment captured in low-earth orbit.",
    },
    {
        title: "Annual Trajectory Analysis 2023",
        date: "January 15, 2024",
        description: "Year-end report on orbital adjustments, fuel consumption, and future trajectory planning.",
    }
]

export default function ReportsPage() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="font-headline text-3xl font-bold mb-2">Mission Reports</h1>
      <p className="text-muted-foreground mb-6">
        Download and view detailed reports from past and ongoing missions.
      </p>
      <div className="space-y-6">
        {reports.map((report) => (
            <Card key={report.title} className="hud-card">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline flex items-center gap-2">
                                <FileText className="text-primary" /> {report.title}
                            </CardTitle>
                            <CardDescription>Generated on {report.date}</CardDescription>
                        </div>
                        <Button variant="outline">
                            <Download className="mr-2" />
                            Download
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{report.description}</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
