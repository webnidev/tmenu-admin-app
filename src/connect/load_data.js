export const loadData = async()=>{
    const dataResponse = await fetch('https://api.tmenu.com.br/v1/admin/company-data',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYsImlhdCI6MTYyMDY2ODgzM30.aOolG7NmO58I6pg-4z19oEAhI5QxCQ-K_1IX53YULHc'
        }
    })
    //const data = await Promise.all([dataResponse])
    const {data} = await dataResponse.json()
    console.log(data)
    return data
}