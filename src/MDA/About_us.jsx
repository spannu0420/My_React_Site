/* eslint-disable */
import { Col, Container, Row, Card,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fix_CardAPI } from "./About_Card_2";
import { Card_6 } from "./About_Card";
import { Link } from 'react-router-dom';

function About_us() {
    return (
        <>
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/static/aboutbc.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h4>About Us</h4>
                            <h5 className="text-success" >HOME - ABOUT US</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row className="align-items-center g-4">
                    <Col xs={12} md={6}>
                        <h5 style={{ fontFamily: "'Savoye LET',cursive", fontSize: '30px', color: '#1b365d' }}>About Star Agro Industries</h5>
                        <h2>Building India’s Farming Future with Strength and Trust</h2>
                        <h6 className="text-muted lh-base"> India's Strength is Agriculture and Star Agro Industries is the Strength of Agriculture. Since 1999, we have been developing reliable implements that help you operate better, faster and with greater productivity in the field. Every product is a product of years of experience, learning in the field and farmer first approach.</h6>
                        <div className="btn2 mt-4">
                             <Button as={Link} to="/About_us">Contact Now <img style={{ height: '40px', backgroundColor: 'gray', borderRadius: '100%', padding: '10px' }} src="https://www.staragroindustry.com/public/front_assets/images/right-arrow-2.png" alt="" /></Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <img className='img-fluid rounded w-100' src="https://www.staragroindustry.com/public/static/Building-Indias-Farming.webp" alt="Farming Future" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="mt-5" style={{
                backgroundImage: `url("https://www.staragroindustry.com/public/static/Journeybg1.webp")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '60vh',
                padding: '40px 15px'
            }}>
                <Container>
                    <Row>
                        <Col xs={12} md={8} lg={6} className="my-3 my-md-5 p-4 p-md-5 mx-auto ms-md-5" style={{ backgroundColor: 'rgba(0, 128, 0, 0.4)', borderRadius:'20px', color: '#fff' }}>
                            <h5 style={{ fontFamily: "'Savoye LET',cursive", fontSize: '30px', color: '#1b365d' }}>Our Journey of Growth</h5>
                            <h2>From a Small Workshop to a Trusted Name in Indian Agriculture</h2>
                            <h6 className="opacity-90 lh-base">Our story began in the 1970s when Sh. Arjun Dev Sehgal started making tiller shovels using his hands to sell to the local farmers. What began as an individual cause developed to be a movement to enhance Indian agriculture.</h6>
                            <h6 className="opacity-90 mt-3">Star Agro has become a reliable producer today, due to its experience and good intentions to serve the people, who enrich the soil.</h6>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid style={{
                backgroundColor: '#eee',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '60vh',
                padding: '40px 15px'
            }}>
                <Container>
                    <Row className="g-4 align-items-center">
                        <Col xs={12} md={6} className="text-center">
                            <img className='img-fluid rounded w-100' src="https://www.staragroindustry.com/public/static/Anil-Sehgal.jpg" alt="Anil Sehgal" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Owner’s Message</h2>
                            <h6 className="fw-bold text-success mb-3">Serving the Soil keepers of India with Strength and Respect</h6>
                            <p className="lh-base">“Farming is not a job. It is forbearance, bravery and silent discipline. This is the reason why we design every product with our considerations since we are aware that it will form part of your work every day.
                                Our goal is simple. Provide farmers with the equipment that will remain constant, sharp, and helpful throughout all seasons.</p>
                            <p className="lh-base">Your disciplines teach us to be truthful in our job. And your feedback allows us to develop the tools to suit actual farming needs.</p>
                            <p className="lh-base">Thank you for giving Star Agro a place in your fields.”</p>
                            <h6 className="fw-bold mt-3">– Anil Sehgal, Star Agro Industries</h6>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="text-center mt-5 px-3">
                <h1 className="fs-2">स्टार एग्रो औज़ार – किसान का गर्व</h1>
                <h3 className="fs-4 text-secondary">Out of Raw Steel to Trustful Tools</h3>
                <p className="text-muted max-w-100 mx-auto" style={{ maxWidth: '700px' }}>The process does not leave a single step behind in ensuring that the tool that you hold enables you to become stronger, balanced, and perform at a lasting level.</p>
            </Container>

            <Container>
                <Row className="g-4 mt-2">
                    {Fix_CardAPI.map((item, i) => (
                        <Col key={i} xs={12} sm={6} md={4}>
                            <Card_6 data={item} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="py-5 mt-4">
                <Row className="g-4 justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className="border-1 shadow-sm p-3 p-md-4 rounded-4 h-100 bg-white">
                            <Card.Body>
                                <h2 className="fw-bold mb-3 text-dark fs-3">Our Purpose</h2>
                                <h5 className="fw-semibold text-secondary mb-4 fs-5">To Make India stronger in Agriculture</h5>
                                <Card.Text className="text-muted fs-6 lh-base">
                                    We provide innovative, efficient and durable implements
                                    designed to increase productivity. Star Agro was
                                    started to serve the hands that feed the nation by
                                    combining technology, experience and knowledge.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6}>
                        <Card className="border-1 shadow-sm p-3 p-md-4 rounded-4 h-100 bg-white">
                            <Card.Body>
                                <h2 className="fw-bold mb-3 text-dark fs-3">Our Vision for the Future</h2>
                                <h5 className="fw-semibold text-secondary mb-4 fs-5">Building a Self Sufficient and Mechanized India</h5>
                                <Card.Text className="text-muted fs-6 lh-base">
                                    Our vision is to a time when all Indian farmers have access to
                                    strong locally-produced tools that would maximize yield and
                                    provide a long-lasting value. We are focused on the future, where
                                    we make materials, processes, and design improvements
                                    according to the real conditions that farmers face.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="mb-5">
                <Row className="g-4 align-items-center">
                    <Col xs={12} md={6}>
                        <h1>Values That Shape Star Agro</h1>
                        <h6 className="text-muted mb-4">Directed by Integrity, Strength and the Spirit of Farming.</h6>
                        <ul className="service-list list-unstyled ps-0">
                            <li className="d-flex align-items-start mb-3">
                                <img className="me-3 mt-1" src="https://argonic-agriculture-and-organic-farm-html-template.vercel.app/assets/images/icon/check1.png" alt="check" />
                                <span>Relationship of the longevity of trust - We gain respect by being consistent.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <img className="me-3 mt-1" src="https://argonic-agriculture-and-organic-farm-html-template.vercel.app/assets/images/icon/check1.png" alt="check" />
                                <span>Quality Responsibility - Every product reflects our commitment.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <img className="me-3 mt-1" src="https://argonic-agriculture-and-organic-farm-html-template.vercel.app/assets/images/icon/check1.png" alt="check" />
                                <span>Honesty in All Actions - We stand by our word and work.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <img className="me-3 mt-1" src="https://argonic-agriculture-and-organic-farm-html-template.vercel.app/assets/images/icon/check1.png" alt="check" />
                                <span>Innovation with Purpose - We make it better by real farm feedback.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <img className="me-3 mt-1" src="https://argonic-agriculture-and-organic-farm-html-template.vercel.app/assets/images/icon/check1.png" alt="check" />
                                <span>Honoring Farmers and the Soil - We are based on both.</span>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <img className='img-fluid rounded w-100' src="https://www.staragroindustry.com/public/static/Values1.webp" alt="Our Values" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default About_us;
