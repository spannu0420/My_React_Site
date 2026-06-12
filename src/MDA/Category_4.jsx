import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";
import { Tiller_Duck } from "./Product_Cards";
import { Tiller_Duck_API_1 } from "./API";




function Tiller_Duck_Pro() {
    return (
        <>
            {/* Banner Section */}
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692989281.webp")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className="m-0">
                    <Col xs={12} lg={4} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white text-start p-4 d-flex flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Tiller Duck Foot Shovels & Misc</h3>
                            <h5 className="text-success">HOME - PRODUCTS</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            {/* Button Section */}
            <Container className="mt-5">
                <Row style={{ marginTop: "100px", textAlign: "right" }}>
                    <Col>
                        <div className="px-3 pb-3 text-end">
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
                    <Col md={10}>
                        <h3 style={{ fontWeight: 'bold' }}>Tiller Duck Foot Shovels & Misc</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Duck foot shovels are broad shovels, which cover a greater area of land within one run. They operate near the ground and are best suited to clear off the shallow weeds and preparing the top base. They are used by farmers to provide a smooth and clean finish to the field and then sown.</p>


                        <div className="mt-5">
                            <h5>Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>
                                Shallow weed cutting, Smoothens upper soil layer, Finishes field before sowing, Covers large area quickly, Removes unwanted roots, Helps with surface cleaning, Works in many soil types
                            </p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>
                                Star Agro duck foot shovels help to save effort and time and field finishing is made quicker and more uniform.
                            </p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>

            <Container  className="mb-5">
                <Row>
                    <Col md={1}></Col>

                    {Tiller_Duck_API_1.map((item, i) => (
                        <Col key={i} >
                            <Tiller_Duck Tiller_Duck_Data={item} />
                        </Col>
                    ))}
                    <Col md={2}></Col>

                </Row>
            </Container>
        </>
    );
}

export default Tiller_Duck_Pro;