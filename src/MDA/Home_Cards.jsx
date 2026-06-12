import { Button, Card, CardGroup, } from "react-bootstrap"

function Card_Slider(props) {
    let cards_data_2 = props.data
    return (
        <Card className=" geo-frame-card shadow-sm">
            <div className="geo-media-box">
                <Card.Img variant="top" src={cards_data_2?.Image} style={{ height: '210px', objectFit: 'cover' }} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between p-4">
                <div>
                    <Card.Title className="fs-5 mb-2 geo-title">{cards_data_2?.Name}</Card.Title>
                    <p className="text-muted small">{cards_data_2?.Description}</p>
                </div>
                <Button className="geo-action-btn mt-3 w-100">{cards_data_2?.Button}</Button>
            </Card.Body>
        </Card>

    )
}

function Our_Product(props) {
    let cards_data = props.data
    return (
        <Card className="h-100 border-0 shadow-sm agro-card ">
            <Card.Body className="d-flex flex-column justify-content-between p-4 ">
                <div className='text-center bg-warning rounded-5'>
                    <Card.Title className="fw-bold fs-5 text-dark m-2">{cards_data?.Name}</Card.Title>
                    <p className="text-muted small">{cards_data?.Description}</p>
                </div>
            </Card.Body>
            <div className="card-img-wrapper text-center mb-5">
                <Card.Img
                    variant="top"
                    src={cards_data?.Image}
                    style={{ height: '200px', width: '200px', borderRadius: '50%' }}
                />
            </div>
        </Card>
    )
}


function Quality(props) {
    let cards_data_3 = props.data;
    return (
        <Card className="text-center align-items-center border-0 bg-white p-3 h-100 shadow-none">
            <Card.Img variant="top" src={cards_data_3?.Image} style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
            <Card.Body className="p-0 mt-3">
                <Card.Text className='d-flex flex-column' style={{ backgroundColor: 'yellow', height: '110px', width: '150px', borderEndStartRadius: '50px', borderStartEndRadius: '50px', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className='our' style={{ margin: '0', fontWeight: 'bold' }}>{cards_data_3?.Name}</h1>
                    <p style={{ margin: '0', fontSize: '14px', fontWeight: '500' }}>{cards_data_3?.Description}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Photos(props) {
    let cards_data_4 = props.data;
    return (
        <CardGroup className='text-center d-flex justify-content-center gap-3 wrapper-box'>
            <div className="hover-photo-box m-2" style={{ height: '295px', width: '220px' }}>
                <img src={cards_data_4?.Image} style={{ height: '295px', objectFit: 'cover' }} />
                <div className="photo-text-overlay">
                    <div>
                        <p>{cards_data_4?.Description}</p>
                    </div>
                </div>
            </div>
        </CardGroup>

    )
}

function Our_Clients(props) {
    let cards_data_5 = props.data
    return (
        <Card className="client-card shadow-sm" style={{ height: '130px', objectFit: 'cover' }} >
            <Card.Body className="d-flex align-items-center justify-content-center">
                <img
                    src={cards_data_5?.Image}
                    alt={cards_data_5?.Image}
                    className="client-logo"
                    style={{ height: '120px', objectFit: 'cover' }}

                />
            </Card.Body>
        </Card>
    )
}

function Real_Stories(props) {
    let cards_data_6 = props.data
    return (
        <Card className="  shadow-sm p-5">
            <div className="">
                <Card.Title className="fs-5">{cards_data_6?.Name}</Card.Title>
                <p className="text-muted small">{cards_data_6?.State}</p>
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <p className="text-muted small">{cards_data_6?.Description}</p>
                </div>
            </Card.Body>
        </Card>

    )
}



export { Our_Product, Quality, Photos, Card_Slider, Our_Clients, Real_Stories };