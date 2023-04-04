import axios from "axios";

export const categoryMovies = async(API_URL) => {
    try{
        let response = await axios.get(API_URL)
        console.log(response.data, "data")
        return response.data.results
    }catch(error){
        console.log("error while calling api", error.message);
        return error.response.data;
    }
}