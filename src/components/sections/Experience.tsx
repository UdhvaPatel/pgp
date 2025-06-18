
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Target, BookOpen, Clock, Building, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Building expertise through hands-on experience in business analytics and data-driven decision making
          </p>
        </div>
        
        <div className="space-y-8">
          {[
            {
              title: "Weight Room Supervisor",
              company: "University of North Texas",
              period: "April 2025 - Present",
              description: "Supervised the UNT Rec Center weight room by ensuring patron safety, maintaining equipment, enforcing facility policies, and providing excellent customer service in a fast-paced environment.",
              icon: Target,
              gradient: "from-purple-500 to-pink-600",
              achievements: ["Maintained 100% safety record", "Enhanced member satisfaction", "Trained new student staff"]
            }, 
            {
            title: "Business Management",
            company: "Ratnm Gems",
            period: "May 2023 - May 2024",
            description: "Managed business data and daily operations for a diamond and gemstone trading company, supporting inventory, logistics, and customer coordination.",
            icon: TrendingUp,
            gradient: "from-blue-500 to-purple-600",
            achievements: ["Improved inventory tracking", "Managed client data", "Enhanced daily operations"]
          }, 
          // {
          //   title: "Research Assistant",
          //   company: "UNT Business School",
          //   period: "Spring 2023 - Fall 2023",
          //   description: "Assisted professors in conducting market research studies. Collected and analyzed survey data from 500+ respondents using SPSS and Excel.",
          //   icon: BookOpen,
          //   gradient: "from-pink-500 to-red-600",
          //   achievements: ["Processed 500+ survey responses", "Mastered SPSS & Excel", "Published research findings"]
          // },
        ].map((exp, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-purple-500/30 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="relative p-8">
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  {/* Icon and Timeline */}
                  <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4">
                    <div className={`p-4 bg-gradient-to-br ${exp.gradient} rounded-full shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110`}>
                      <exp.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="flex items-center space-x-2 text-purple-400 mb-2">
                        <Clock className="h-4 w-4" />
                        <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-medium">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Building className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-3">
                        {exp.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold flex items-center">
                        <Award className="h-4 w-4 mr-2 text-purple-400" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
