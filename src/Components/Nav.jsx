import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [MdMenuOpen, setMdMenuOPen] = useState(false);

  let loginStatus = false;
  let username = localStorage.getItem("user");

  if (username != null) {
    loginStatus = true;
  }
  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function MdtoggleMenu() {
    setMdMenuOPen(!MdMenuOpen);
  }

  function newFile() {
    window.location.reload();
  }
  return (
    <>
      <div className="  flex justify-between w-full h-10 bg-zinc-300 border-gray-500 text-xs text-gray-600  ">
        <div
          className={`  ${
            isMenuOpen ? "-translate-x-full transition-all" : "translate-x-0 transition-all "
          } absolute   bg-blue-100 text-blue-400 font-bold   top-0 bottom-0 w-[40%]  md:hidden z-20 `}
        >
          <ul className="px-4">
          <button onClick={toggleMenu} className="text-[16px] p-4 flex  items-center">
          <MdCancel  className="size-7"/>Dismiss
          </button>
            <li className="menu">
              <Link onClick={newFile}> New </Link>
            </li>
            <li className="menu">
              <Link> Login / Register </Link>
            </li>
            <li className="menu">
              <Link>Blogs</Link>
            </li>
            <li className="menu">
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <div
          className={` hidden ${
            MdMenuOpen ? "md:block translate-y-0 transition-all" : "md:hidden transition-all"
          } md:bg-white md:h-32 top-10 w-64 border md:absolute md:z-40`}
        >
          <ul>
            <li className="menu">
              <Link onClick={newFile}>New</Link>
            </li>
            <li className="menu">
              <Link>BLogs</Link>
            </li>
            <li className="menu">
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <img src={Logo} alt="" className="h-10 p-1" onClick={toggleMenu} />
          <div className="hidden md:block md:p-2">
            <Link
              className={`px-2 ${
                MdMenuOpen ? "bg-white py-[12px]" : "bg-transparent"
              }`}
              onClick={MdtoggleMenu}
            >
              File
              <IoMdArrowDropdown
                className={`inline-flex mx-2 cursor-pointer`}
              />
            </Link>
          </div>
        </div>

        <div className="my-0.5 text-black">
          <button className="btn rounded-l-lg  " onClick={props.HtmlFunction}>
            HTML
          </button>
          <button className="btn " onClick={props.CssFunction}>
            CSS
          </button>
          <button className="btn" onClick={props.JsFunction}>
            JAVASCRIPT
          </button>
          <button className="btn ">CONSOLE</button>
          <button className="btn rounded-r-lg">OUTPUT</button>
        </div>

        <div className="hidden md:text-sm md:flex md:gap-2 md:h-6 md:mt-2 px-2">
          {loginStatus ? (
            <>
              <Link>{localStorage.getItem("user")}</Link>
              <Link className="px-2" onClick={logout}> logout
              </Link>
            </>
          ) : (
            <>
              <Link className="bg-yellow-400 px-2" to={`login`}>
                Login or Register
              </Link>
            </>
          )}
          <Link>Blog</Link>
          <span>Help</span>
        </div>
      </div>
    </>
  );
}
