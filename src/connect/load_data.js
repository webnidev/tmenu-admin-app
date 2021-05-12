export const API_URL = 'https://api.tmenu.com.br/v1/';

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
export const login = async(body)=>{
    const response = await fetch(`${API_URL}auth/login`,{
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body),
        method:'POST'
    })
    const {data} = await response.json()  
    return data
    
}