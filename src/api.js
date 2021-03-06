export const API_URL = 'https://api.tmenu.com.br/v1/';
//export const API_URL = 'http://localhost:3333/v1/';


export function LOGIN(body) {
  return {
    url: API_URL + 'auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + 'admin/profile',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_USERS(token, paginate, search=null){
  const namex = /[a-zA-z]+/g
  let url = `${API_URL}admin/user?page=${paginate.page}&limit=${paginate.perPage}`
  if(search){
    if(search.match(namex)){
      url+=`&name=${search}`
    }else{
      url+=`&cpf=${search}`
    }
  }
  return{
    url:url,
    options:{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function GET_USER(token){
  return{
    url: API_URL+'admin/profile',
    options:{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function UPDATE_USER(token, data){
  return{
    url:`${API_URL}admin/user/${data.id}`,
    options:{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body:JSON.stringify(data)
    }
  }
}

export function CREATE_USER(token, body){
  return{
    url:`${API_URL}admin/user`,
    options:{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body:JSON.stringify(body)
    }
  }
}
export function CREATE_COMPANY(token, target){
    
    const data = {}
    data.company = {
      "name": target.name.value,
      "email": target.email.value,
      "cnpj": target.cnpj.value,
      "phone":target.phone.value
    }
    data.address = {
      "zipcode":target.zipcode.value,
      "street":target.street.value,
      "number":target.number.value,
      "district":target.district.value,
      "city":target.city.value,
      "state":target.state.value,
      "complement":target.complement.value
    }
    data.responsible = {
      "responsible":target.responsible.value,
      "responsible_phone":target.responsible_phone.value
    }
    data.waiter_rate = target.waiter_rate.checked
  
  let seen = []
  return{
    url:API_URL+'admin/company',
    options:{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data,function(key, val){
        if (typeof val == "object") {
          if (seen.indexOf(val) >= 0) {
              return
          }
          seen.push(val);
      }
      return val;
      })
    }
  }
}

export function GET_STATISTIC_COMPAMPANIES(token){
  return{
    url:  API_URL+'admin/company-data',
    options:{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function GET_COMPANIES(token, paginate, search=null) {
  const namex = /[a-zA-z]+/g
  let url = `${API_URL}admin/company?page=${paginate.page}&limit=${paginate.perPage}`
    if(search){
      if(search.match(namex)){
        url+=`&name=${search}`
      }else{
        url+=`&cnpj=${search}`
      }
    }
  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  }
}
  export function UPDATE_COMPANY(token, id, status) {
    let url = `${API_URL}admin/company/${id}`
    return {
      url: url,
      options: {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body:JSON.stringify({status: !status})
      },
    }
}
export function GET_COMPANY(token, id){
  return{
    url: `${API_URL}admin/company/${id}`,
    options:{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function GET_BILLINGS(token, paginate, search=null){
  const namex = /[a-zA-z]+/g
  let url = `${API_URL}admin/billing?page=${paginate.page}&limit=${paginate.perPage}`
  if(search){
    if(search.match(namex)){
      url+=`&name=${search}`
    }else{
      url+=`&cnpj=${search}`
    }
  }
  return{
    url: url,
    options:{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    }
  }
}


export function SEND_BILLING(token, body){
  const url = `${API_URL}admin/send-billing`
  return{
    url:url,
    options:{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
      body:JSON.stringify(body)
    }
  }
}

export function UPDATE_BILLING(token, id, status){
  const url = `${API_URL}admin/set-paied/${id}`
  return{
    url:url,
    options:{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
      body:JSON.stringify({status})
    }
  }
}

export function GET_PLANS(token){
  return{
    url: API_URL+"admin/plan",
    options:{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      }
    }
  }
}

