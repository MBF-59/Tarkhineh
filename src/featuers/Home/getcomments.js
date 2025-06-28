import { useQuery } from "@tanstack/react-query"; 
import getphoto, { getcomments } from "../../services/Home";
export default function usecomments(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-comments"],
        queryFn:getcomments
    });
    
    return {data,isLoading} 
}