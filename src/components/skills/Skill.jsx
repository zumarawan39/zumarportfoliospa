import React from 'react';
import './skill.css'; // Import your CSS file for styling
import Navbar from '../Navbar/navbar';

const Skill = () => {
  return (
    <div>
        <Navbar/>
      <section className="skills" id="skills">
      <h1 className='fs'>Technical <span className="color">Skills</span></h1>
        <div className="skills-container">
          <div className="skills-column">
            <div className="skill">
              <h3>HTML <span>100%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>CSS <span>80%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Bootstrap <span>70%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Tailwind<span>60%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Javascript <span>90%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
          </div>
          </div>
          <div className="skills-column">
            <div className="skill">
              <h3>React <span>60%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Angular <span>80%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Node Js<span>80%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>Express Js <span>90%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <h3>MongoDb <span>70%</span></h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
