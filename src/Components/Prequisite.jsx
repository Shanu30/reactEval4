import React, { useContext } from "react";
import { useNavigate  } from "react-router-dom";
import { PageContext } from "../Context/Page";


export default function Prerequisite() {
  const {onChangeHandle} = useContext(PageContext);

  const navigate = useNavigate();
  const gotoInfo = () => {
    navigate("/info");
  };
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <input type="checkbox" name="attandence"   onChange={onChangeHandle}/>
        <label>Can you attend 90% of the classes</label>
      </div>

      <div style={{ marginTop: "50px" }}>
        <input type="checkbox" name="laptop"   onChange={onChangeHandle} />
        <label>Do you have laptop</label>
      </div>

      <button style={{ marginTop: "50px" }} onClick={gotoInfo}>Move to information Page</button>
    </div>
  );
};

