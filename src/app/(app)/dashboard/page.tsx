import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Satellite, AlertTriangle, CheckCircle, Rocket, Cpu, Shield, Bot } from "lucide-react";

const kpiData = [
    { title: "Altitude", value: "408.5 km", status: "Optimal", statusColor: "bg-green-500/20 text-green-400 border-green-500/30" },
    { title: "Velocity", value: "7.68 km/s", status: "Nominal", statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { title: "Beacon Status", value: "Active", status: "Online", statusColor: "bg-green-500/20 text-green-400 border-green-500/30" },
    { title: "Capsule Status", value: "Ready", status: "Ready", statusColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
];

const orbitalParameters = [
    { label: "Inclination", value: 51.6, display: "51.6°" },
    { label: "Eccentricity", value: 0.12, display: "0.0012" }, // low value for display
    { label: "Period", value: 92.8, display: "92.8 min" },
    { label: "Solar Power", value: 98, display: "98%" },
];

const systemHealth = [
    { name: "Communication Link", status: "Active", icon: Activity },
    { name: "Debris Collector", status: "Operational", icon: Bot },
    { name: "Recovery Capsule", status: "Ready", icon: Shield },
    { name: "Propulsion System", status: "Standby", icon: Rocket },
];

const missionStats = [
    { value: "147", label: "Debris Tracked" },
    { value: "23", label: "Successful Captures" },
    { value: "89", label: "Days in Orbit" },
    { value: "1,342", label: "Orbits Completed" },
]

const MissionTimeline = () => {
    const events = [
        { icon: Rocket, text: "Mission Start: Capsule launched into target orbit.", time: "T-0d 0h 0m", color: "text-green-400" },
        { icon: CheckCircle, text: "Orbit Stabilized: Nominal altitude and velocity reached.", time: "T+0d 2h 15m", color: "text-green-400" },
        { icon: Satellite, text: "Debris Capture 01: Fragment classified as payload fairing.", time: "T+0d 8h 45m", color: "text-primary" },
        { icon: AlertTriangle, text: "Minor Thruster Anomaly: Corrective action taken.", time: "T+1d 1h 30m", color: "text-yellow-400" },
        { icon: Satellite, text: "Debris Capture 02: Inactive cubesat secured.", time: "T+1d 5h 22m", color: "text-primary" },
    ];

    return (
        <Card className="hud-card hud-card-bleed">
            <CardHeader>
                <CardTitle className="font-headline">Recent Events</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {events.map((event, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <event.icon className={`mt-1 h-5 w-5 shrink-0 ${event.color}`} />
                            <div className="flex-1">
                                <p className="font-medium">{event.text}</p>
                                <p className="text-sm text-muted-foreground">{event.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};


export default function DashboardPage() {
    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-6">
            <Card className="hud-card hud-card-bleed">
                <CardContent>
                    <h1 className="font-headline text-2xl font-bold">Welcome Back, Mission Specialist</h1>
                    <p className="text-muted-foreground">Real-time access to RECAP mission telemetry and status</p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map(kpi => (
                    <Card key={kpi.title} className="hud-card">
                        <CardHeader className="pb-2">
                             <div className="flex justify-between items-center">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                                <Badge variant="outline" className={kpi.statusColor}>{kpi.status}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold font-headline text-primary">{kpi.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="telemetry" className="w-full">
                <TabsList className="grid w-full grid-cols-3 hud-card !p-1">
                    <TabsTrigger value="telemetry">Live Telemetry</TabsTrigger>
                    <TabsTrigger value="timeline">Mission Timeline</TabsTrigger>
                    <TabsTrigger value="reports">Data Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="telemetry" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card className="hud-card hud-card-bleed">
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2"><Cpu /> Orbital Parameters</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {orbitalParameters.map(param => (
                                    <div key={param.label}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{param.label}</span>
                                            <span className="font-mono text-muted-foreground">{param.display}</span>
                                        </div>
                                        <Progress value={param.value} className="h-2" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="hud-card hud-card-bleed">
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2"><Shield /> System Health</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {systemHealth.map(system => (
                                    <div key={system.name} className="flex items-center justify-between p-3 bg-black/20 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <system.icon className="h-5 w-5 text-primary" />
                                            <span className="font-medium">{system.name}</span>
                                        </div>
                                        <Badge variant="outline" className={
                                            system.status === "Active" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                                            system.status === "Operational" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                                            system.status === "Ready" ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                                        }>
                                            {system.status}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="timeline" className="mt-6">
                   <MissionTimeline />
                </TabsContent>
                 <TabsContent value="reports" className="mt-6">
                    <Card className="hud-card hud-card-bleed">
                        <CardHeader><CardTitle>Data Reports</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Detailed mission reports will be available here.</p></CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            
            <Card className="hud-card hud-card-bleed">
                <CardHeader>
                    <CardTitle className="font-headline">Mission Statistics</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {missionStats.map(stat => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

        </div>
    );
}
