import Foodmenupage from "../featuers/Menupage/Foodmenupage"
import { usegetunirainanfood } from "../featuers/Menupage/usegetfood"
import Loading from "../ui/Loading";


function InternationalDishes() {
  const {data:data2=[],isLoading:isLoading2}=usegetunirainanfood();
  if (isLoading2) return <Loading />
  return (
    <div>  
          <Foodmenupage  data={data2}  title={"غیر ایرانی"}/></div>
  )
}

export default InternationalDishes