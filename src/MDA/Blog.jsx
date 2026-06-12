import { Col, Container, Row } from "react-bootstrap";

function Blog() {
    return (
        <>

            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/static/blog-breadcrumb.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                   
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h4>Blog</h4>
                            <p className="text-success mt-2 fw-semibold" >HOME - BLOG</p>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>    

            <Container>
                <Row className="mt-5"  >
                    <Col className="mt-4" style={{textAlign:'center' , color:"grey", fontWeight:'bold'}}>
                    <h4>Coming soon..</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Blog;