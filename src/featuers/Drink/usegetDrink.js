
import { useQuery } from "@tanstack/react-query"; 
import {  getDessert, getDrink} from "../../services/Home";
export default function usegetDrink(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-Drink"],
        queryFn:getDrink
    });
    
    return {data,isLoading};
}
