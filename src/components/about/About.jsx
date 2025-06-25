import Navbar from "../Navbar/navbar";
import Myimg from "../../../public/assests/images/my_img1.png";

function About() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-dark via-secondary to-dark">
      <Navbar />

      <section className="pt-20 lg:pt-32 pb-16">
        <div className=" md:container  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white">
                  About <span className="gradient-text">Me</span>
                </h1>
                <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                  Software Engineer
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  I’m a Software Engineer with one year of professional
                  experience in full-stack web development, specializing in
                  JavaScript technologies including the MEAN and MERN stacks.
                  I’ve worked on building scalable, maintainable, and
                  performance-driven applications from scratch to production.
                </p>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  I bring strong problem-solving skills, a deep understanding of
                  frontend/backend architecture, and a commitment to writing
                  clean, efficient code. I can deliver responsive user
                  interfaces, secure APIs, and fully integrated systems tailored
                  to business needs.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Next Js",
                    "React",
                    "Angular",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "TypeScript",
                    "JavaScript",
                    "HTML/CSS",
                    "Git",
                    "Docker",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium hover:bg-primary/30 transition-colors duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div
              className="flex justify-center lg:justify-end animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
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

                  {/* Experience Badge */}
                  <div className="absolute -top-4 -right-4 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-semibold animate-bounce-slow">
                    1+ Year Exp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
