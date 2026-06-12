import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";
import { Duck_Sweeps_API_1, Duck_Sweeps_API_2, Duck_Sweeps_API_3 } from "./API";
import { Duck_Sweeps } from "./Product_Cards";



function Duck_Sweeps_Pro() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692104719.webp")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Duck foot sweeps</h3>
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
                        <h3 className="mb-5" style={{ fontWeight: 'bold' }}>Duck foot sweeps</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Duck foot sweeps cut off weeds along the surface of the soil and rake the weeds off. Their broad V-shape avoids weeds and does not uproot the low soil. They are utilized by farmers in the crop growth between fields as a quick and efficient way of maintaining the field.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Shallow tillage, Root-level weed removal, Surface cleaning, Mid-season field care, Prevents weed spreading, Keeps soil loose, Gives smooth movement.</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro sweeps are designed in such a way that they offer quick cleaning to the farmers and lasting use in every patch of soil..</p>
                        </Col>
                        <Col md={1}></Col>

                    </Row>
                </Row>

            </Container>

            <Container className="mb-5">
                <Row>
                    
                    <Col md={1}></Col>
                    {Duck_Sweeps_API_1.map((item, i) => (
                        <Col key={i}>
                            <Duck_Sweeps Duck_Sweeps_Data={item}/>
                        </Col>

                    ))}
                    <Col md={1}></Col>


                </Row>
                 <Row>
                    
                    <Col md={1}></Col>
                    {Duck_Sweeps_API_2.map((item, i) => (
                        <Col key={i}>
                            <Duck_Sweeps Duck_Sweeps_Data={item}/>
                        </Col>

                    ))}
                    <Col md={1}></Col>
                    


                </Row> 
                <Row>
                    
                    <Col md={1}></Col>
                    {Duck_Sweeps_API_3.map((item, i) => (
                        <Col key={i}>
                            <Duck_Sweeps Duck_Sweeps_Data={item}/>
                        </Col>

                    ))}
                    <Col md={2} className="ms-5 me-4"></Col>

                </Row>

              
            </Container>



        </>

    )
}
export default Duck_Sweeps_Pro;