import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="my-auto bg-pink-300">
      <div className="mx-auto flex h-[75px] w-[90%] items-center justify-between">
        <div>
          <p>LOGO</p>
        </div>
        <div>
          <ul className="flex gap-x-5 font-semibold text-white">
            <li>
              <Link href={""}>SECTION</Link>
            </li>
            <li>
              <Link href={""}>SECTION</Link>
            </li>
            <li>
              <Link href={""}>SECTION</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
