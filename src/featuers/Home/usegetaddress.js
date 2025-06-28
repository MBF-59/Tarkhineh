import { useQuery } from "@tanstack/react-query"; 
import {getaddress} from "../../services/Home";
export default function usegetaddress(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-address"],
        queryFn:getaddress
    });
    
    return {data,isLoading};
}