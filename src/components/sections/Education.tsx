
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-purple-500/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-10">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        Bachelor of Business Administration
                      </h3>
                      <p className="text-xl text-purple-400 font-semibold">Major: Business Analytics</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="p-2 bg-slate-700/50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">University of North Texas</p>
                        <p className="text-sm text-gray-400">G. Brint Ryan College of Business</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="p-2 bg-slate-700/50 rounded-lg">
                        <MapPin className="h-5 w-5 text-purple-400" />
                      </div>
                      <p>Denton, Texas</p>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="p-2 bg-slate-700/50 rounded-lg">
                        <Calendar className="h-5 w-5 text-purple-400" />
                      </div>
                      <p>Expected Graduation: <span className="text-white font-semibold">May 2028</span></p>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="p-2 bg-slate-700/50 rounded-lg">
                        <Award className="h-5 w-5 text-purple-400" />
                      </div>
                      <p>GPA: <span className="text-white font-semibold">4.0/4.0</span></p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Coursework */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <h4 className="text-lg font-bold text-white">Relevant Coursework</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {[{
                      course: "Data Analysis with Spreadsheet",
                      level: "Intermediate"
                    }, {
                      course: "Introduction to Computers in Business",
                      level: "Advanced"
                    }, {
                      course: "Calculus I",
                      level: "Advanced"
                    }, {
                      course: "College Math for Business",
                      level: "Advanced"
                    }, {
                      course: "Micro Economics",
                      level: "Advanced"
                    }, {
                      course: "Macro Economics",
                      level: "Advanced"
                    }].map((item, index) => (
                      <div key={index} className="group/course relative">
                        <div className="bg-slate-700/30 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 px-4 py-3 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 group-hover/course:text-white font-medium">
                              {item.course}
                            </span>
                            <Badge variant="secondary" className={`text-xs px-2 py-1 ${item.level === 'Advanced' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'}`}>
                              {item.level}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
