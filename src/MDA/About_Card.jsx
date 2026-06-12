/* eslint-disable */
import { Card } from "react-bootstrap"

function Card_6(props) {
    let M6_data = props.data
    return(
        <Card className="border-0 p-0  shadow-none position-relative overflow-hidden custom-interaction-card w-100">
            <Card.Img variant="top" src={M6_data?.Image}  className="h-100 w-100" style={{ objectFit: 'cover' }} />
            <Card.Body className="p-0 position-absolute w-100 sliding-text-box" style={{ bottom: 0, zIndex: 2 }}>
                <Card.Text className="text-center bg-white p-3 m-0 rounded-top-4 fw-bold shadow-sm" >
                    {M6_data?.Text}
                    <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{M6_data?.variant}</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 'normal', color: '#64748b' }}>{M6_data?.Title}</div>
                    </Card.Text>
            </Card.Body>
        </Card> 
    )
}
export {Card_6};
