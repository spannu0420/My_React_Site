import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";
import { Cultivator_API, Cultivator_API_1 } from "./API";
import { Cultivator_Shovels } from "./Product_Cards";

function Cultivator_Shovels_Pro() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692238299.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Tiller cultivator Shovels</h3>
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
                        <h3 style={{ fontWeight: 'bold' }}>Tiller Cultivator Shovel</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>The land is plowed by tiller cultivator shovels before it is sown. They disturb the upper soil layer, combine residues of crops and eliminate tiny weeds. They are shaped in such a way that they are able to dig deeper and loosen the soil in order to allow free air movement and moisture flow in order to prepare the field to plant..</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Loosens hard soil, Breaks clods effectively, Removes unwanted weeds, Helps mix leftover crop waste, Levels the surface before sowing, Improves soil aeration, Works well in dry and rough fields</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star agro cultivator shovel is designed to withstand the hard soil and long working hours providing the farmers with the powerful and reliable field preparation..</p>
                        </Col>
                        <Col md={1}></Col>

                    </Row>
                </Row>

            </Container>

            <Container>
                <Row className="ms-5">
                   
                    {Cultivator_API.map((item, i) => (
                        <Col key={i}>
                            <Cultivator_Shovels Cultivator_Shovels_Data={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
             <Container>
                <Row className="ms-5">
                   
                    {Cultivator_API_1.map((item, i) => (
                        <Col key={i}>
                            <Cultivator_Shovels Cultivator_Shovels_Data={item} />
                        </Col>
                    ))}
                    <Col md={6}></Col>
                </Row>
            </Container>


        </>

    )
}
export default Cultivator_Shovels_Pro;