
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            category: "Administrative Tools",
            skills: ["Microsoft Excel", "Power Point", "Google Docs & Sheets", "Zoom & MS Teams"],
            icon: "📊",
            gradient: "from-blue-500 to-purple-600"
          }, {
            category: "Core Business Skills",
            skills: ["Strategic Planning", "Market Research", "Financial Analysis", "Business Communication","Project Management", "Presentation", "Consulting"],
            icon: "💼",
            gradient: "from-purple-500 to-pink-600"
          }, {
            category: "Soft Skills",
            skills: ["Leadership", "Critical Thinking", "Time Management", "Conflict Resolution", "Team Collaboration", "Adaptability"],
            icon: "🌟",
            gradient: "from-pink-500 to-red-600"
          }].map((category, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-purple-500/30 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="relative p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="bg-slate-700/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 px-4 py-3 rounded-xl text-gray-300 hover:text-white font-medium border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <span>{skill}</span>
                          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-600/50">
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <div key={star} className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{
                          animationDelay: `${star * 100}ms`
                        }}></div>
                      ))}
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

export default Skills;
