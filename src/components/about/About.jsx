import Navbar from "../Navbar/navbar";
import Myimg from "../../../public/assests/images/my_img1.png";
import "./about.css";

function About() {
    return (
        <>
            <Navbar />
            <section>
                <div className="main_2" id="about">
                    <div className="inner_main2 inner">
                        <div className="rigth_main2">
                            <div className="inner_right">
                                <h1>About <span className="color">Me</span></h1>
                                <h3>Software Engineer</h3>
                                <p>
                                My name is Muhammad Zumar Awan, a Bachelor’s student in Computer Science at Virtual University of Pakistan. I have one year of experience as a Web Development Trainee at SeeBiz Private Limited, specializing in MEAN Stack. I have also completed internships and bootcamps, where I worked on live projects using Angular and the MERN stack. Additionally, I have completed a six-month Front-End Development course under the Army and a four-month Full Stack program at Corvit Systems under Akhuwat. With a strong passion for web development, I am committed to continuously enhancing my skills and delivering quality projects.
                                </p>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className="left_main2">
                            <div className="about_img">
                                <img src={Myimg} alt="My Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
