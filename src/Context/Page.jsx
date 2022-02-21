import React, { createContext, useState } from 'react'

export const PageContext = createContext();


export const PageProvider = ({children}) => {
   
    const [formData, setFormData] = useState({});

    const [post,setPost] = useState([]);

    const onChangeHandle = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <PageContext.Provider value={{onChangeHandle,formData,setFormData,setPost,post}}>
        {children}
    </PageContext.Provider>
  )
}
