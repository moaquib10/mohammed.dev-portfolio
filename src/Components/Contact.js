import React from "react";
import "./Contact.css";
import Location from "../Images/Location.jpg";
import Email from "../Images/Email.jpg";

export default function Contact() {
    return (
        <section className="contact-section">
            <h5 className="section-heading">CONTACT</h5>
            <h3 className="section-subheading">Don't hesitate! Hit me up and let's make magic happen! 👇</h3>
            <div className="contact-container">
                <div className="contact-item">
                    <img src={Location} alt="Location Icon" className="contact-icon" />
                    <div className="contact-details">
                        <h2>Location</h2>
                        <p>Karnataka, India</p>
                    </div>
                </div>
                <div className="contact-item">
                    <img src={Email} alt="Email Icon" className="contact-icon" />
                    <div className="contact-details">
                        <h2>Mail</h2>
                        <p>moaquib10@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
