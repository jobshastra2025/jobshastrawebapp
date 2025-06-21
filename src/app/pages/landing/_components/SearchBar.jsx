
import { handleSearchAction } from "../../../../actions/landing/landing";
import Form from "next/form";
import { memo } from "react";
import { IoIosSearch } from "react-icons/io";
const SearchBar=()=>{
  return (
    <>
      <div className="absolute rounded-full px-1 py-1 top-[40%] lg:right-[10%] flex flex-row items-center justify-center gap-x-[10px]  shadow-md  blur-0 bg-white flex-nowrap">
        <IoIosSearch fill="#939393" size={20} />
        <Form action={handleSearchAction} className="flex">
          <input
            className="border-r-2 bg-white dark:bg-white placeholder:text-[#939393] placeholder:text-center text-[10px] lg:text-[14px] px-2 xl:w-[130px] w-[100px]  focus:outline-none border-[#939393]"
            type="text"
            placeholder="Enter Your Role"
            name="role"
          />
          <select
            name="exp"
            defaultValue={""}
            className="placeholder:text-left bg-white dark:bg-white text-[10px] lg:text-[14px] border-none focus:outline-none text-[#939393]"
          >
            <option value={""} disabled hidden>
              Experience
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <input
            name="location"
            className="placeholder:text-[#939393] bg-white dark:bg-white text-[10px] lg:text-[14px] w-[80px] xl:w-[130px] border-l-2 px-2 border-[#939393] focus:outline-none"
            type="text"
            placeholder="Location"
          />
          <button
            className="bg-[#4A42A3] focus:outline-none rounded-full px-4 font-[10px] lg:font-[18px] lg:px-7 py-[10px] text-white"
            type="submit"
          >
            Search
          </button>
        </Form>
      </div>
    </>
  );
}

export default memo(SearchBar);