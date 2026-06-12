/* eslint-disable */
import { Card, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function Why_us() {
    return (
        <>
            
            <Container fluid style={{ width: '100%', height: 'auto', minHeight: '40vh', display: 'block', backgroundImage: `url("https://www.staragroindustry.com/public/static/wuBreadcrumb.webp")`, backgroundSize: '', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <Row style={{ height: '200px' }}></Row>
                <Row className=" m-0 ">
                    <Col xs={12} lg={4} className=" d-flex align-items-center justify-content-center " >
                        <div className="bg-white text-start p-4 d-flex  flex-column justify-content-center" style={{ height: '200px', width: '50%', minWidth: '280px', boxSizing: 'border-box', borderStartStartRadius: '10px', borderStartEndRadius: '10px' }}>
                            <h4>Why Us</h4>
                            <h5 className="text-success" >HOME - WHY US</h5>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block"></Col>
                </Row>
            </Container>

            <Container className="mt-5 px-3">
                <Row className="g-4 align-items-center">
                    <Col xs={12} md={6}>
                        <h2>Why Star Agro Industries</h2>
                        <h5>Tools Built for India’s Fields, Designed Around Farmers’ Daily Work</h5>
                        <p className="text-muted">The selection of the appropriate farming tool may transform the whole season. At Star Agro industries, we dwell upon the construction of agricultural machinery spare parts that help farmers to work long days, under various soil conditions, and at all the phases of field preparation.</p>
                        <p className="text-muted">The farmers in India have confidence with us as our products have been designed with actual field knowledge and with truthful production. All the shovels, blades, and sweeps have got the strength, balance and reliability which are the result of many years of working.</p>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <img className="img-fluid rounded w-100" src="https://www.staragroindustry.com/public/static/Why-Star-Agro-Industries.webp" alt="Why Star Agro" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="mt-5" style={{
                background: `#eee`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '60vh',
                padding: '40px 15px'
            }}>
                <Container>
                    <Row className="g-4 align-items-center">
                        <Col xs={12} md={6} className="text-center order-2 order-md-1">
                            <img className="img-fluid rounded w-100" src="https://www.staragroindustry.com/public/static/ToolsThat-Match.webp" alt="Tools Match" />
                        </Col>
                        <Col xs={12} md={6} className="order-1 order-md-2">
                            <h1> 1. Tools That Match Indian Soil and Weather</h1>
                            <p className="text-dark">
                                Indian soils become wet, dry, soft, and hard as well as light and heavy soil. The
                                instruments we use are made so that they can serve in every circumstance, without
                                either bending or breaking.
                            </p>
                            <ul className="service-list my-3 list-unstyled ps-0">
                                <li className="d-flex align-items-center mb-2">
                                    <span className="fa fa-check me-2 text-success"></span>
                                    Handles rough, dry patches
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <span className="fa fa-check me-2 text-success"></span>
                                    Easily penetrates dense soil.
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <span className="fa fa-check me-2 text-success"></span>
                                    Operations in wet and moist soils.
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <span className="fa fa-check me-2 text-success"></span>
                                    Fits light as well as heavy tractors.
                                </li>
                            </ul>
                            <p className="text-dark">
                                Our designs remain constant in all seasons’ summer heat, monsoon damp or winter hard soil.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="py-5 mt-5 px-3">
                <Row className="g-4 justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className="border-1 shadow-sm p-4 rounded-4 h-100 bg-white">
                            <Card.Body>
                                <h2 className="fw-bold mb-3 text-dark fs-3">2. Steel That Stays Strong for Years</h2>
                                <h6 className="fw-semibold text-secondary mb-4">We take extremely tough metal that is designed to sustain multiple blows, extensive pressure of soil and long hours of fieldwork.</h6>
                                <ul className="service-list my-3 list-unstyled ps-0">
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Heat-treated strength
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Wear-resistant cutting edges
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Wear-resistant cutting edges
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Stays sharp for more passes
                                    </li>
                                </ul>
                                <Card.Text className="text-muted fs-6 lh-base">
                                    The farmers get long lasting tools which work smoothly with minimal maintenance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={6}>
                        <Card className="border-1 shadow-sm p-4 rounded-4 h-100 bg-white">
                            <Card.Body>
                                <h2 className="fw-bold mb-3 text-dark fs-3">3. Balanced Tools That Reduce Effort</h2>
                                <h5 className="fw-semibold text-secondary mb-4">The farmer should not be bothered by a tool or the tractor. Our products are well balanced to allow easier movements and reduced weight.</h5>
                                <ul className="service-list my-3 list-unstyled ps-0">
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Stays sharp for more passes
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Easier movement in soil
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Better control during tilling
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <span className="fa fa-check me-2 text-success"></span>
                                        Safer and more stable cutting
                                    </li>
                                </ul>
                                <Card.Text className="text-muted fs-6 lh-base">
                                    The farmers experience the distinction of day-to-day labor. The field is completed in less time and results in less weariness and less usage of diesel.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="px-3 mt-5">
                <Row className="g-4 align-items-center">
                    <Col xs={12} md={6}>
                        <h1 className="fw-bold mb-3 text-dark">4. Designs Made from Real Field Learning</h1>
                        <h6 className="text-muted">We don’t guess. We learn directly from farms</h6>
                        <h6 className="text-muted">This concerns the farmers, mechanics and field workers whose real problems are improved with the help of an invention.</h6>
                        <ul className="service-list my-3 list-unstyled ps-0">
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Better angles for soil entry
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Improved hole alignment
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Stronger edges for heavy soil
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Cleaner cutting for neat field finish
                            </li>
                        </ul>
                        <h6 className="text-muted">Each minor modification is created in order to address an actual problem a farmer used to have.</h6>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <img className="img-fluid rounded w-100" src="https://www.staragroindustry.com/public/static/Designs-Made-fromRea.webp" alt="Field Learning" />
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 px-3">
                <Row className="g-4 align-items-center">
                    <Col xs={12} md={6} className="text-center order-2 order-md-1">
                        <img className="img-fluid rounded w-100" src="https://www.staragroindustry.com/public/static/Consistent-Quality.webp" alt="Consistent Quality" />
                    </Col>
                    <Col xs={12} md={6} className="order-1 order-md-2">
                        <h1>5. Consistent Quality in Every Piece</h1>
                        <h6 className="text-muted mt-3 mt-md-5">All the parts go through various checks thus giving the farmers tools they can rely on.</h6>
                        <ul className="service-list my-3 list-unstyled ps-0">
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Metal testing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Strength testing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Fit and balance checks
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Field performance checks
                            </li>
                        </ul>
                        <h6 className="text-muted">This provides uniform quality of the product batches.</h6>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 px-3">
                <Row className="g-4 align-items-center">
                    <Col xs={12} md={6}>
                        <h1 className="fw-bold mb-3 text-dark">6. Simple, Trouble-Free Maintenance</h1>
                        <h6 className="text-muted">Farmers have no time to make complex repairs. Our equipment remains low-tech - easy to install, easy to wash and easy to handle.</h6>
                        <ul className="service-list my-3 list-unstyled ps-0">
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                No complex fittings
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                No difficult adjustments
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Works with common farm equipment
                            </li>
                        </ul>
                        <h6 className="text-muted">The farmer works more and less in repairing tools.</h6>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <img className="img-fluid rounded w-100" src="https://www.staragroindustry.com/public/static/Simple-Trouble-Free.webp" alt="Simple Maintenance" />
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 mb-5 px-3">
                <Row className="g-4 align-items-center">
                    <Col xs={12} md={6} className="text-center order-2 order-md-1">
                        <img className="img-fluid rounded w-100" src="https://www.staragroindustry.com/public/static/Brand-RootedinTrust.webp" alt="Brand Trust" />
                    </Col>
                    <Col xs={12} md={6} className="order-1 order-md-2">
                        <h1>7. A Brand Rooted in Trust and Honest Work</h1>
                        <h6 className="text-muted mt-3 mt-md-5">Star Agro expanded due to the fact that farmers had confidence in what we did and the tools we used. The trust we hold onto that trust remains through ensuring that we keep our process straight, our content robust and our orientation to serving the real needs of farming.</h6>
                        <ul className="service-list my-3 list-unstyled ps-0">
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Dedicated support
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Clear communication
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Steady product quality
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <span className="fa fa-check me-2 text-success"></span>
                                Years of field experience
                            </li>
                        </ul>
                        <h6 className="text-muted">Farmers are certain that they are dealing with a company that supports its products and that they appreciate their efforts.</h6>
                    </Col>
                </Row>
            </Container>




        </>






    );
}
export default Why_us;
 