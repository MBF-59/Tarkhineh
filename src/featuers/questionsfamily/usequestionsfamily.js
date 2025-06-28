import { useQuery } from "@tanstack/react-query";
import { getprivacy, getquestions, getroles } from "../../services/Home";

export default function usegetquestions(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-questions"],
        queryFn:getquestions
    });
    
    return {data,isLoading} 
}












export function usegetroles(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-roles"],
        queryFn:getroles
    });
    
    return {data,isLoading} ;
}













 export function usegetprivacy(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-privacy"],
        queryFn:getprivacy
    });
    
    return {data,isLoading}
}













