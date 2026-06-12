import React from 'react';
import { Card_Slider, Our_Clients, Our_Product, Photos, Quality, Real_Stories,  } from './Home_Cards.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ClientsAPI, PhotosAPI, ProductAPI, QualityAPI, Real_StoresAPI, SliderAPI, } from './Home_Cards_2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function FluidExample() {

    return (
        <>
            <div className="video-container" style={{ width: '100%', overflow: 'hidden' }}>
                <video
                    src="https://www.staragroindustry.com/public/static/banner101211.mp4"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>


            <div>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className='p-4 p-md-5 my-3'>
                            <p className="text-success fw-bold">खेतों में हुआ काम आसान, स्टार एग्रो के औज़ार हैं महान।</p>
                            <h1 className="fw-bold">Serving Farmers with reliable tools Since 1999</h1>
                            <p className="mt-3 text-secondary">
                                For over twenty five years now, Star Agro Industries has been at the forefront of manufacturing and exporting high-quality agricultural machinery spares, focusing on innovation and farmer-centered products that are not only durable, but also, improve productivity even under rigorous conditions.
                            </p>
                            <ul className="text-secondary ps-3">
                                <li>ISO 9001:2015 certified and quality assured</li>
                                <li>Wide range of Seed Drill Shovels, Tiller/Cultivator Shovels, Inter Shovels, Tiller Duck Foot Shovels, Red Soil, MB/Reversible Plough Blades, Rotary Slasher/Grass Cutter Blades, Rotovator Blades, Point of Plough and many more.</li>
                            </ul>
                        </Col>
                        <Col md={6} className='text-center'>
                            <img className='img-fluid rounded' src="https://www.staragroindustry.com/public/static/Serving-Farmers101.webp" alt="Serving Farmers" />
                        </Col>
                    </Row>
                </Container>

                <Container className='text-center mt-5 pt-4'>
                    <h5 className="text-success  fw-bold our">Our Product</h5>
                    <h2 className="fw-bold max-width-700 mx-auto">High-Performance Implements Designed for All Your Farm Needs</h2>
                    <h6 className="text-muted mt-2">Our product ranges of agricultural machinery spares are adapted to all kinds of Indian soils and farming conditions.</h6>
                </Container>
            </div>

            <Container>
                <Row>

                    <div className="px-4 position-relative">
                        <Swiper className="mySwiper p-2" modules={[Autoplay, Navigation]} navigation={false} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false, }} spaceBetween={10} breakpoints={{ 576: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}>
                            {SliderAPI.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <Card_Slider data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </Row>
            </Container>






            <Container className='mt-5' fluid style={{ backgroundImage: `url("https://i.ibb.co/S7nFQXGc/Gemini-Generated-Image-ynuaagynuaagynua.png")`, backgroundSize: 'cover' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center mb-4 mb-md-0">
                            <img className='img-fluid rounded image_2' src="https://www.staragroindustry.com/public/static/Durable-Solutions-Built1.webp" alt="Durable Solutions" />
                        </Col>
                        <Col md={6} className='px-4 px-md-5'>
                            <p className="text-warning fw-bold mb-1 our">Why Farmers Trust Star Agro</p>
                            <h2 className="fw-bold mb-3">Why Farmers Trust Star Agro</h2>
                            <p className='text-dark'>Our implements provide improved quality, reliability, and performance in the field to the farmers. All the tools were created to minimize the workload, enhance productivity, and work in harsh farming conditions.</p>
                            <h4 className="mt-4 fw-bold text-warning">Key Benefits:</h4>
                            <ul className='text-dark' style={{ lineHeight: '2' }}>
                                <li>Equipments designed to suit Indian land and agriculture.</li>
                                <li>An improved level of productivity and efficiency.</li>
                                <li>Prolonged durability using minimum maintenance.</li>
                            </ul>
                            <Button variant="warning"  className="mt-3 px-4 py-2 fw-bold text-dark" as={Link} to="/contact">Contact Now →</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className='text-center mt-5 pt-4 mb-5'>
                <h5 className="text-success  fw-bold our">Made for Indian Soil</h5>
                <h2 className="fw-bold max-width-700 mx-auto">Implements Adapted to Every Soil Type</h2>
                <h6 className="text-muted mt-2">Our machinery is designed to provide high quality performance in a very diverse soil environment; from sandy plains to heavy clay fields.</h6>
            </Container>

            <Container className='mt-5 mb-5'>
                <Row>
                    {ProductAPI.map((item, i) => (
                        <Col key={i}>
                            <Our_Product data={item} />
                        </Col>

                    ))}
                </Row>
            </Container>


            <Container className='mt-5' fluid style={{ backgroundImage: `url("https://i.ibb.co/h1W2wFXt/Gemini-Generated-Image-eq511beq511beq51.png")`, backgroundSize: 'cover' }}>
                <Container>
                    <Row className="align-items-center g-4">

                        {/* Left Side: 3 Cards Grid */}
                        <Col xs={12} lg={6}>
                            <Row className="g-4 justify-content-center">
                                {QualityAPI.map((item, i) => (
                                    <Col key={i} xs={12} sm={4} className='d-flex justify-content-center'>
                                        <Quality data={item} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        {/* Right Side: Text Description */}
                        <Col xs={12} lg={6} className='text-white text-center text-lg-start px-4'>
                            <h5 className='our text-warning'>Quality and Steel Strength</h5>
                            <h1 className="fw-bold display-6">Premium Steel Forged for Maximum Performance</h1>
                            <p className="mt-3 fs-6" style={{ opacity: 0.9 }}>
                                Star Agro products are produced using top quality of steel and superior methods in order to achieve high quality standards. The processes that are ISO certified ensure long-lasting precision engineered tools.
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        {PhotosAPI.map((item, i) => (
                            <Col className='mt-5' key={i}>
                                <Photos data={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
            <Container className=''>
                <section className="py-5" style={{ backgroundColor: '#fff' }}>
                    <Container className="text-center mb-4">
                        <h2 style={{ fontWeight: '700', color: '#0d2211', fontSize: '2.5rem' }}>
                            Our Clients
                        </h2>
                    </Container>

                    <div className="marquee-wrapper">
                        <div className="marquee-track">
                            {ClientsAPI.map((item, i) => (
                                <div key={i} style={{ margin: '0 15px', minWidth: '250px' }}>
                                    <Our_Clients data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Row className="align-items-center justify-content-center  " style={{ gap: '70px', display: 'flex', }}>
                    <Col xs={10} lg={5} className='d-flex justify-content-center p-5 flex-wrap ' style={{ flexDirection: 'column', borderRadius: '30px', backgroundColor: '#6bc6cd', }}>
                        <h5 className='our'>Field Performance Benefits</h5>
                        <h1>Increase Productivity <br /> with Minimal Work</h1>
                        <h5>Farm work is done more swiftly and efficiently by our implements spare parts. The farmers enjoy better soil preparations, accuracy in seed planting and ploughing.</h5>
                        <h1>Advantages:</h1>
                        <ul>
                            <li>Less labor and working time.</li>
                            <li>Better preparation of soil and crop production.</li>
                            <li>Reliable tools for years of use.</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={6} className=''>
                        <Row>
                            <img className='img-fluid' src="https://www.staragroindustry.com/public/static/ToolsShaped1.webp" alt="" style={{ borderRadius: '30px' }} />
                        </Row>
                        <Row className='mt-4'>
                            <h5 className='our'>Built on Experience</h5>
                            <h3>Tools Shaped For Farmers’ Needs</h3>
                            <h5 className='text-muted'>Sh. Arjun Dev Sehgal ji, our mentor and motivator started working on tiller shovels in 1970s, and has devoted his life with an aim of empowering the agriculture sector in India. His vision is what drives Star Agro to be innovative, quality focused and farmer empowering in the use of tools.</h5>
                        </Row>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className='d-flex justify-content-center  flex-wrap '>
                        <img className='A29' src="https://www.staragroindustry.com/public/uploads/all_purpose/17650136445490.webp" alt="" />
                    </Col >
                    <Col className='d-flex justify-content-center  flex-wrap '>
                        <img className='A29' src="https://www.staragroindustry.com/public/uploads/all_purpose/17650136505873.webp" alt="" />
                    </Col>
                    <Col className='d-flex justify-content-center flex-wrap '>
                        <img className='A29' src="https://www.staragroindustry.com/public/uploads/all_purpose/17650136565983.webp" alt="" />
                    </Col>
                </Row>
            </Container>

            <Container className='text-center mt-5 pt-4'>
                <h5 className="text-success  fw-bold our">What Farmers Are Saying</h5>
                <h1 className="fw-bold max-width-700 mx-auto">Real Stories from Fields Across India</h1>
            </Container>

            <Container className=' mt-5 pt-4'>
                <div className="px-4 position-relative">
                    <Swiper className="mySwiper p-2" modules={[Autoplay, Navigation]} navigation={false} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false, }} spaceBetween={10} breakpoints={{ 576: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1200: { slidesPerView: 3 } }}>
                        {Real_StoresAPI.map((item, i) => (
                            <SwiperSlide key={i}>
                                <Real_Stories data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </Container>

            <Container style={{marginTop:'100px', marginBottom:'40px'}}>
                <Row className='d-flex flex-column flex-md-row g-4'>

                    <Col className='d-flex justify-content-center flex-column text-center text-md-start'>
                        <h5 className='our'>From the Blog</h5>
                        <h1 style={{ wordBreak: 'break-word' }}>Let’s checkout Our all <br className="d-none d-md-block" /> Recent Blog</h1>
                    </Col>

                    <Col className='d-flex flex-column align-items-center align-items-md-end justify-content-center'>
                        <Button className='custom-btn' as={Link} to="/Blog" style={{ width: '150px' }}>View All Post</Button>
                    </Col>

                </Row>
            </Container>
            <Container className='text-center text-muted '>
                <h2>Coming soon..</h2>
            </Container>
        </>
    );
}

export default FluidExample;  
