

import { useQuery } from "@tanstack/react-query"; 
import {  getAppetizer} from "../../services/Home";
export default function usegetAppetizer(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-Appetizer"],
        queryFn:getAppetizer
    });
    
    return {data,isLoading} ;
}
