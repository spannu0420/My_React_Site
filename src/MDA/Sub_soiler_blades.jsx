import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { ArrowRightShort } from "react-bootstrap-icons";

function Sub_Soiler() {
    return (
        <>
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692788807.webp")`, backgroundSize: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col md={1}></Col>
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center  " style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Sub Soiler Blades</h3>
                            <h5 className="text-success" >HOME - PRODUCTS</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row style={{ margintop: "100px", textAlign: "right" }}>
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
                        <h3 style={{ fontWeight: 'bold' }}>Sub Soiler Blades</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>The hard soil layer (hard pan) that is formed deep in the soil is broken with the help of subsoiler blades. When shattered, water flows easier, roots develop further and crops become stronger. Such blades enhance the health of the soil when used in a long-term agriculture.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Breaks deep hardpan, Improves water movement, Supports deeper roots, Loosens ground layers, Reduces soil compaction, Helps increase yield, Improves soil structure.</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro subsoiler blades are robust and reliable and they provide farmers with superior soil recovery and higher crop performance.</p>
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
                                    src="https://www.staragroindustry.com/public/uploads/products/17629469894811.jpg"
                                    alt="Category-11.A"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 621-10</Card.Title>
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
                                    src="https://www.staragroindustry.com/public/uploads/products/17649965453386.jpg"
                                    alt="Category-11.B"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 634-16</Card.Title>
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
export default Sub_Soiler;