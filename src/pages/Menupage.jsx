import Foodmenupage from "../featuers/Menupage/Foodmenupage";
import HeaderMenupage from "../featuers/Menupage/HeaderMenupage";
import MotherFoodmenupage from "../featuers/Menupage/MotherFoodmenupage";
import Header from "../ui/Header";
import HomeInput from "../ui/HomeInput";
import Photo from "../ui/Photo";

function Menupage() {
  return (
    <div>
      <Header />
      <Photo />
      <HeaderMenupage />
      <HomeInput />
      <MotherFoodmenupage />
    </div>
  );
}

export default Menupage;
