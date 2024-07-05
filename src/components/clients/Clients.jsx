import Navbar from "../Navbar/navbar";
import "./Client.css"

function Clients() {
    return (
        <>
            <Navbar />
            <section>
                <div className="main_3" id="services">
                    <div className="inner_main3 ">
                        <div className="heading_main3">
                            <h1>Our <span className="color">Services</span></h1>
                        </div>
                        <div className="cards_main3">
                            <div className="card_main3">
                                <div className="icon">
                                    <i className="fas fa-code"></i>
                                </div>
                                <h1>Software Engineer</h1>
                                <p>
                                    I offer expert front-end web development services, specializing in crafting visually stunning and interactive user interfaces using HTML, CSS, and JavaScript. My aim is to deliver engaging, responsive designs that work seamlessly across all devices and browsers.
                                </p>
                                <button className="btn_card">Read More</button>
                            </div>
                            <div className="card_main3">
                                <div className="icon">
                                    <i className="fas fa-paint-brush"></i>
                                </div>
                                <h1>Graphic Designer</h1>
                                <p>
                                    Experienced in the art of graphic design, I bring creativity and expertise to every project. With a keen eye for detail and a passion for visual storytelling, I specialize in crafting compelling designs that leave a lasting impression.
                                </p>
                                <button className="btn_card">Read More</button>
                            </div>
                            <div className="card_main3">
                                <div className="icon">
                                    <i className="fas fa-code"></i>
                                </div>
                                <h1>Front End Developer</h1>
                                <p>
                                    I create engaging and responsive front-end designs using HTML, CSS, and JavaScript. My work ensures a seamless user experience and cross-browser compatibility, making websites look great on any device.
                                </p>
                                <button className="btn_card">Read More</button>
                            </div>
                            <div className="card_main3">
                                <div className="icon">
                                    <i className="fas fa-server"></i>
                                </div>
                                <h1>Back End Developer</h1>
                                <p>
                                    Specializing in server-side logic, database management, and integration, I ensure that your web applications are fast, secure, and scalable. My expertise in back-end development guarantees a robust foundation for your digital solutions.
                                </p>
                                <button className="btn_card">Read More</button>
                            </div>
                            <div className="card_main3">
                                <div className="icon">
                                    <i className="fas fa-plug"></i>
                                </div>
                                <h1>API Integration</h1>
                                <p>
                                    I offer seamless API integration services to connect various software applications, ensuring efficient data exchange and enhancing functionality. My solutions help streamline operations and improve user experiences.
                                </p>
                                <button className="btn_card">Read More</button>
                            </div>
                            <div className="card_main3">
                                <div className="icon">
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                <h1>Full Stack WebApp Dev</h1>
                                <p>
                                    As a full stack developer, I handle both front-end and back-end development, creating comprehensive web applications from start to finish. My expertise spans across various technologies, delivering well-rounded and high-performing web solutions.
                                </p>
                                <button className="btn_card">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Clients;
