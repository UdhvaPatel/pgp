
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-900/80 via-slate-900 to-indigo-900/80 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto mt-6">
            I'm always open to discussing new opportunities, collaborations, or 
            simply connecting with fellow professionals in the business analytics field.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{
              icon: Mail,
              label: "Email",
              value: "gamipruthvi@gmail.com",
              link: "mailto:gamipruthvi@gmail.com",
              description: "Drop me a mail anytime",
              gradient: "from-blue-500 to-purple-600"
            }, {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/pruthvigami",
              link: "https://linkedin.com/in/pruthvigami",
              description: "Let's connect professionally",
              gradient: "from-purple-500 to-pink-600"
            }, {
              icon: Phone,
              label: "Phone",
              value: "(940) 301-2791",
              link: "tel:+19403012791",
              description: "Call for immediate response",
              gradient: "from-pink-500 to-red-600"
            }].map((contact, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-purple-500/30 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="relative p-8 text-center">
                  <a href={contact.link} target="_blank" className="block space-y-4">
                    <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${contact.gradient} rounded-full shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110 mx-auto mb-4`}>
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {contact.label}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">
                        {contact.description}
                      </p>
                      <p className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
