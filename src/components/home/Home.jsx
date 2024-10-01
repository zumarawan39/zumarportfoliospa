import { useState, useEffect } from "react";
import Myimg from "../../../public/assests/images/about (2).png";
import "./home.css";

function Home() {
  const services = [
    "Software Engineer",
    "Graphic Designer",
    "Front End Developer",
    "Back End Developer",
    "API Integration",
    "Full Stack WebApp Dev"
  ];
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000); // Change service every 2 seconds
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
    <>
      <div className="main_home">
        <div className="right_home">
          <div className="heading green fs">
            <h3>Hello,</h3>
          </div>
          <div className="bold fs">
            <h1>I'm</h1>
          </div>
          <div className="bold_1 green fs">
            <h1 className="rotating-service">{services[currentService]}</h1>
          </div>
          <div className="about">
            <p>
              I'm a Software Engineer skilled in front-end and back-end development,I specialized in MEAN |MERN Stack Development.I excel at seamlessly integrating emerging technologies into projects, distinguishing myself in
               web development.
            </p>
          </div>
          <div className="home_btn">
            <button className="btn_2" onClick={onButtonClick}>Hire Me!</button>
          </div>
        </div>
        <div className="left_home">
          <div className="my_img">
            <img src={Myimg} alt="My Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
