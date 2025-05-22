import axios from "axios";


const AxiosInstance = axios.create({
      baseURL: "https://openlibrary.org/",
    //   withCredentials: true  // Include credentials for cross-site requests
    });
    


export const  fetchBooksData = (data)=>{

    return AxiosInstance.get(`subjects/${data}.json`);
}