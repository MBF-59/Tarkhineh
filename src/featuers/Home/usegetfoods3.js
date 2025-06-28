import { useQuery } from "@tanstack/react-query"; 
import { getfoods3} from "../../services/Home";
export default function usegetfood3(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-food3"],
        queryFn:getfoods3
    });
    
    return {data,isLoading};
}