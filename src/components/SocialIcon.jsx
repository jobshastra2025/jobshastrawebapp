import Link from "next/link";
import { memo } from "react";

const SocialIcon = ({ children }) => {
  return (
    <Link
      className="rounded-full p-3 border-none hover:bg-[#5C66AC] bg-[#5C55AC]"
      href={"/"}
    >
      {children}
    </Link>
  );
};

export default memo(SocialIcon);
