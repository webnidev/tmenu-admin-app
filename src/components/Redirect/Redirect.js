import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom'

function Redirect(){
    useEffect(()=>{
        if(window.localStorage.getItem('token')){
            console.log('....')
        }
    })
    return <Navigate to="/"/>
}

export default Redirect