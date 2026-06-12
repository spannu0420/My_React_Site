import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

function Rotavator_Pro() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692579442.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col md={1}></Col>
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Rotavator Blades</h3>
                            <h5 className="text-success" >HOME - PRODUCTS</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>


            <Container className="mt-5">
                <Row style={{margintop: "100px", textAlign: "right" }}>
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
                        <h3 style={{ fontWeight: 'bold' }}>Rotavator Blades</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Rotavator blades are used to chop lumps of soil and evenly blend the soil to create a fine seed bed. They are also favored by farmers when they are preparing their soils fast because they can work in wet, dry and mixed fields. It is done in a single pass and they create the field soft enough to be sown.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Clod breaking, Soil mixing, Seedbed finishing, One-pass tillage, Quick land preparation, Works in all soil types, Helps uniform field leveling.</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro rotavator blades provide sharp and consistent results, and assist farmers to save time and tractor work..</p>
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
                                    src="https://www.staragroindustry.com/public/uploads/products/17649962665797.jpg"
                                    alt="Category-8.A"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 446 -07</Card.Title>
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
                                    src="https://www.staragroindustry.com/public/uploads/products/17650035794527.jpg"
                                    alt="Category-8.B"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 457-07</Card.Title>
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
export default Rotavator_Pro;