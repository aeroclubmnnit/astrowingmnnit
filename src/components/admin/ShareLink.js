import { useState } from "react";
import { toast } from "react-toastify";
import { REACT_APP_SERVER } from "../../grobalVars";

const ShareLink = ({ record, source }) => {
  const [shareId, setshareId] = useState(record.shareId);
  return (
    <div>
      <button
        className="btn btn-secondary btn-sm"
        onClick={(e) => {
          const elem = e.currentTarget;
          elem.innerText = "Loading...";
          fetch(`${REACT_APP_SERVER}/api/share/reset/${record.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              elem.innerText = "Reset share link";
              toast.success("Done");
              setshareId(data.shareId);
            });
        }}
      >
        Reset share link
      </button>
    </div>
  );
};

ShareLink.defaultProps = { addLabel: true };
export default ShareLink;
