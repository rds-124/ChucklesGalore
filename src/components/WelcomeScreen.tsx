import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-characters.jpg";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen = ({ onGetStarted }: WelcomeScreenProps) => {
  return (
    <main className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to
              </h1>
              <div className="text-muted-foreground text-lg max-w-md">
                Your daily dose of laughter, delivered instantly. Prepare for endless 
                giggles and groan-worthy puns!
              </div>
            </div>
            
            <Button 
              variant="orange" 
              size="lg"
              onClick={onGetStarted}
              className="text-base px-8 py-3"
            >
              😄 Get Your First Laugh
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Happy people laughing together"
                className="w-full max-w-lg h-auto rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomeScreen;