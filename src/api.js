export const API_URL = 'https://api.tmenu.com.br/v1/';

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

export function GET_COMPANIES(token, paginate, search=null) {
  let url = `${API_URL}admin/company?page=${paginate.page}&limit=${paginate.perPage}`
    if(search){
      url+=search
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


  
