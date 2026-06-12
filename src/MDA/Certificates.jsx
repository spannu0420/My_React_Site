import { Col, Container, Row } from "react-bootstrap";

function Certificates() {
    return (
        <>
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/static/bccc.webp")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className="m-0">
                    <Col xs={12} lg={4} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white text-start p-4 d-flex flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h3>Certificates</h3>
                            <h5 className="text-success">HOME - Certificates</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col><img className="cirti" src="https://www.staragroindustry.com/public/uploads/all_purpose/17650135151748.webp" alt="" /></Col>
                    <Col><img className="cirti" src="https://www.staragroindustry.com/public/uploads/all_purpose/17650135238317.webp" alt="" /></Col>
                    <Col><img className="cirti" src="https://www.staragroindustry.com/public/uploads/all_purpose/17650135309556.webp" alt="" /></Col>
                    <Col><img className="cirti" src="https://www.staragroindustry.com/public/uploads/all_purpose/17650135364435.webp" alt="" /></Col>
                </Row>
            </Container>
        </>

    )
}
export default Certificates