import { useQuery } from "@tanstack/react-query"; 
import  { getphoto2 } from "../../services/Home";
export default function usePhoto2(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-photo2"],
        queryFn:getphoto2
    });
    
    return {data,isLoading}
}