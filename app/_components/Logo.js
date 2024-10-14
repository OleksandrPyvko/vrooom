import Image from "next/image";
import logo from "@/public/logo.jpg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="rounded p-4 flex gap-4 items-center">
      <Image src={logo} height="60" alt="logo" className="rounded-lg" />
      <span>Vrooom</span>
    </Link>
  );
}

export default Logo;
