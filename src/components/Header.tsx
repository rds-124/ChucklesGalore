import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface HeaderProps {
  onGetJoke?: () => void;
  onShare?: () => void;
  showShare?: boolean;
}

const Header = ({ onGetJoke, onShare, showShare = false }: HeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-soft">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✨</span>
          <h1 className="text-xl font-bold">ChucklesGalore</h1>
        </div>
        
        <div className="flex items-center gap-3">
          {showShare && onShare && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={onShare}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
            >
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
          )}
          {onGetJoke && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={onGetJoke}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
            >
              Get Joke
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;