import { useQuery } from "@tanstack/react-query"; 
import getphoto, { getHomemenupictuer } from "../../services/Home";
export default function usePhoto(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-photo"],
        queryFn:getphoto
    });
    
    return {data,isLoading}
}



export function useHomemenupictuer(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-Homemenupictuer"],
        queryFn:getHomemenupictuer
    });
    
    return {data,isLoading}
}