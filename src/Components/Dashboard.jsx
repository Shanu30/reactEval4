import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

    const [user,setUser] = useState([]);
    const getUser = () => {
   
    fetch("http://localhost:3000/users") 
        .then(res=> res.json())
        .then(data=> setUser(data))
        .catch(err=>console.log(err))
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(user)
  return (
    <div>
        {user.map(({fullname}) => <h2>{fullname}</h2>)}

        <Link to="/">Home</Link>
    </div>
  );
};