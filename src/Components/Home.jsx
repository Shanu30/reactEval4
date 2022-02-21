import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();

    const loadPrequisite = () =>{
        navigate("prerequisite")
    }

  return (
    <div>
        <button onClick={ loadPrequisite}>Sign Up</button>
    </div>
  )
}

