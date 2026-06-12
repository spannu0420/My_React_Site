import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

function Rotary_Pro() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692579442.webp")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Rotary Slasher Blades</h3>
                            <h5 className="text-success" >HOME - PRODUCTS</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>


            <Container className="mt-5">
                <Row style={{ margintop: "200px", textAlign: "right" }}>
                    <Col>
                        <div className="px-3 pb-3 text-right">
                            <Button
                                className="w-80 rounded-pill fw-semibold agri-btn-hover "
                                style={{ backgroundColor: '#d0d0d0', color: "black" }}
                                onClick={() => alert(`You selected: `)}>
                                View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
                            </Button>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>

            </Container>

            <Container className="mt-5">
                <Row>
                    <Col md={1}></Col>

                    <Col>
                        <h3 style={{ fontWeight: 'bold' }}>Rotary Slasher Bladess</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>The grass, bushes and waste of crops are cut using slasher blades. Such blades maintain smooth farmlands which are beneficial during the following crop production. They decrease the load of the tractor and provide clean cutting and do not pull the soil..</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Grass cutting, Bush clearing, Field border cleaning, Stubble management, Removing light vegetation, Preparing field for sowing, Reduces manual cutting work.</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro slasher blades are smooth and provide quick cuts and assist in leaving farmers with clean fields ready to use..</p>
                        </Col>
                        <Col md={1}></Col>

                    </Row>
                </Row>

            </Container>

            <Container className="mb-5">

                <Row>
                    <Col md={1}></Col>
                    <Col>
                        <Card className="mt-5 shadow-sm  h-90   " style={{ width: '18rem', textAlign: "center", borderBottom: "1px solid grey" }}>
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src="https://www.staragroindustry.com/public/uploads/products/17650221784834.jpg"
                                    alt="Category-8.A"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 390-12</Card.Title>
                            </Card.Body>
                            <div className="px-3 pb-3 text-center">
                                <Button
                                    className="w-80 rounded-pill fw-semibold agri-btn-hover "
                                    style={{ backgroundColor: '#d0d0d0', color: "black" }}
                                    onClick={() => alert(`You selected: `)}>
                                    View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mt-5 shadow-sm  h-90  " style={{ width: '18rem', textAlign: "center", borderBottom: "1px solid grey" }}>
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src="https://www.staragroindustry.com/public/uploads/products/17649961997157.jpg"
                                    alt="Category-8.B"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 391-12</Card.Title>
                            </Card.Body>
                            <div className="px-3 pb-3 text-center">
                                <Button
                                    className="w-80 rounded-pill fw-semibold agri-btn-hover "
                                    style={{ backgroundColor: '#d0d0d0', color: "black" }}
                                    onClick={() => alert(`You selected: `)}>
                                    View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
                                </Button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}></Col>

                </Row>

            </Container>
        </>

    )
}
export default Rotary_Pro;