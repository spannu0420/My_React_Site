import { Button, Card } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

function Diamond_Cut(props) {

  let DiamondArray = props.DiamondData

  return (
    <>
      <Card className="mt-5 shadow-sm  h-90  " style={{ width: '18rem', textAlign: "center", borderBottom: "1px solid grey" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={DiamondArray?.Image}
            alt={DiamondArray?.Title}
            style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
          />
          <hr />

          <Card.Title className="fw-bold" >{DiamondArray?.Title}</Card.Title>
        </Card.Body>
        <div className="px-3 pb-3 text-center">
          <Button
            className="w-80 rounded-pill fw-semibold agri-btn-hover "
            style={{ backgroundColor: '#d0d0d0', color: "black" }}
            onClick={() => alert(`You selected: ${DiamondArray?.Title}`)}>
            View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
          </Button>
        </div>
      </Card>
    </>

  )
}
// =======================================================================================//
function M_B_Plough( props){

  let PloughData =props.MBPloughData

  return(

    <Card className="mt-5 shadow-sm  h-90  " style={{ width: '17rem', textAlign: "center", borderBottom: "1px solid grey" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={PloughData ?.Image}
            alt={PloughData ?.Title}
            style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
          />
          <hr />

          <Card.Title className="fw-bold" >{PloughData ?.Title}</Card.Title>
        </Card.Body>
        <div className="px-3 pb-3 text-center">
          <Button
            className="w-80 rounded-pill fw-semibold agri-btn-hover "
            style={{ backgroundColor: '#d0d0d0', color: "black" }}
            onClick={() => alert(`You selected: ${PloughData ?.Title}`)}>
            View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
          </Button>
        </div>
      </Card>

  )
}

// =======================================================================================//


function Duck_Sweeps(props){

   let DuckData = props.Duck_Sweeps_Data

  return(

    <Card className="mt-5 shadow-sm  h-90  " style={{ width: '17rem', textAlign: "center", borderBottom: "1px solid grey" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={DuckData ?.Image}
            alt={DuckData ?.Title}
            style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
          />
          <hr />

          <Card.Title className="fw-bold" >{DuckData ?.Title}</Card.Title>
        </Card.Body>
        <div className="px-3 pb-3 text-center">
          <Button
            className="w-80 rounded-pill fw-semibold agri-btn-hover "
            style={{ backgroundColor: '#d0d0d0', color: "black" }}
            onClick={() => alert(`You selected: ${DuckData?.Title}`)}>
            View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
          </Button>
        </div>
      </Card>

  )

}
// =====================================================================================//

function Tiller_Duck(props){

   let TillerData = props.Tiller_Duck_Data

  return(

    <Card className="mt-5 shadow-sm  h-90  " style={{ width: '17rem', textAlign: "center", borderBottom: "1px solid grey" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={TillerData ?.Image}
            alt={TillerData ?.Title}
            style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
          />
          <hr />

          <Card.Title className="fw-bold" >{TillerData ?.Title}</Card.Title>
        </Card.Body>
        <div className="px-3 pb-3 text-center">
          <Button
            className="w-80 rounded-pill fw-semibold agri-btn-hover "
            style={{ backgroundColor: '#d0d0d0', color: "black" }}
            onClick={() => alert(`You selected: ${TillerData?.Title}`)}>
            View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
          </Button>
        </div>
      </Card>

  )

}
// ======================================================================================//

function Cultivator_Shovels(props){

   let CultivatorData = props.Cultivator_Shovels_Data

  return(

    <Card className="mt-5 shadow-sm  h-90 " style={{ width: '18rem', textAlign: "center", borderBottom: "1px solid grey" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={CultivatorData ?.Image}
            alt={CultivatorData ?.Title}
            style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
          />
          <hr />

          <Card.Title className="fw-bold" >{CultivatorData?.Title}</Card.Title>
        </Card.Body>
        <div className="px-3 pb-3 text-center">
          <Button
            className="w-80 rounded-pill fw-semibold agri-btn-hover "
            style={{ backgroundColor: '#d0d0d0', color: "black" }}
            onClick={() => alert(`You selected: ${CultivatorData?.Title}`)}>
            View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
          </Button>
        </div>
      </Card>

  )

}

// ============================================================================================//

function Seed_Drill(props){

   let Seed_Data = props.Seed_Drill_Data

  return(

    <Card className="mt-5 shadow-sm  h-90 " style={{ width: '18rem', textAlign: "center", borderBottom: "1px solid grey" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={Seed_Data ?.Image}
            alt={Seed_Data ?.Title}
            style={{ height: '270px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: "18px" }}
          />
          <hr />

          <Card.Title className="fw-bold" >{Seed_Data?.Title}</Card.Title>
        </Card.Body>
        <div className="px-3 pb-3 text-center">
          <Button
            className="w-80 rounded-pill fw-semibold agri-btn-hover "
            style={{ backgroundColor: '#d0d0d0', color: "black" }}
            onClick={() => alert(`You selected: ${Seed_Data?.Title}`)}>
            View More<ArrowRightShort size={28} style={{ borderRadius: "50px", color: "black" }} className='ms-3 agri-btn-hover' />
          </Button>
        </div>
      </Card>

  )

}



export { Diamond_Cut, M_B_Plough , Duck_Sweeps , Tiller_Duck , Cultivator_Shovels , Seed_Drill}