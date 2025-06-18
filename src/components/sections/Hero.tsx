
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pruthvi Gami
          </h1>
          <p className="text-xl md:text-2xl text-purple-400 mb-4 font-semibold">Business Administrative Student</p>
          <p className="text-lg text-purple-300 mb-8">
            University of North Texas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border-0" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg bg-transparent" onClick={() => window.open("https://docs.google.com/document/d/1UcBFV2rgOExQgMHiHPEugCDXdY0zqPWH/edit?usp=sharing&ouid=113179374099086749101&rtpof=true&sd=true", "_blank")}>
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>
        </div>
        <div className="animate-bounce">
          <ArrowDown className="mx-auto h-8 w-8 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
