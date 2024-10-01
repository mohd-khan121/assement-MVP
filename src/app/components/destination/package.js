import ImageCollage from "../destination/imageCollage"; // Adjust the path as needed
import AboutPackage from "./aboutPackage"; // Ensure the correct path
import SelectPlan from "./selectPlan"; // This will be created later

const Package = () => {
    return (
        <div><div className="flex flex-col md:px-20 bg-[#f6f6f6] ">
        <ImageCollage />

        <div className="flex flex-col md:flex-row mt-4 md:py-10 md:px-20">
            <div className="w-full md:w-2/3 ">
                <AboutPackage />
            </div>

            <div className="w-full md:w-1/3 px-2">
                <SelectPlan />
            </div>
        </div>

        
    </div></div>
    );
};

export default Package;
