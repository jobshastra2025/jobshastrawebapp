import Link from "next/link";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { memo } from "react";
const Header1=()=> {
  return (
    <>
      <header className="xl:hidden bg-[#FAFAFF] w-full border-b-2 border-[#C8C8CC] flex flex-row justify-between items-center px-5 sm:px-7 lg:px-36">
        <div>
          <Link href={"/"}>
            <Image
              className=""
              src={"/images/logo.png"}
              alt="logo"
              width={139}
              height={19}
            />
          </Link>
        </div>
        <div>
          <Link className="rounded-md border-2" href={"/"}>
            <IoMdMenu color="#C8C8CC" size={30} />
          </Link>
        </div>
      </header>
    </>
  );
}


export default memo(Header1);