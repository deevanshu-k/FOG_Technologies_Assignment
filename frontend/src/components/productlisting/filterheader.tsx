import React from "react";
import viewListImage from "../../assets/ProductListing/view-list.svg";
import menuImage from "../../assets/ProductListing/menu.svg";
import filteringImage from "../../assets/ProductListing/filtering.svg";

const FilterHeader: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-[#F9F1E7] md:h-[100px] md:px-10">
            <div className="flex flex-row flex-wrap items-center gap-4 md:gap-7 p-3 pb-0 md:p-5">
                <div className="flex flex-row gap-2">
                    <img src={filteringImage} className="cursor-pointer" />
                    <p className="md:text-[20px]">Filter</p>
                </div>
                <div>
                    <img src={menuImage} className="cursor-pointer" />
                </div>
                <div>
                    <img src={viewListImage} className="cursor-pointer" />
                </div>
                <div className="hidden md:block bg-[#9F9F9F] w-[2px] h-[37px]"></div>
                <div className="text-[16px]">Showing 1–16 of 32 results</div>
            </div>
            <div className="flex flex-row md:items-center flex-wrap gap-4 p-3">
                <div className="flex flex-row items-center gap-2">
                    <label className="md:text-[20px]">Show</label>
                    <input
                        type="number"
                        placeholder="16"
                        className="bg-white md:text-[20px] w-[55px] md:h-[55px] text-center p-1 text-[#9F9F9F] cursor-pointer"
                    />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <label className="md:text-[20px]">Short By</label>
                    <select name="sortby" className="bg-white md:text-[20px] w-[188px] md:h-[55px] px-6 py-1 text-[#9F9F9F] cursor-pointer">
                        <option>Default</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterHeader;
