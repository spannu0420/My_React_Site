import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

function Inter_Shovels_Pro() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692238299.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Inter Shovels</h3>
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
                        <h3 style={{ fontWeight: 'bold' }}>Inter Shovels</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Between crop rows inter shovels are applied when plants are still in growth. They are used in eliminating small weeds without destroying the crop. This maintains the soil open allowing easy access of air and water to the roots. These shovels aid in the keeping of soils healthy at critical stages of crop production.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Between-row soil loosening, Small weed removal, Improves soil breathing, Supports young crop growth, Helps moisture reach roots, Keeps field clean, Protects growing plants</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro inter shovels are even and sharp, which allows farmers to keep the rows of crops without destroying plants...</p>
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
                                    src="https://www.staragroindustry.com/public/uploads/products/17629463946345.jpg"
                                    alt="Category-8.A"
                                    style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
                                />
                                <hr />
                                <Card.Title className="fw-bold" >Star 127-08</Card.Title>
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
export default Inter_Shovels_Pro;