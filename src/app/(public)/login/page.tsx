import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="absolute top-8 left-8">
            <Button variant="ghost" asChild>
                <Link href="/"><ArrowLeft className="mr-2"/> Back to Home</Link>
            </Button>
        </div>
      <Tabs defaultValue="register" className="w-full max-w-md">
        <Card className="hud-card">
            <CardHeader className="text-center">
                <div className="flex flex-col justify-center items-center gap-3 mb-2">
                    <Image src="/images/logo.png" alt="RECAP Logo" width={160} height={43} />
                    <p className="text-muted-foreground -mt-2">Mission Control Access</p>
                </div>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
            </CardHeader>
            <CardContent>
                <TabsContent value="login">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email-login">Email</Label>
                            <Input id="email-login" type="email" placeholder="user@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password-login">Password</Label>
                            <Input id="password-login" type="password" required />
                        </div>
                        <Button type="submit" className="w-full glowing-btn" asChild>
                             <Link href="/dashboard">Login</Link>
                        </Button>
                    </form>
                </TabsContent>
                <TabsContent value="register">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email-register">Email</Label>
                            <Input id="email-register" type="email" placeholder="user@example.com" required />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="organization">Organization</Label>
                            <Input id="organization" placeholder="Research Institute / Company" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password-register">Password</Label>
                            <Input id="password-register" type="password" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="account-type">Account Type</Label>
                            <Select defaultValue="customer">
                                <SelectTrigger id="account-type">
                                    <SelectValue placeholder="Select account type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="customer">Customer Account</SelectItem>
                                    <SelectItem value="partner">Partner Account</SelectItem>
                                    <SelectItem value="internal">Internal RECAP Staff</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full glowing-btn" asChild>
                           <Link href="/dashboard">Create Account</Link>
                        </Button>
                    </form>
                </TabsContent>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                    Secure access powered by RECAP mission control
                </p>
            </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
