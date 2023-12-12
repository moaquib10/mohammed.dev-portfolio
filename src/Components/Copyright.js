import React from "react";
import "./Copyright.css";
import Linkedinn from "../Images/LinkedInn.jpg";
import GitHub from "../Images/GitHub.jpg";
// import Twitter from "../Images/Twitter.png";


export default function Copyright() {
    return (
        <section className="body6">
            <div className="container6">
                <h5 className="heading5">Copyright © 2023-2024. All rights are reserved</h5>
                <ul className="copyright">
                    <li>
                        <a href="https://www.linkedin.com/in/mohammed-aquib-56a727212/" target="_blank" rel="noreferrer"><img src={Linkedinn} alt='' height="25" width="25" style={{ marginRight: '15px' }} /></a>
                        <a href="https://github.com/moaquib10" target="_blank" rel="noreferrer"><img src={GitHub} alt='' height="25" width="25" style={{ marginRight: '15px' }} /></a>
                        {/* <img src={Twitter} alt='' height="35" width="35" style={{ marginRight: '15px' }} /> */}
                    </li>
                </ul>
            </div>
        </section>
    );
};
