import { useState, useEffect } from "react";
import Myimg from "../../../public/assests/images/about (2).png";

function Home() {
  const services = [
    "Software Engineer",
    "Front End Developer",
    "Back End Developer",
    "Full Stack WebApp Dev"
  ];
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  const onButtonClick = () => {
    const pdfUrl = "https://docs.google.com/document/d/1NYelQ-RggxX_Hm1TOOSGGRDe3uMVWckxi5lUwA_qFCY/";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Adrees-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Greeting */}
            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-light text-primary animate-fade-in">
                Hello,
              </h3>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white">
                I'm
              </h1>
              <div className="h-20 lg:h-24 flex items-center">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold gradient-text animate-pulse-slow">
                  {services[currentService]}
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-lg">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                I'm a Software Engineer skilled in front-end and back-end development, 
                I specialized in MEAN | MERN Stack Development. I excel at seamlessly 
                integrating emerging technologies into projects, distinguishing myself in 
                web development.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={onButtonClick}
                className="btn-primary text-lg px-8 py-4 animate-glow"
              >
                Hire Me!
              </button>
            </div>

            {/* Floating Elements */}
            <div className="hidden lg:block">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Image Container */}
              <div className="relative z-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl animate-float">
                  <img 
                    src={Myimg} 
                    alt="My Image" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-semibold animate-bounce-slow">
                  Available
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
