import Axios from 'axios'
export async function axiosRequest(method, url, data, fileType, checkAuth = true) {
    const URL = url
    
    // NOTE: When tokenAuthentication is being active, we can use this to verify user
    
    // let token = window.localStorage.getItem(JWT_STROAGE_ID)
    // const userInfo = store.getState().auth.userInfo
    // if ((!token && checkAuth) || ((Object.keys(userInfo).length === 0 && checkAuth))) {
    //     token = await store.dispatch(loginUserAction())
    // }

    return new Promise((resolve, reject) => {
        Axios({
            method: method,
            url: URL,
            headers: {
                // Authorization: `Bearer ${token}`,
                'Content-Type': (fileType === "image") ? 'image/jpeg' : 'application/json'
            },
            data: data,
        }).then((res) => {
            if (res.status === 200) {
                resolve(res);
            } else {
                reject("Something Went Wrong in api calling");
                return false;
            }
        }).catch((err) => {
            if (!!err && !!err.response && !!err.response.status && err.response.status === 401) {
                console.log('error ==>>', err)
            }
            reject(err);
            throw err;
        });
    })
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export const generateSelectOptionActor = (data) => {
  return data && data.length && data.map((d, k) => {
    return { id: d._id, label: d.name, value: d.name }
  })
}

/**
 * 
 * @param {*} data 
 * @param {*} formErrors 
 * @returns 
 */

export const validateForm = async (data, formErrors) => {
  let err = formErrors
  if(!data.name){
    err.name.isValid = false
  }else{
    err.name.isValid = true
  }

  if(!data.year_of_release){
    err.year_of_release.isValid = false
  }else{
    err.year_of_release.isValid = true
  }


  if(!data.plot || !data.plot.length){
    err.plot.isValid = false
  }else{
    err.plot.isValid = true
  }

  if(!data.casts || !data.casts.length){
    err.casts.isValid = false
  }else{
    err.casts.isValid = true
  }

  if(!data.producer || !data.producer.name){
    err.producer.isValid = false
  }else{
    err.producer.isValid = true
  }

  return err
}

/**
 * Create Query params
 * for get method requests
 * @param {*} params
 */
export const createQueryParams = params =>
    Object.keys(params)
        .map(k => `${k}=${encodeURI(params[k])}`)
        .join('&')
