import Banner from "../components/destination/banner";
import Package from "../components/destination/package";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PopularExperience from "../components/popularExperince";
import BottomCards from "../components/destination/bottomCards"

export default function Destination() {
    return (
        <>
            <Navbar />
            <Banner/>
            <Package/>
            <div className="mt-10 md:p-24 p-2  bg-white width h-full ">
                <h2 className="text-3xl font-bold mb-4 text-left">Trip Itinerary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    {Array.from({ length: 6 }, (_, index) => (
                        <div 
                            key={index} 
                            className="border-2 border-[#ffc108] bg-transparent p-10 rounded-lg text-left shadow-lg"
                        >
                            <h3 className="text-xl font-semibold">Day {index + 1}</h3>
                            <p className="text-gray-600">Description for Day {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:p-20 p-4">  
            <PopularExperience/>
            </div>
                <BottomCards/>
            <Footer />
        </>
    );
}
