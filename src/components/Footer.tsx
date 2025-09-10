import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-bold text-lg">ChucklesGalore</span>
          </div>
         
        </div>
        
        <div className="text-center mt-6 pt-6 border-t text-sm text-muted-foreground">
          <p>© 2025 Chuckles Galore. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Made with <span className="text-primary">❤️</span> raikardivya15
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;