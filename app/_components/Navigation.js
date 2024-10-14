import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className='flex gap-6 px-4 py-4'>
        <li>
          <Link href='/cars'>Cars</Link>
        </li>

        <li>
          <Link href='about'>About</Link>
        </li>

        <li>
          <Link href='account'>Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
