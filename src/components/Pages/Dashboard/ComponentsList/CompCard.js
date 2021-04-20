import React from "react";
import { Button } from "react-bootstrap";
import Popup from "./Popup";

export default function CompCard(props) {
  const comp = props.comp;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="m-2 p-2" style={{border:"1px solid black"}}>
      <p className="font-weight-bold px-3">{comp.name}</p>
      <div style={{ display: "flex" }} >
        <img src={comp.image_url} style={{width: "150px", height:"150px"}}/>
        <div className="p-3">
          <div className="font-weight-bold">Total quantity: {comp.available + comp.issued}</div>
          <div className="font-weight-bold">In Stock: {comp.available}</div>
          <div className="font-weight-bold">Issued: {comp.issued}</div>
          <Button variant="primary mt-2" onClick={() => setModalShow(true)}>
            Request
          </Button>

          <Popup
            show={modalShow}
            onHide={() => setModalShow(false)}
            comp={comp}
          />
        </div>
      </div>
    </div>
  );
}
