import { useQuery } from "@tanstack/react-query"; 
import {getHomeMenuicon} from "../../services/Home";
export default function usePhoto(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-Homemenuicon"],
        queryFn:getHomeMenuicon
    });
    
    return {data,isLoading};
}