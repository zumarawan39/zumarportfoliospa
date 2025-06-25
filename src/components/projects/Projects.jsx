import React from 'react';
import Navbar from "../Navbar/navbar";
import Myimg from "../../../public/assests/images/image.png";
import Myimg1 from "../../../public/assests/images/project_1.png";
import Myimg2 from "../../../public/assests/images/project_2.png";
import Myimg3 from "../../../public/assests/images/project_3.png";
import Myimg4 from "../../../public/assests/images/project_4.png";
import Myimg5 from "../../../public/assests/images/project_5.png";
import Myimg6 from "../../../public/assests/images/project_6.png";
import Myimg7 from "../../../public/assests/images/project_7.png";
import Myimg8 from "../../../public/assests/images/project_8.png";
import Myimg9 from "../../../public/assests/images/project_9.png";
import Myimg10 from "../../../public/assests/images/project_10.png";
import Myimg11 from "../../../public/assests/images/project_11.png";
import Myimg12 from "../../../public/assests/images/project_12.png";
import Myimg13 from "../../../public/assests/images/project_13.png";
import Myimg14 from "../../../public/assests/images/image copy.png";
import Myimg15 from "../../../public/assests/images/final.png";
import Myimg16 from "../../../public/assests/images/pro1.png";
import Myimg17 from "../../../public/assests/images/react.png";

function Projects() {
  const projects = [
    { img: Myimg, title: "Portfolio Website", link: "https://zumarawan39.github.io/main_portfolio/", tech: "HTML/CSS/JS" },
    { img: Myimg1, title: "Personal Portfolio", link: "https://zumarawan39.github.io/myportfolio1/", tech: "HTML/CSS" },
    { img: Myimg12, title: "E-Commerce Site", link: "https://zumarawan39.github.io/project_12/", tech: "HTML/CSS/JS" },
    { img: Myimg13, title: "Landing Page", link: "https://zumarawan39.github.io/project_13/", tech: "HTML/CSS" },
    { img: Myimg15, title: "Business Website", link: "https://zumarawan39.github.io/final_html_project/", tech: "HTML/CSS/JS" },
    { img: Myimg4, title: "Restaurant Site", link: "https://zumarawan39.github.io/project_4/", tech: "HTML/CSS" },
    { img: Myimg2, title: "Blog Platform", link: "https://zumarawan39.github.io/project_2/", tech: "HTML/CSS/JS" },
    { img: Myimg6, title: "Portfolio Gallery", link: "https://zumarawan39.github.io/project_6/", tech: "HTML/CSS" },
    { img: Myimg7, title: "Agency Website", link: "https://zumarawan39.github.io/project_7/", tech: "HTML/CSS/JS" },
    { img: Myimg8, title: "Corporate Site", link: "https://zumarawan39.github.io/project_8/", tech: "HTML/CSS" },
    { img: Myimg9, title: "Creative Portfolio", link: "https://zumarawan39.github.io/project_9/", tech: "HTML/CSS/JS" },
    { img: Myimg10, title: "Modern Landing", link: "https://zumarawan39.github.io/project_10/", tech: "HTML/CSS" },
    { img: Myimg11, title: "API Integration", link: "https://zumarawan39.github.io/fetchApi/", tech: "JavaScript/API" },
    { img: Myimg16, title: "Web Application", link: "https://zumarawan39.github.io/project_1/", tech: "HTML/CSS/JS" },
    { img: Myimg3, title: "Responsive Design", link: "https://zumarawan39.github.io/project_3/", tech: "HTML/CSS" },
    { img: Myimg5, title: "Interactive Site", link: "https://zumarawan39.github.io/project_5/", tech: "HTML/CSS/JS" },
    { img: Myimg14, title: "Dynamic Content", link: "https://zumarawan39.github.io/project_14/", tech: "HTML/CSS/JS" },
    { img: Myimg17, title: "React Portfolio", link: "https://zumarreactportfolio.netlify.app/", tech: "React/JS" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark">
      <Navbar />
      
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="md:container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my portfolio of web development projects showcasing various technologies and design approaches.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-primary text-sm mb-4">{project.tech}</p>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary text-secondary rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '1800ms' }}>
            <p className="text-xl text-gray-300 mb-6">
              Interested in working together?
            </p>
            <a 
              href="/contact" 
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Let's Discuss Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
