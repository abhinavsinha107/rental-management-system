import React from "react";
import { useSidebar } from "./ui/sidebar";

const MainContentWrapper = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) => {
  const { open } = useSidebar();
  return (
    <div
      className={
        open
          ? role === "manager"
            ? "md:ml-[211px]"
            : "md:ml-[192px]"
          : "md:ml-[72px]"
      }
    >
      {children}
    </div>
  );
};

export default MainContentWrapper;
