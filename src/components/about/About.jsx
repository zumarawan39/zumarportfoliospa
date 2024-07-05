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
                                    My name is Muhammad Zumar Awan. Currently, I'm doing bachelors in Computer Science at Virtual University of Pakistan. I have one year of experience as a web development trainee at SeeBiz Private Limited, where I learned various skills mentioned in my resume. Additionally, my interest in web development has spanned over two years. I completed a six-month web development course from Lite under the army, and under Akhuwat a four-month course in web and app development from Corvit. With a deep passion for web development, I've decided to delve deeper into this field. So I'm committed to continuously enhancing my skills in web development.
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
