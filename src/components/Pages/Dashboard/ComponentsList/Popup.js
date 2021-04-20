import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../../grobalVars"

export default function Popup(props) {
  const [num, setnum] = useState(0);
  const [reason, setreason] = useState("");

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`Requesting ${props.comp.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex" }}>
          <img
            src={props.comp.image_url}
            style={{ width: "150px", height: "150px" }}
          />
          <div>
            <div>
              Total quantity: {props.comp.available + props.comp.issued}
            </div>
            <div>In Stock: {props.comp.available}</div>
            <div>Issued: {props.comp.issued}</div>
            <button
              className="btn btn-light"
              onClick={() => (num > 0 ? setnum(num - 1) : 0)}
            >
              -
            </button>
            <span className="px-3">{num}</span>
            <button
              className="btn btn-light"
              onClick={() => (num < props.comp.available ? setnum(num + 1) : 0)}
            >
              +
            </button>
            <div>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Reason for request."
                value={reason}
                onChange={(event) => {
                  setreason(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <LoadingButton
          id={props.comp._id}
          body={{ num: num, reason: reason }}
          onHide={props.onHide}
        >
          Issue
        </LoadingButton>
        <Button
          onClick={() => {
            props.onHide();
            setnum(0);
            setreason("");
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      fetch(`${REACT_APP_SERVER}/api/issue/${props.id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(props.body),
      }).then(res => res.json())
        .then((data) => {
          setLoading(false);
          props.onHide();
          dispatch({
            type: "REQUEST_COMPONENT",
            payload: data.componentIssue
          })
        });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Confirm"}
    </Button>
  );
}
