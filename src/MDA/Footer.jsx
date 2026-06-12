import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="position-relative text-white py-5 mt-5"
            style={{
                backgroundImage: ` url('https://i.ibb.co/hx2GY2YR/Gemini-Generated-Image-2vbb2c2vbb2c2vbb.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Container>

                <Row className="text-center mb-5">
                    <Col xs={12}>
                        <div className="bg-white d-inline-block p-2 mb-3 rounded shadow-sm">
                            <img
                                src="https://www.staragroindustry.com/public/uploads/settings/17629274017458.png"
                                alt="Star Agro"
                                style={{ height: '60px' }}
                            />
                        </div>
                        <h4 className="fw-normal text-white-50 fs-5">Welcome to World of Agro Shovels & Blades.</h4>
                    </Col>
                </Row>

                <Row className="g-4">

                    <Col xs={12} sm={6} lg={3}>
                        <h5 className="fw-bold mb-3 text-white">Links</h5>
                        <div className="d-flex flex-column gap-2">
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Home">Home</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/About_us">About Us</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Products">Product</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Certificates">Certificates</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/why_us">Why Us</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/contact">Contact</Link>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={3}>
                        <h5 className="fw-bold mb-3 text-white">Categories</h5>

                        <div
                            className="d-flex flex-column gap-2"
                            style={{
                                maxHeight: '150px',
                                overflowY: 'auto',
                                paddingRight: '5px'
                            }}
                        >
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Seed_Drill_Pro">1. Seed Drills Shovel</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Cultivator_Shovels_Pro">2. Tiller cultivator shovel</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Inter_Shovels_Pro">3. Inter Shovels</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Tiller_Duck_Pro">4. Tiller Duck Foot Shovels & Misc</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Duck_Sweeps_Pro">5. Duck foot sweeps</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/M_B_Plough_Pro">6. M B Plough & Reversible Plough Blades</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Rotary_Pro">7. Rotary Slasher Blades</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Rotavator_Pro">8. Rotavator Blades</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Plough">9. Point of plough (export oriented)</Link>
                            <Link className="text-white-50 text-decoration-none" as={Link} to="/Sub_Soiler">10. Sub Soiler Blades</Link>

                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={3}>
                        <h5 className="fw-bold mb-3 text-white">Location/Map</h5>
                        <p className="text-white-50 mb-3 small">
                            <strong>Unit One :</strong> 261 Sector 3, HSIIDC <br />
                            Karnal -132001 (HR) Bharat
                        </p>
                        <div className="rounded overflow-hidden shadow-sm" style={{ height: '130px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35571.660338149224!2d76.984839!3d29.66518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e70443fffffff%3A0x1c0692e2cc089554!2sStar%20Agro%20Industries!5e1!3m2!1sen!2sin!4v1779904669754!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={3}>
                        <h5 className="fw-bold mb-3 text-white">Contact</h5>
                        <div className="d-flex flex-column gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-white">📞</span>
                                <a href="tel:+919254123400" className="text-white-50 text-decoration-none">+91-9254123400</a>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-white">📞</span>
                                <a href="tel:+919254123600" className="text-white-50 text-decoration-none">+91-9254123600</a>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-white">✉️</span>
                                <a href="mailto:staragroind@gmail.com" className="text-white-50 text-decoration-none text-truncate">staragroind@gmail.com</a>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-white">🌐</span>
                                <a href="https://staragroindustry.com" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">staragroindustry.com</a>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className="footer-copyright text-center py-3" style={{ borderTop: '1px solid #444', marginTop: '20px', color: '#bbb', fontSize: '14px' }}>
                <p>&copy; {new Date().getFullYear()} MDA. All Rights Reserved. Designed by <b>SSSK</b></p>
            </div>
        </footer>
    );
};

export default Footer;