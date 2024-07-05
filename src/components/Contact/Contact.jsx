import React from 'react';
import './contact.css';
import Navbar from '../Navbar/navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="main_5" id="contact">
      <div className="inner_main5">
        <div className="heading_main5">
          <h1 className="fs_2">Contact <span className="color">Me!</span></h1>
        </div>
        <form action="">
          <div className="inner_form">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your E-mail" />
            <input type="number" placeholder="Enter Your Phone-Number" />
            <textarea placeholder="Your Question?" />
            <button className="btn3">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
