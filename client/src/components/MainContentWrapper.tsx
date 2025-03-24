import React from "react";
import { useSidebar } from "./ui/sidebar";

const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const { open } = useSidebar();
  return (
    <div className={open ? "md:ml-[192px]" : "md:ml-[72px]"}>{children}</div>
  );
};

export default MainContentWrapper;
