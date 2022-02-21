import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../Context/Page";

export default function Info() {

    const {onChangeHandle} = useContext(PageContext);

    const navigate = useNavigate();
    const gotoPage = () =>{
        navigate("/register")
    }
  return (
    <div>
        <div>
      <div style={{ marginTop: "30px" }}>
        <input type="checkbox" name="graduate"  onChange={onChangeHandle}/>
        <label>Are you graduate?</label>
      </div>

      <div style={{ marginTop: "30px" }}>
        <input type="checkbox" name="math"  onChange={onChangeHandle} />
        <label>Are you good at basic Mathematics?</label>
      </div>
      <div style={{ marginTop: "30px" }}>
        <input type="checkbox"  name="age"   onChange={onChangeHandle}/>
        <label>Are you above 18 years?</label>
      </div>
      <div style={{ marginTop: "30px" }}>
        <input type="checkbox" name="cs"   onChange={onChangeHandle} />
        <label>Are you familier with computer scince basics? </label>
      </div>
      <div style={{ marginTop: "30px" }}>
        <input type="checkbox" name="agreed"   onChange={onChangeHandle}/>
        <label>Are you agree with terms and conditions of masai?</label>
      </div>

      <button style={{ marginTop: "30px" }} onClick={gotoPage}>Continue</button>
    </div>
    </div>
  )
}

