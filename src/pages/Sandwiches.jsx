import Foodmenupage from "../featuers/Menupage/Foodmenupage"
import { usegetsandavige } from "../featuers/Menupage/usegetfood"
import Loading from "../ui/Loading";


function Sandwiches() {
   const {data:data4=[],isLoading:isLoading4} = usegetsandavige();
     if (isLoading4) return <Loading />
  return (
    <div>
           <Foodmenupage  data={data4}   title={"ساندویچ ها "}/></div>
  )
}

export default Sandwiches