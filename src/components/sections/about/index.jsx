import { Col, Row } from "react-bootstrap";
import AnimationLottie from "../../share/animation-lottie.jsx";
import codingJSON from '../../../assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "../../../assets/lottie/string/development";
import { CONTACT_LOTTIE } from "../../../assets/lottie/string/contact";

import GlowCard from "../../share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "../divider.tsx";
import { APP_DATA } from "../../../helpers/data.tsx";
import SocialMedia from "../social.media.tsx";

const About = () => {
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">Know Who <span className="brand-red">I'M</span> </h3>
                    <div>
                        <div>
                            <p> Hi Everyone, I am Thanh from DaNang, VietNam.</p>

                            <p> I am currently employed as a a freelance dev (start-up).</p>

                            <p> I have completed Bachelor's degree in Software Engineer atAdmiral Makarov State University of Maritime and Inland Shipping ( GUMRF - Russia ).</p>
                        </div>
                    </div>
                    <div>
                        <p>Apart from coding, some other activities that I love to do!

                        </p>
                        <ul>
                            <li>Playing Games</li>
                            <li>Writing Tech Blogs</li>
                            <li>Travelling</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">"To live without hope is to cease to live ~.~"</p>
                        <p className="text-center brand-red">--Fyodor Dostoevsky ( Фёдор Достоевский )</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">Education</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2021-2026</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Software Engineer</p>
                                                <p className="company">Admiral Makarov State University of Maritime and Inland Shipping</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        youtube={APP_DATA.YOUTUBE_URL}
                        github={APP_DATA.GITHUB_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                        udemy={APP_DATA.UDEMY_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;