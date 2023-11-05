import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <main className="container flex flex-1 min-h-full flex-col items-center justify-center p-24 gap-3">
      <div className="flex flex-col">
        <Heading className="text-6xl lg:text-8xl text-primary" level={1}>
          Allen
          <br />
          Hansen
        </Heading>
        <p className="text-3xl text-muted-foreground">Full Stack Developer</p>
      </div>
    </main>
  );
}
