import { signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

type Props = {};

const ClientNavBar = ({}: Props) => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <SessionProvider>
      <nav>{session && <button onClick={handleSignOut}>Exit</button>}</nav>
    </SessionProvider>
  );
};

export default ClientNavBar;
