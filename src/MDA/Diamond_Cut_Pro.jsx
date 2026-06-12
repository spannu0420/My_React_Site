import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";
import Diamond_Cut from "./Product_Cards";
import { Diamond_API_1 } from "./API";


function Diamond_Product() {
    return (
        <>
            {/* Banner Section */}
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639690787452.webp")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', marginTop: "100px" }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className="m-0">
                    <Col md={1}></Col>
                    <Col xs={12} lg={4} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white text-start p-4 d-flex flex-column justify-content-center" style={{ height: '180px', width: '80%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h6 className="ms-4" style={{ fontWeight: 'bold' }}>Category 10</h6>
                            <h3 className="mt-2 ms-4" style={{ fontWeight: 'bold' }}>Diamond Cut Shovels</h3>
                            <h5 className="text-success mt-3 ms-4">HOME - PRODUCTS</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            {/* Button Section */}
            <Container className="mt-5">
                <Row style={{ marginTop: "200px", textAlign: "right" }}>
                    <Col>
                        <div className="px-3 pb-3 text-end"> {/* Yahan text-right ko text-end kiya Bootstrap 5 ke liye */}
                            <Button
                                className="w-80 rounded-pill fw-semibold agri-btn-hover"
                                style={{ backgroundColor: '#d0d0d0', color: "black" }}
                                onClick={() => alert(`You selected: `)}>
                                View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
                            </Button>
                        </div>
                    </Col>
                     <Col md={1}></Col>
                </Row>
            </Container>

            {/* Content Section */}
            <Container className="mt-5">
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}> {/* Pura content ek hi bade col me wrap kiya taaki nesting sahi rahe */}
                        <h3 style={{ fontWeight: 'bold' }}>Diamond Cut Shovels</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>
                            Diamond-cut shovels are angled in shape. They penetrate soil at a quicker pace and contribute towards the turning of soils. They are handy where the fields are dry, narrow or have small stones.
                        </p>

                        <div className="mt-5">
                            <h5>Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>
                                Quick soil entry, Smooth soil cutting, Works in tough ground, Reduces tractor load, Gives uniform tillage, Helps fast field operation, Stays sharp longer
                            </p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>
                                Star Agro diamond-cut shovels have been designed to work hard and with prolonged longevity in all varieties of difficult soil.
                            </p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>

            <Container className="mb-5">
                <Row>
                    <Col md={1}></Col>

                    {Diamond_API_1.map((item, i) => (
                        <Col key={i} >
                            <Diamond_Cut DiamondData={item} />
                        </Col>
                    ))}
                    <Col md={2}></Col>

                </Row>
            </Container>
        </>
    );
}

export default Diamond_Product;