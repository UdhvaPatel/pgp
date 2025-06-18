
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Building, Calendar, TrendingUp, Target, Lightbulb, Zap, ExternalLink } from "lucide-react";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise in business analytics and data science
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "All India IPSC U-14 Basketball Tournament",
              issuer: "Indian Public School Conference (IPSC)",
              date: "October 2016",
              description: "Represented school at a national-level U-14 basketball championship, promoting teamwork, discipline, and sportsmanship among top schools across India.",
              icon: TrendingUp,
              gradient: "from-green-500 to-blue-600",
              skills: ["Teamwork & Collaboration", "Discipline & Commitment", "Strategic Thinking", "Discipline & Commitment"],
              link: "https://drive.google.com/file/d/1IhUnjTGVoGoAx7jvvz1f2fe66MKy-1gI/view"
            }, {
              title: "Khel Mahakumbh 2018 – District Level Achievement",
              issuer: "Sports Authority of Gujarat under Khel Mahakumbh Initiative",
              date: "October 2018",
              description: "Secured 1st place in the U-17 boys basketball event at Gujarat’s district-level Khel Mahakumbh, showcasing athletic skill, coordination, and competitive spirit.",
              icon: Target,
              gradient: "from-blue-500 to-purple-600",
              skills: ["Competitive Sportsmanship", "Focus under Pressure", "Physical Fitness & Stamina", "Competitive Spirit"],
              link: "https://drive.google.com/file/d/1UmkpTJskddW8L3mOkiGlLJbAJ3PrqhOn/view"
            },
          //  {
          //   title: "Tableau Desktop Specialist",
          //   issuer: "Tableau",
          //   date: "September 2023",
          //   description: "Data visualization, dashboard creation, and business intelligence reporting",
          //   icon: Lightbulb,
          //   gradient: "from-purple-500 to-pink-600",
          //   skills: ["Data Visualization", "Dashboard Design", "Business Intelligence", "Interactive Reports"]
          // }, {
          //   title: "Python for Data Science",
          //   issuer: "DataCamp",
          //   date: "August 2023",
          //   description: "Data manipulation, statistical analysis, and machine learning fundamentals",
          //   icon: Zap,
          //   gradient: "from-pink-500 to-red-600",
          //   skills: ["Python Programming", "Data Analysis", "Statistical Methods", "Machine Learning"]
          // },
        ].map((cert, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-purple-500/30 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <CardContent className="relative p-8">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`p-4 bg-gradient-to-br ${cert.gradient} rounded-full shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110 flex-shrink-0`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2 text-purple-400">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-purple-400" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-slate-700/50 text-gray-300 border-slate-600/50 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-300 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* View Certificate Link */}
                    <div className="pt-2">
                      {/* <button className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
                        <ExternalLink className="h-4 w-4" />
                        <span>View Certificate</span>
                      </button> */}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Certificate</span>
                      </a>
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

export default Certificates;
