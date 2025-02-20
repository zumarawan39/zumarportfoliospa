import React from 'react';
import Navbar from "../Navbar/navbar";
import "./Project.css";
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
    { img: Myimg, title: "Project 1", link: "https://zumarawan39.github.io/main_portfolio/" },
    { img: Myimg1, title: "Project 2", link: "https://zumarawan39.github.io/myportfolio1/" },
    { img: Myimg12, title: "Project 3", link: "https://zumarawan39.github.io/project_12/" },
    { img: Myimg13, title: "Project 4", link: "https://zumarawan39.github.io/project_13/" },
    { img: Myimg15, title: "Project 5", link: "https://zumarawan39.github.io/final_html_project/" },
    { img: Myimg4, title: "Project 6", link: "https://zumarawan39.github.io/project_4/" },
    { img: Myimg2, title: "Project 7", link: "https://zumarawan39.github.io/project_2/" },
    { img: Myimg6, title: "Project 8", link: "https://zumarawan39.github.io/project_6/" },
    { img: Myimg7, title: "Project 9", link: "https://zumarawan39.github.io/project_7/" },
    { img: Myimg8, title: "Project 10", link: "https://zumarawan39.github.io/project_8/" },
    { img: Myimg9, title: "Project 11", link: "https://zumarawan39.github.io/project_9/" },
    { img: Myimg10, title: "Project 12", link: "https://zumarawan39.github.io/project_10/" },
    { img: Myimg11, title: "Project 13", link: "https://zumarawan39.github.io/fetchApi/" },
    { img: Myimg16, title: "Project 14", link: "https://zumarawan39.github.io/project_1/" },
    { img: Myimg3, title: "Project 15", link: "https://zumarawan39.github.io/project_3/" },
    { img: Myimg5, title: "Project 16", link: "https://zumarawan39.github.io/project_5/" },
    { img: Myimg14, title: "Project 17", link: "https://zumarawan39.github.io/project_14/" },
    { img: Myimg17, title: "Project 18", link: "https://zumarreactportfolio.netlify.app/" },
  ];

  return (
    <>
      <Navbar />
      <section>
        <div className="main_4">
          <div className="inner_main4 ">            
            <div className="projects">
              {projects.map((project, index) => (
                <div className="project" key={index}>
                  <div className="project_img">
                    <img src={project.img} alt={`Project ${index + 1}`} />
                    <div className={`overlay overlay_${index % 6 + 1}`}>
                      <h1>{project.title}</h1>
                      <button>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">See Me</a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
