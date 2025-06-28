import { useQuery } from "@tanstack/react-query"; 
import  { gettextus } from "../../services/Home";
export default function usegettextus(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-textus"],
        queryFn:gettextus
    });
    
    return {data,isLoading}
}