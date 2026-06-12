import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";
import { M_B_Plough } from "./Product_Cards";
import { M_B_Plough_API, M_B_Plough_API_2 } from "./API";

function M_B_Plough_Pro() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692385252.webp")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>M B Plough & Reversible Plough Blades</h3>
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
                        <h3 className="mb-5" style={{ fontWeight: 'bold' }}>M.B. Plough & Reversible Plough Blades</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>These plough blades plunge soil and scramble up new layers. They are used to eliminate stubble, old roots and hard soil. Reversible designs allow the farmer to utilize either side of the blade and doubling the life span and lessening the replacement requirements.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Deep soil turning, Stubble and root removal, Makes fresh seedbeds, Levels hard soil, Improves soil aeration, Works in dry and hard ground, Reversible use increases blade life.</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro plough blades are robust, sharp and durable in nature that allows one to carry out heavy tilling work with ease and efficiency.</p>
                        </Col>
                        <Col md={1}></Col>

                    </Row>
                </Row>

            </Container>

            <Container>
                <Row>
                    <Col md={1}></Col>

                    {M_B_Plough_API.map((item, i) => (
                        <Col key={i}>
                            <M_B_Plough MBPloughData={item} />
                        </Col>

                    ))}

                </Row>

                <Row>
                    <Col md={1}></Col>

                    {M_B_Plough_API_2.map((item, i) => (
                        <Col key={i}>
                            <M_B_Plough MBPloughData={item} />
                        </Col>


                    ))}
                    <Col md={2} className="ms-5 me-4"></Col>
                </Row>
            </Container>



        </>

    )
}
export default M_B_Plough_Pro;