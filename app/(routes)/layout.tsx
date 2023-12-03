import BottomNav from "@/components/bottom-nav";
import Nav from "@/components/nav";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Nav />
      {children}
      <BottomNav />
    </div>
  );
};

export default RootLayout;
