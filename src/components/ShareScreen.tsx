import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Copy, ArrowLeft, MessageCircle } from "lucide-react";
import { Joke } from "@/data/jokes";
import { toast } from "@/hooks/use-toast";

interface ShareScreenProps {
  joke: Joke;
  onReturnToGenerator: () => void;
}

const ShareScreen = ({ joke, onReturnToGenerator }: ShareScreenProps) => {
  const shareText = `${joke.setup} ${joke.punchline}`;
  const shareUrl = window.location.href;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard!",
        description: "The joke has been copied to your clipboard.",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

const handleSocialShare = (platform: string) => {
  
  
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(window.location.href);

  let shareUrlFinal = "";

  switch (platform) {
    case "facebook":
      shareUrlFinal = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
      break;

    case "twitter":
      shareUrlFinal = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
      break;

    case "whatsapp":
      shareUrlFinal = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
      break;

    case "instagram":
      // Instagram doesn’t support direct URL sharing; use Web Share API if available
      if (navigator.share) {
        navigator.share({
          title: "😂 Check out this joke!",
          text: shareText,
          url: window.location.href,
        }).catch(err => console.error("Error sharing:", err));
      } else {
        // Fallback: copy the joke to clipboard
        handleCopyToClipboard();
        toast({
          title: "Instagram sharing",
          description: "The joke was copied! Open Instagram and paste it into your post/story.",
        });
      }
      return; // exit so we don’t open a new tab
  }

  if (shareUrlFinal) {
    window.open(shareUrlFinal, "_blank", "width=600,height=400");
  }
};


  return (
    <main className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-background to-muted/30 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <Card className="p-8 md:p-12 shadow-soft bg-card border-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">
                  Share the Laughs!
                </h1>
                <p className="text-muted-foreground">
                  Spread the joy! Share this hilarious joke with your friends and family.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Share on Social Media</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-blue-50 hover:border-blue-200"
                    onClick={() => handleSocialShare("facebook")}
                  >
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <span className="text-sm">Facebook</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-sky-50 hover:border-sky-200"
                    onClick={() => handleSocialShare("twitter")}
                  >
                    <Twitter className="w-6 h-6 text-sky-500" />
                    <span className="text-sm">X</span>
                  </Button>
                  
                  <Button
                      variant="outline"
                      className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-green-50 hover:border-green-200"
                      onClick={() => handleSocialShare("whatsapp")}
                    >
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <span className="text-sm">WhatsApp</span>
                    </Button>

                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-pink-50 hover:border-pink-200"
                    onClick={() => handleSocialShare("instagram")}
                  >
                    <Instagram className="w-6 h-6 text-pink-600" />
                    <span className="text-sm">Instagram</span>
                  </Button>
                
                </div>
                <Button
                  variant="outline"
                  onClick={handleCopyToClipboard}
                  className="w-full"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Joke to Clipboard
                </Button>
              </div>
              
              <div className="space-y-4">
                <Button
                  variant="orange"
                  size="lg"
                  onClick={onReturnToGenerator}
                  className="w-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Generator
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Thanks for sharing the laughter!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ShareScreen;