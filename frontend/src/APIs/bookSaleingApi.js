import axios from "axios";


const AxiosInstance = axios.create({
      baseURL: "http://localhost:3000",
    });
    


export const  getCartDataApiCall = (data)=>{
  return AxiosInstance.get(`user/getCartData`);

}


export const addToCartApiCall = (data)=>{
  return AxiosInstance.post(`user/addToCart`,data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
}

export const deleteBookFromCartApiCall = (id)=>{
  return AxiosInstance.delete(`user/deleteBookFromCart/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
}



export const deleteAllBooksFromCartApiCall = (id)=>{
  return AxiosInstance.delete(`user/makeCartEmpty`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
}


export const  getCartDataCountApiCall = ()=>{
  return AxiosInstance.get(`user/getCartDataCount`);

}