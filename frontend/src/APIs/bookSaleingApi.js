import axios from "axios";


const AxiosInstance = axios.create({
      baseURL: "http://localhost:3000",
    });
    


export const  addToCartApiCall = (data)=>{

    return AxiosInstance.post(`user/addToCart`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
}