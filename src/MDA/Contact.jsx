import { Button, Col, Container, Row } from "react-bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaPhoneVolume, } from "react-icons/fa";
function Contact() {
    return (

        <>
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/static/contact-breadcrumb.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h4>Contact Us</h4>
                            <h5 className="text-success" >HOME - CONTACT US</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            <Container className='text-center mt-5 pt-4 mb-5'>
                <h5 className="text-success  fw-bold our">Contact Star Agro Industries</h5>
                <h2 className="fw-bold max-width-700 mx-auto">Let’s Grow Agriculture Together</h2>
                <h6 className="text-muted mt-2">We will be happy to receive queries, bulk orders, or technical assistance, contact us, and we will give you professional service and quality farm machinery and spares at a reasonable cost.</h6>

                <Row className="mt-5">
                    <Col>

                        <div className="d-flex flex-column gap-4 py-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="text-success fs-3">
                                    <FaPhoneVolume />
                                </div>
                                <a href="tel:+91-9254123400" className="text-decoration-none text-dark">
                                    <p className="m-0 text-muted small">Have a question?</p>
                                    <span className="fw-bold fs-5">+91-9254123400</span>
                                </a>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <div>
                                    <img
                                        src="https://www.staragroindustry.com/public/static/phone-contact.png"
                                        alt="contact"
                                        style={{ height: "40px", width: "40px" }}
                                    />
                                </div>
                                <a href="tel:+91-9254123600" className="text-decoration-none text-dark">
                                    <p className="m-0 text-muted small">Have a question?</p>
                                    <span className="fw-bold fs-5">+91-9254123600</span>
                                </a>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <div>
                                    <img
                                        src="https://www.staragroindustry.com/public/static/email-contact.png"
                                        alt="email"
                                        style={{ height: "40px", width: "40px" }}
                                    />
                                </div>
                                <a href="mailto:staragroind@gmail.com" className="text-decoration-none text-dark">
                                    <p className="m-0 text-muted small">Write Email</p>
                                    <span className="fw-bold fs-5">staragroind@gmail.com</span>
                                </a>
                            </div>

                            <div className="d-flex align-items-start gap-3">
                                <div className="pt-1">
                                    <img
                                        src="https://www.staragroindustry.com/public/static/location.png"
                                        alt="location"
                                        style={{ height: "40px", width: "40px", objectFit: "contain" }}
                                    />
                                </div>
                                <a href="https://maps.app.goo.gl/e1FSKruetYNWbQUZ9" target="_blank" rel="noreferrer" className="text-decoration-none text-dark text-start">
                                    <p className="m-0 text-muted small">Our Location</p>
                                    <div className="fw-semibold mt-1">
                                        <strong>Unit One:</strong> 261 Sector 3, HSIIDC <br /> Karnal - 132001 (HR) Bharat
                                    </div>
                                    <hr className="my-2 text-muted" />
                                    <div className="fw-semibold">
                                        <strong>Unit Two:</strong> 208-C Sector 3, HSIIDC <br /> Karnal - 132001 (HR) Bharat
                                    </div>
                                </a>
                            </div>
                        </div>

                    </Col>
                    <Col className="p-5 shadow-lg">
                        <Row className="mb-3">
                            <Col xs={12} md={6} className="mb-3 mb-md-0">
                                <input type="text" placeholder="Name" className="form-control" />
                            </Col>
                            <Col xs={12} md={6}>
                                <input type="email" placeholder="Email Address" className="form-control" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={6} className="mb-3 mb-md-0">
                                <input type="number" placeholder="Phone Number" className="form-control" />
                            </Col>
                            <Col xs={12} md={6}>
                                <input type="text" placeholder="Subject" className="form-control" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12}>
                                <textarea placeholder="Write Message" className="form-control" rows="4"></textarea>
                            </Col>
                        </Row>
                        <Button className="btn btn-primary">Send Message</Button>
                    </Col>
                </Row>
            </Container>

        </>

    )
}
export default Contact;