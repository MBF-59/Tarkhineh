import { useMutation, useQuery } from "@tanstack/react-query";
import { getSearchs } from "../services/Home";
import toast from "react-hot-toast";




 


export function Search(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-result"],
        queryFn:getSearchs
    });
    
    return {data,isLoading} ;
}




export default Search









