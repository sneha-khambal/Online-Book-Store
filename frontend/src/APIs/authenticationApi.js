import axios from "axios";


const AxiosInstance = axios.create({
      baseURL: "http://localhost:3000",
    });
    


export const  accountCreationApiCall = (data)=>{

    return AxiosInstance.post(`user/accountCreation`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
}


export const  checkoutApiCall = (data)=>{

    return AxiosInstance.post(`user/checkout`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
}