import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_USERS } from './api';
export const UsersContext = React.createContext();

export const UsersStorage = ({children})=>{
     const [data, setData] = React.useState([])
     const [paginate, setPaginate] = React.useState({total:0, perPage:5, page:1, lastpage:0})
     const getData = async ()=>{
        try{
          const token = window.localStorage.getItem('token')
          if(!token){
            throw new Error(`Error: Token inválido`)
          }
          const {url, options} = GET_USERS(token, paginate)
          const response = await fetch(url, options)
          if(!response.ok) throw new Error(`Error: ${response.statusText}`)
          const {users} = await response.json()
          setData(users.data)
          setPaginate({total:users.total, perPage:users.perPage, page:users.page, lastpage:users.lastPage})
    
        }catch(error){
            console.log(error)
        }
        
      }
      const paginateUpdate =async event =>{
        try {
            const token = window.localStorage.getItem('token')
            
                console.log(event.target.id)
            
            //console.log(event.target.innerText)
            paginate.page=event.target.id

            setPaginate(paginate)
            console.log(paginate)
            if(!token){
                throw new Error(`Error: Token inválido`)
            }
            const {url, options} = GET_USERS(token, paginate)
            const response = await fetch(url, options)
            if(!response.ok) throw new Error(`Error: ${response.statusText}`)
            const {users} = await response.json()
            setData(users.data)
            
        } catch (error) {
            console.log(error)
        }
      }
      React.useEffect(()=>{
        getData()
      },[])


    return(
        <UsersContext.Provider
        value={{data, getData, paginate, paginateUpdate}}
        >
            {children}
        </UsersContext.Provider>
    )

}