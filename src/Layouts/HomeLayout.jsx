import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer";


export default function HomeLayout({ children }) {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer(){
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0px';
    }


  return (
    <div className="min-h-[90vh]">
        <div className="drawer absolute left-0 z-50 w-fit ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="cursor-pointer relative">
                    <IoIosMenu 
                        onClick={changeWidth}
                        size={"32px"}
                        className="font-bold text-white m-4"
                    />
                </label>
            </div>
            <div className="drawer-side w-0">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu bg-base-300 sm:w-80 text-base-content relative w-48 p-4">
                    <li className="w-fit absolute  right-2 z-40">
                        <button onClick={hideDrawer}> 
                            <AiFillCloseCircle 
                                size={"24px"}
                            />
                            
                        </button>
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/courses"}>All Courses</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                </ul>

            </div>
        </div>
        {children}
        <Footer></Footer>
    </div>
  )
}
