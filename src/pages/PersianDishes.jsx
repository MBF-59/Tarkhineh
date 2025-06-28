import Foodmenupage from "../featuers/Menupage/Foodmenupage"
import usegetiranianfood from "../featuers/Menupage/usegetfood"
import Loading from "../ui/Loading";


function PersianDishes() {
      const {data:data1=[],isLoading:isLoading1}=usegetiranianfood();
      if (isLoading1 ) return <Loading/>
  return (
    <div>  
          <Foodmenupage data={data1} title={"ایرانی"}/></div>
  )
}

export default PersianDishes