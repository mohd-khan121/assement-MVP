import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import HotDestinations from './components/hotDestinations';
import BookingBanner from "./components/bookingBanner";
import PopularExperience from "./components/popularExperince";
import MountainBanner from "./components/mountiansBanner";
import TravelCards from "./components/travelCards";
import Partners from "./components/partners";
import WhyUs from "./components/whyUs"
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center mt-11">
      <SearchBar />
    </div>
    <div className="md:p-20 p-4">  
      <HotDestinations/>
    </div>
    <div className="md:p-20 p-4">  
      <BookingBanner/>
    </div>
    
    <div className="md:p-20 p-4">  
      <PopularExperience/>
    </div>

    <div className="">  
      <MountainBanner/>
    </div>

    <div className="md:p-20 p-4">  
      <TravelCards/>
    </div>

    <div className="">  
      <WhyUs/>
    </div>

    <div className="">  
      <Partners/>
    </div>

    <div className="">  
      <Footer/>
    </div>
</>
  );
}
