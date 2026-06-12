import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { ArrowRightShort } from "react-bootstrap-icons";
import { Seed_Drill_API, Seed_Drill_API_1 } from "./API";
import { Seed_Drill } from "./Product_Cards";

function Seed_Drill_Pro() {
    return (
        <>
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/uploads/category/17639692788807.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h4>Seed Drills Shovel</h4>
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
                        <h3 style={{ fontWeight: 'bold' }}>Seed Drills Shovel</h3>
                        <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>The seed drill shovels are used to insert seeds to the appropriate depth in order to ensure that the crop begins well. Even germination, even spacing of seeds, and improved root growth are guaranteed because the seeds are placed well. These shovels work in soil with ease and ensure that the rows are straight which makes farmers to provide favorable field results at minimal effort.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Row className="mt-5">
                        <Col md={1}></Col>
                        <Col>
                            <h5 >Uses:</h5>
                            <p style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Makes straight and uniform rows, Maintains equal seed depth, Helps seeds germinate faster, Works in soft and semi-hard soils, Reduces seed wastage, Saves sowing time, Gives better crop start.</p>
                            <p className="mt-4" style={{ lineHeight: '27px', color: 'grey', fontSize: '17px', fontFamily: 'Times New Roman' }}>Star Agro seed drill shovels are constructed using strong steel and with the correct design that will provide growers with clean and precise seed sowing every season..</p>
                        </Col>
                        <Col md={1}></Col>

                    </Row>
                </Row>

            </Container>

            
            <Container>
                <Row className="ms-5">
                   
                    {Seed_Drill_API.map((item, i) => (
                        <Col key={i}>
                            <Seed_Drill Seed_Drill_Data={item} />
                        </Col>
                    ))}
                </Row>
            </Container>

             <Container>
                <Row className="ms-5">
                   
                    {Seed_Drill_API_1.map((item, i) => (
                        <Col key={i}>
                            <Seed_Drill Seed_Drill_Data={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
            


        </>
    )
}
export default Seed_Drill_Pro;