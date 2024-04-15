import { log } from "console";
import { url } from "inspector";
import { useEffect, useRef, useState } from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const ulRef: any = useRef(null);
  const menuRef: any = useRef(null);
  const prevScrollYRef: any = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  function HandleClick(): void {
    setIsMenuOpen((prev) => !prev);
  }
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    const handleScroll = () => setIsMenuOpen(false);
    const handleClickOutside = (e: { target: any }) => {
      if (
        !ulRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isMenuOpenStyle = isMenuOpen ? "1" : "0";
  const isMenuOpenBtnStyle = isMenuOpen ? "is-active" : "";

  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center border-b border-slate-400 px-4 text-gray-800 md:justify-between md:px-10 lg:px-24">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <button
          onClick={HandleClick}
          type="button"
          className={`hamburger hamburger--squeeze text-xl md:hidden ${isMenuOpenBtnStyle}`}
          ref={menuRef}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <ul
        className={`absolute left-0 top-full flex w-full origin-top transform flex-col items-center justify-between gap-3 py-3 text-base font-semibold shadow-lg transition-transform duration-300 md:transition-none scale-y-${isMenuOpenStyle} md:static md:w-auto md:transform-none md:flex-row md:gap-10 md:py-0
        md:shadow-none`}
        ref={ulRef}
      >
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
          Home
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
          About
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
          Project
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
          Resume
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-gray-400">
          Contact
        </li>
      </ul>
    </header>
  );
}
