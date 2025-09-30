'use client';
import { useState, useEffect, useMemo } from 'react';
import type { CartesianGridProps } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { Activity, Satellite, AlertTriangle, CheckCircle, Rocket } from 'lucide-react';

const orbitData = [
  { time: '00:00', altitude: 400 },
  { time: '03:00', altitude: 405 },
  { time: '06:00', altitude: 410 },
  { time: '09:00', altitude: 395 },
  { time: '12:00', altitude: 402 },
  { time: '15:00', altitude: 408 },
  { time: '18:00', altitude: 400 },
  { time: '21:00', altitude: 398 },
  { time: '24:00', altitude: 400 },
];

const debrisData = [
  { type: 'Fragments', count: 12, fill: 'var(--color-fragments)' },
  { type: 'Satellites', count: 5, fill: 'var(--color-satellites)' },
  { type: 'Boosters', count: 3, fill: 'var(--color-boosters)' },
  { type: 'Other', count: 8, fill: 'var(--color-other)' },
];

const chartConfig = {
  altitude: {
    label: 'Altitude (km)',
    color: 'hsl(var(--primary))',
  },
  fragments: {
    label: 'Fragments',
    color: 'hsl(var(--chart-1))',
  },
  satellites: {
    label: 'Defunct Satellites',
    color: 'hsl(var(--chart-2))',
  },
  boosters: {
    label: 'Rocket Boosters',
    color: 'hsl(var(--chart-3))',
  },
  other: {
    label: 'Other Debris',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig;

const CustomTooltip = (props: any) => {
  if (props.active && props.payload && props.payload.length) {
    return <ChartTooltipContent {...props} />;
  }
  return null;
};

const commonGridProps: Omit<CartesianGridProps, 'ref'> = {
  strokeDasharray: '3 3',
  stroke: 'hsl(var(--border) / 0.5)',
};

const MissionTimeline = () => {
    const events = [
        { icon: Rocket, text: "Mission Start: Capsule launched into target orbit.", time: "T-0d 0h 0m", color: "text-green-400" },
        { icon: CheckCircle, text: "Orbit Stabilized: Nominal altitude and velocity reached.", time: "T+0d 2h 15m", color: "text-green-400" },
        { icon: Satellite, text: "Debris Capture 01: Fragment classified as payload fairing.", time: "T+0d 8h 45m", color: "text-primary" },
        { icon: AlertTriangle, text: "Minor Thruster Anomaly: Corrective action taken.", time: "T+1d 1h 30m", color: "text-yellow-400" },
        { icon: Satellite, text: "Debris Capture 02: Inactive cubesat secured.", time: "T+1d 5h 22m", color: "text-primary" },
    ];

    return (
        <Card className="hud-card col-span-1 md:col-span-2">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Activity /> Mission Events</CardTitle>
                <CardDescription>Recent operational highlights from the mission.</CardDescription>
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
  const [telemetry, setTelemetry] = useState({
    altitude: 400.0,
    speed: 7.8,
    status: 'Nominal',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        altitude: parseFloat((prev.altitude + (Math.random() - 0.5) * 0.2).toFixed(3)),
        speed: parseFloat((prev.speed + (Math.random() - 0.5) * 0.01).toFixed(3)),
        status: Math.random() > 0.95 ? 'Anomaly' : 'Nominal',
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const TelemetryCard = ({ title, value, unit, status }: { title: string, value: string | number, unit: string, status?: string }) => {
    const statusColor = status === 'Anomaly' ? 'text-red-500' : 'text-green-400';
    return (
      <div className="hud-card p-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-headline text-3xl font-bold text-primary">
          {value}
          <span className="text-lg font-sans text-muted-foreground ml-2">{unit}</span>
        </p>
        {status && <p className={`text-sm font-bold ${statusColor}`}>{status}</p>}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="font-headline text-3xl font-bold mb-6">Mission Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TelemetryCard title="Altitude" value={telemetry.altitude} unit="km" />
        <TelemetryCard title="Speed" value={telemetry.speed} unit="km/s" />
        <TelemetryCard title="Capsule Status" value={telemetry.status} unit="" status={telemetry.status} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="hud-card">
          <CardHeader>
            <CardTitle className="font-headline">Orbit Trajectory</CardTitle>
            <CardDescription>Altitude over the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="aspect-video h-[250px] w-full">
              <LineChart data={orbitData} margin={{ left: 12, right: 12, top: 10, bottom: 10 }}>
                <CartesianGrid {...commonGridProps} />
                <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 5)} />
                <YAxis domain={['dataMin - 10', 'dataMax + 5']} hide />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 2, strokeDasharray: '3 3' }} />
                <Line type="monotone" dataKey="altitude" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card className="hud-card">
          <CardHeader>
            <CardTitle className="font-headline">Debris Captured</CardTitle>
            <CardDescription>Types of debris collected this mission.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="aspect-video h-[250px] w-full">
              <BarChart data={debrisData} accessibilityLayer>
                <CartesianGrid {...commonGridProps} />
                <XAxis dataKey="type" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--accent))' }} />
                <Bar dataKey="count" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

       <div className="mt-6">
            <MissionTimeline />
        </div>
    </div>
  );
}
