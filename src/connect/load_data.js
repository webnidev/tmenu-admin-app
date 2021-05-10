export const loadData = async()=>{
    const dataResponse = fetch('http://localhost:3333/v1/admin/company-data',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTYwNjU3MTM5OX0.AfW3mIkZ0ovOYCjIFSneujnOlH_bMLSXFZrwbMBd7lg'
        }
    })
    const [data] = await Promise.all([dataResponse])
    const dataJson = await data.json()
    return dataJson
}