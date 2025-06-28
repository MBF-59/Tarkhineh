

import { useQuery } from "@tanstack/react-query"; 
import {  getfoodmenupage } from "../../services/Home";
export default function usefoodmenupage(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-foodmenu"],
        queryFn:getfoodmenupage
    });
    
    return {data,isLoading} ;
}