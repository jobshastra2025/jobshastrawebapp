import { handleJobSeekerLogin } from "@/actions/jobseeker/jobseeker";
import Link from "next/link";
import { memo } from "react";
import GoogleLogo from "../../../../../components/GoogleLogo";

const LoginBody = () => {
  return (
    <div className="flex flex-col items-center justify-start  min-w-[350px] w-[70%] lg:w-[40%] my-11 gap-y-4">
      
      <div className="w-full flex flex-row justify-center items-center ">
        <button className="cursor-pointer flex flex-row items-center justify-center w-full text-nowrap text-[16px] font-bold  bg-white hover:bg-white py-3 border rounded-[50px] text-[#4A42A3] border-[#CCCCF5] ">
          <GoogleLogo/>
          <span>Login with Google</span>
        </button>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <span className="w-full text-center text-[#202430]  before:text-black before:content-['mayank ']">
          Or Login with email
        </span>
      </div>
      
        <form
          className="flex flex-col items-center justify-between w-full gap-y-4"
          action={handleJobSeekerLogin}
        >
          <label className="w-full block gap-y-2">  
            <span className="text-black text-[16px] font-[600] after:ml-0.5 after:text-red-500 after:content-['*'] ...">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              className="rounded-full focus:outline-none bg-white border-[1px] border-[#D6DDEB] px-4 py-3 w-full placeholder:text-[#ABADB7] placeholder:text-[16px] placeholder:font-[400]" 
              placeholder="Enter Email Address"
            />
          </label>
          <label className="w-full block gap-y-2">
            <span className="text-black text-[16px] font-[600] after:ml-0.5 after:text-red-500 after:content-['*'] ...">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="rounded-full focus:outline-none bg-white border-[1px] border-[#D6DDEB] px-4 py-3 w-full placeholder:text-[#ABADB7] placeholder:text-[16px] placeholder:font-[400]"
              placeholder="Enter Password"
            />
          </label>
          <label className="flex flex-row items-center justify-between w-full"><div><input className="mr-2" type="checkbox"/><span className="text-[#4A42A3] font-normal text-[16px]">Remember Me</span></div><Link className="text-[#4A42A3] font-normal text-[16px] underline underline-[0.5px]" href={"/pages/jobseeker/forgot-password"}>Forgot Password?</Link></label>
          <button className="w-full py-3 text-white rounded-full bg-[#4A42A3] hover:bg-[#5A53A9]">
            Login
          </button>
        </form>
        <div className="flex flex-row items-center justify-start w-full mt-20">
          <span className="text-[#202430] font-normal text-[16px]">Don't have an account?</span>&nbsp;<Link className="text-[#4A42A3] hover:underline font-normal text-[16px]" href={"/pages/jobseeker/signup"}>Sign Up</Link>
        </div>
        
    </div>
  );
};

export default memo(LoginBody);