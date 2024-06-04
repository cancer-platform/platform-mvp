import { ReactNode } from "react";
import ClientNavBar from "@/components/client/ClientNavBar";

interface AuthorizedLayoutProps {
  children: ReactNode;
}

const AuthorizedLayout = ({ children }: AuthorizedLayoutProps) => {
  return (
    <div>
      <ClientNavBar></ClientNavBar>
      {children}
    </div>
  );
};

export default AuthorizedLayout;
