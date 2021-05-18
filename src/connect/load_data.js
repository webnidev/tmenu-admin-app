import React from 'react'
import { useNavigate } from 'react-router-dom';
export const API_URL = 'https://api.tmenu.com.br/v1/';
//export const API_URL = 'http://localhost:3333/v1/';

export const loadData = async()=>{
    const dataResponse = await fetch(`${API_URL}admin/company-data`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}` 
        }
    })
    //const data = await Promise.all([dataResponse])
    const {data} = await dataResponse.json()
    return data
}