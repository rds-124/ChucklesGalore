import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";
import JokeDisplay from "@/components/JokeDisplay";
import ShareScreen from "@/components/ShareScreen";
import { getRandomJoke, type Joke } from "@/data/jokes";

type AppState = "welcome" | "joke" | "share";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("welcome");
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);

  const handleGetStarted = () => {
    const joke = getRandomJoke();
    setCurrentJoke(joke);
    setCurrentState("joke");
  };

  const handleGetNewJoke = () => {
    const joke = getRandomJoke();
    setCurrentJoke(joke);
    setCurrentState("joke");
  };

  const handleShare = () => {
    setCurrentState("share");
  };

  const handleReturnToGenerator = () => {
    setCurrentState("joke");
  };

  const renderContent = () => {
    switch (currentState) {
      case "welcome":
        return <WelcomeScreen onGetStarted={handleGetStarted} />;
      case "joke":
        return currentJoke ? (
          <JokeDisplay joke={currentJoke} onGetJoke={handleGetNewJoke} />
        ) : null;
      case "share":
        return currentJoke ? (
          <ShareScreen joke={currentJoke} onReturnToGenerator={handleReturnToGenerator} />
        ) : null;
      default:
        return <WelcomeScreen onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex flex-col">
      <Header 
        onGetJoke={currentState !== "welcome" ? handleGetNewJoke : undefined}
        onShare={currentState === "joke" ? handleShare : undefined}
        showShare={currentState === "joke"}
      />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
};

export default Index;
