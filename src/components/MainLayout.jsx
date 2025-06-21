import Footer from "./Footer";
import Header2 from "./Header2";
import Header1 from "./Header1";
import { memo } from "react";
import MainBody from "./MainBody";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header1 />
      <Header2 />
      <MainBody className="bg-[#FAFAFF]">{children}</MainBody>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
