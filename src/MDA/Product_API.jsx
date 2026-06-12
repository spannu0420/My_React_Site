import {  Button, Card } from "react-bootstrap"
import { ArrowRightShort } from "react-bootstrap-icons";


function ProductMain(props){
    let ProductArray = props.prodData
  return(
    
    <Card className="mt-5 shadow-sm  h-90  " style={{ width: '15rem', textAlign:"center",borderBottom:"1px solid grey"}}>
      <Card.Body>
       <Card.Img
        variant="top"
        src={ProductArray?.Image}
        alt={ProductArray?.Title}
        style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px"  }}
      />
        <Card.Text className="mt-3 text-muted fw-medium " style={{fontFamily:'Roboto', fontSize:"14px",textDecoration:"underline"}}>
          {ProductArray?.Text}
        </Card.Text>
         <Card.Text style={{color:"grey", fontSize:"14px", marginTop:'-13px'}}>
          {ProductArray?.Text_1}
         </Card.Text>
        <Card.Title className="fw-bold" >{ProductArray?.Title}</Card.Title>
      </Card.Body>
      <div className="px-3 pb-3 text-center">
        <Button
          className="w-80 rounded-pill fw-semibold agri-btn-hover "
          style={{ backgroundColor: '#d0d0d0', color: "black" }}
          onClick={() => alert(`You selected: ${ProductArray?.Title}`)}>
          View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
        </Button>
      </div>
    </Card>
  )
}
export default ProductMain;


