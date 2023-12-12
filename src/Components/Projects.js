import React from "react";
import "./Projects.css";
import { BsGithub } from "react-icons/bs";
import { MdDesktopMac } from "react-icons/md";

export default function Projects() {

    const Card = ({ techUsed }) => {
        return (
            <div className="card">
                <h2>{techUsed}</h2>
            </div>
        );
    };

    const repositoryUrl01 = 'https://github.com/moaquib10/convosphere-ai-clone-react-project.git';
    const liveDemoUrl01 = "https://moaquib10.github.io/convosphere-ai-clone-react-project/";
    const repositoryUrl02 = 'https://github.com/moaquib10/weather-wonders-project-react.git';
    const liveDemoUrl02 = "https://moaquib10.github.io/weather-wonders-project-react/";

    return (
        <section className="body4">
            <div className="container4">
                <h5 className="heading1">PORTFOLIO</h5>
                <h1 className="heading2">Illuminating the Path to Progress 🚀</h1>
            </div>
            <div className="project">
                <div className="iframe-container">
                    <iframe
                        title="Project Demo"
                        src="https://moaquib10.github.io/convosphere-ai-clone-react-project/" // Replace with your actual live project URL
                        className="project-iframe"
                    ></iframe>
                </div>
                <div className="project-details">
                    <h2 className="project-title">Convosphere.ai Website Clone</h2>
                    <p className="project-description">
                        Carefully designed to reflect the sophistication of convosphere.ai. It responds smoothly, with easy-to-use features, showcasing a dedication to creating top-notch front-end interfaces. This clone combines precision and excellent design, establishing a high standard for polished user interfaces.
                    </p>
                    <div className="project-card-container">
                        <div className="card-container">
                            <Card techUsed="React" />
                            <Card techUsed="Vanila CSS" />
                        </div>
                    </div>
                    <div className="project-link-section">
                        <div className="project-link">
                            <a href={repositoryUrl01} target="_blank" rel="noopener noreferrer">
                                <span className="link-text">Code</span>
                                <BsGithub size={30} color="black" />
                            </a>
                        </div>
                        <div className="project-link">
                            <a href={liveDemoUrl01} target="_blank" rel="noopener noreferrer">
                                <span className="link-text">View Live Demo</span>
                                <MdDesktopMac size={30} color="black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-details">
                    <h2 className="project-title">The Weather Wonders</h2>
                    <p className="project-description">
                        Developed a personalized weather website aimed at delivering a seamless and informative user experience. The platform provides real-time weather data through a user-friendly interface, with features for easy customization and interpretation of data.
                    </p>
                    <div>
                        <div className="card-container">
                            <Card techUsed="React" />
                            <Card techUsed="Vanila CSS" />
                        </div>
                    </div>
                    <div className="project-link-section">
                        <div className="project-link">
                            <a href={repositoryUrl02} target="_blank" rel="noopener noreferrer">
                                <span className="link-text">Code</span>
                                <BsGithub size={30} color="black" />
                            </a>
                        </div>
                        <div className="project-link">
                            <a href={liveDemoUrl02} target="_blank" rel="noopener noreferrer">
                                <span className="link-text">View Live Demo</span>
                                <MdDesktopMac size={30} color="black" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="iframe-container">
                    <iframe
                        title="Project Demo"
                        src="https://moaquib10.github.io/weather-wonders-project-react/" // Replace with your actual live project URL
                        className="project-iframe"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
