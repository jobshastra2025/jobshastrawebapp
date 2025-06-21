import { memo } from "react";
const ImageBody = () => {
  return (
    <div>
      <img
        src="/images/jobseeker.png"
        alt="jobseeker"
        className="hidden lg:flex lg:w-[430px] xl:w-[505px]  aspect-auto"
      />
    </div>
  );
};

export default memo(ImageBody);