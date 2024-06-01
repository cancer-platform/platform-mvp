"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface ClientLinkProps {
  href: string;
  back?: boolean;
  children?: React.ReactNode;
}

const ClientLink: React.FC<ClientLinkProps> = ({ href, back, children }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (back) {
      router.back();
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ClientLink;
