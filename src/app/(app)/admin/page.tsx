import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Database, Activity, BarChart2 } from "lucide-react";
import Link from "next/link";

const adminFeatures = [
    {
        title: "User Management",
        description: "Approve, reject, and manage user accounts and roles.",
        icon: Users,
        href: "#"
    },
    {
        title: "Mission Data",
        description: "Upload, update, and manage mission telemetry data.",
        icon: Database,
        href: "#"
    },
    {
        title: "Live Mission Control",
        description: "Monitor and update live mission status and parameters.",
        icon: Activity,
        href: "#"
    },
    {
        title: "Reports & Analytics",
        description: "View usage statistics and export mission data.",
        icon: BarChart2,
        href: "#"
    },
];

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="font-headline text-3xl font-bold mb-6">Admin Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminFeatures.map((feature) => (
            <Link href={feature.href} key={feature.title}>
                <Card className="hud-card h-full transition-all hover:border-primary hover:shadow-primary/20">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <feature.icon className="h-10 w-10 text-primary" />
                        <div>
                            <CardTitle className="font-headline">{feature.title}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        ))}
      </div>
    </div>
  );
}
