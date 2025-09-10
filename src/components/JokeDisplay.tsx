import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Joke = {
  id: number;
  setup: string;
  punchline: string;
};

const JokeDisplay = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [shownJokes, setShownJokes] = useState<Set<number>>(new Set());

  const fetchJoke = async () => {
    let uniqueJoke: Joke | null = null;

    while (!uniqueJoke) {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();

      if (!shownJokes.has(data.id)) {
        uniqueJoke = { id: data.id, setup: data.setup, punchline: data.punchline };
        setShownJokes(prev => new Set(prev).add(data.id));
      }
    }

    setJoke(uniqueJoke);
    setShowPunchline(false);
    setTimeRemaining(5);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setShowPunchline(true);
      return;
    }

    const timer = setInterval(() => setTimeRemaining(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  if (!joke) return <p className="text-center mt-16">Loading...</p>;

  return (
    <main className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-background to-muted/30 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <Card className="p-8 md:p-12 shadow-soft bg-card">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {joke.setup}
              </h1>

              {showPunchline ? (
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    {joke.punchline}
                  </h2>

                  <div className="flex flex-wrap justify-center gap-2 text-4xl">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <span key={i}> {["😂", "😆", "🤣"][i % 3]} </span>
                    ))}
                  </div>

                  <Button onClick={fetchJoke} className="mt-4 px-8 py-3">
                    Next Joke
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <Button
                    variant="orange"
                    size="lg"
                    onClick={() => setShowPunchline(true)}
                    className="text-base px-8 py-3"
                  >
                    Get Punchline
                  </Button>

                  <p className="text-muted-foreground">
                    Time remaining: {timeRemaining}s
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default JokeDisplay;
