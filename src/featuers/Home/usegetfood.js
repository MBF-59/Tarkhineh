
import { useQuery } from "@tanstack/react-query"; 
import { getfoods, getfoods2} from "../../services/Home";
export default function usegetfood(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-food"],
        queryFn:getfoods
    });
    
    return {data,isLoading};
}









