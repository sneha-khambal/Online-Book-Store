import axios from "axios";


const AxiosInstance = axios.create({
    // https://openlibrary.org/search.json?q=audio
      baseURL: "https://openlibrary.org/",
    //   withCredentials: true  // Include credentials for cross-site requests
    });
    


export const  fetchBooksData = (data)=>{

    return AxiosInstance.get(`search.json?q=${data}`);
}