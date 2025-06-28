

import { useQuery } from "@tanstack/react-query"; 
import {  getiranianfood, getpizza, getsandavige, getunirainanfood } from "../../services/Home";
export default function usegetiranianfood(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-iranianfood"],
        queryFn:getiranianfood
    });
    
    return {data,isLoading} ;
}

export  function usegetunirainanfood(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-unirainanfood"],
        queryFn:getunirainanfood
    });
    
    return {data,isLoading} ;
}






export  function usegetpizza(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-pizza"],
        queryFn:getpizza
    });
    
    return {data,isLoading};
}










export  function usegetsandavige(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-sandavige"],
        queryFn:getsandavige
    });
    
    return {data,isLoading};
}













