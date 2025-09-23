import ClassifyForm from "./classify-form";

export default function ClassifyPage() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="font-headline text-3xl font-bold mb-2">Debris Classification</h1>
      <p className="text-muted-foreground mb-6">
        Upload or select a sensor image to classify captured orbital debris using our AI analysis tool.
      </p>
      <ClassifyForm />
    </div>
  );
}
