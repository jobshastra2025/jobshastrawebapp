import { memo } from "react";
import ImageBody from "../../../../../components/ImageBody";
import SignUpBody from "./SignUpBody";

const RecruiterSignUpBody = () => {
  return (
    <div className="flex flex-col items-center w-full justify-between lg:flex-row lg:gap-x-20 xl:gap-x-40">
      <ImageBody />
      <SignUpBody />
    </div>
  );
};

export default memo(RecruiterSignUpBody);