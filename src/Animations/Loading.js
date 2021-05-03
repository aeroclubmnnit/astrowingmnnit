import React, { useEffect, useState } from "react";
import "../css/Loading.css";
import m from '../images/utils/bh2.gif'

function Loading({ time, confirmation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, (time + 1) * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading)
    return (
      <div
        className="loader d-flex align-items-center justify-content-center"
        style={{ animation: `fadeOut 2s`, animationDelay: `${time}s` }}
      >
        {confirmation ?
          <h3
            className="text-center"
            style={{ color: "white", margin: "auto auto" }}
          >
            Loading ...!
          </h3>
          :
          <img src={m} alt="bh" height={400} width={400} style={{ animation: `fadeOut 2s`, animationDelay: `${time}s` }} id='bh' />
        }
      </div>
    );
  return null;
}

export default Loading;
