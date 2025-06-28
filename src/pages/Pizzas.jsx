import Foodmenupage from "../featuers/Menupage/Foodmenupage"
import { usegetpizza } from "../featuers/Menupage/usegetfood"
import Loading from "../ui/Loading";


function Pizzas() {  
   const {data:data3=[],isLoading:isLoading3} =usegetpizza();
   if (isLoading3) return <Loading/>
  return (
    <div>
  
         <Foodmenupage  data={data3}  title={"پیتزا"}/></div>
  )
}

export default Pizzas;