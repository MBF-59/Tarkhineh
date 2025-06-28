import { useQuery } from "@tanstack/react-query"; 
import { getfoods2} from "../../services/Home";
export default function usegetfood2(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-food2"],
        queryFn:getfoods2
    });
    
    return {data,isLoading};
}