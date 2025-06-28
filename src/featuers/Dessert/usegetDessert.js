
import { useQuery } from "@tanstack/react-query"; 
import {  getDessert} from "../../services/Home";
export default function usegetDessert(){
    const{data=[],isLoading}=useQuery({
        queryKey:["get-Dessert"],
        queryFn:getDessert
    });
    
    return {data,isLoading};
}
