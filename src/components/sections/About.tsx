
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, TrendingUp, Lightbulb } from "lucide-react";

interface AboutProps {
  scrollToSection: (sectionId: string) => void;
}

const About = ({ scrollToSection }: AboutProps) => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-800/30 via-purple-900/10 to-slate-800/30 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-32 left-32 w-24 h-24 bg-purple-600/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-pink-600/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/3 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-12">
              {/* Main Content */}
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    I'm a passionate <span className="text-purple-400 font-semibold">Business Analytics student</span> at the 
                    University of North Texas, dedicated to transforming data into actionable business insights.
                  </p>
                  
                  <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    With a strong foundation in statistical analysis, data visualization, and strategic thinking, 
                    I bridge the gap between complex data and business solutions.
                  </p>
                </div>

                {/* Skills Grid - Minimal */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {[{
                    icon: Target,
                    title: "Problem Solving",
                    desc: "Data-driven solutions"
                  }, {
                    icon: TrendingUp,
                    title: "Analytics",
                    desc: "Business intelligence"
                  }, {
                    icon: Lightbulb,
                    title: "Innovation",
                    desc: "Creative insights"
                  }].map((item, index) => (
                    <div key={index} className="group/item text-center space-y-4">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl group-hover/item:from-purple-600/20 group-hover/item:to-pink-600/20 transition-all duration-300">
                        <item.icon className="h-8 w-8 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-slate-600/30">
                  {[{
                    value: "4.0",
                    label: "GPA"
                  }, {
                    value: "15K+",
                    label: "Data Points Analyzed"
                  }, {
                    value: "5+",
                    label: "Team Projects"
                  }, {
                    value: "2028",
                    label: "Expected Graduation"
                  }].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border-0">
                    Let's Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
