import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../Context/Page";


export default function Register() {
  const {onChangeHandle,formData,post,setPost} = useContext(PageContext);

  

  const navigate = useNavigate();
    
  const handlePost = async () => {
    const payload = {...formData};
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(`http://localhost:3000/users`, config)
    .then (res=>res.json())
    .then (data=> {
        setPost([...post,formData])
      navigate("/dashboard")
    })
        .catch ((err) =>
        console.log(err))
    
  };

  

  return (
    <div>
      Register Page
      <div>
          <label>Name</label>
          <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={onChangeHandle}
        />
      </div>
      <div>
         
        <label>Email </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandle}
        />
      </div>
      <div>
        <label>Passwword</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandle}
        />
      </div>
      <button onClick={handlePost}>Sign up</button>
    </div>
  );
};