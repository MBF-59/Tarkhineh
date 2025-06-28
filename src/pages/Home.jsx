import Footer from "../ui/Footer";
import AboutusText from "../ui/AboutusText";
import Header from "../ui/Header";
import HomeAddress from "../ui/HomeAddress";
import HomeInput from "../ui/HomeInput";
import Homemenu from "../ui/Homemenu";
import Photo from "../ui/Photo"
import Modal from "../ui/Modal";
import RowofFood from "../ui/RowofFood";
import MotherRowofFood from "../featuers/MotherRowofFood/MotherRowofFood";
import Phototwo from "../ui/phototwo";
import Comments from "../ui/Comments";

function Home() {
  return (
    <div className="xl:max-w-screen-xl mx-auto" >
       {/* <Header />
       <Photo/>
       <HomeInput/>
       <Homemenu/>
      <AboutusText/>  
     <HomeAddress/>  
     <Footer/>  */}
     {/* <MotherRowofFood/> */}
    {/* <Phototwo/> */}
    <Comments/>

    </div>
  );
}

export default Home;
