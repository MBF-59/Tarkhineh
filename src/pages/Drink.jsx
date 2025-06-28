import usegetDrink from "../featuers/Drink/usegetDrink";
import Foodmenupage from "../featuers/Menupage/Foodmenupage";
import Loading from "../ui/Loading";


function Drink() {
    const { data, isLoading } = usegetDrink();
  if (isLoading) return <Loading />
  return (
    <div> <Foodmenupage data={data} title={"نوشیدنی"}/></div>
  )
}

export default Drink