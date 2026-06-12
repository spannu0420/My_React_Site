import { Col, Container, Row } from "react-bootstrap";
import { ProductAPI_1 } from "./Product";
import ProductMain from "./Product_API";


function Products()
{
    return(
        <>
       
        <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/static/product-breadcrumb.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                        <h3>Products</h3>
                        <h5 className="text-success " >HOME - PRODUCTS</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>


        <Container>
        
            <Row>
                {ProductAPI_1.map((item,i)=>(
                    <Col key={i} className="mt-5">
                        <ProductMain prodData={item}/>
                    </Col>
                    ))}
            </Row>
        </Container>

        </>
    )
}
export default Products;