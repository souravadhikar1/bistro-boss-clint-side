import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import {
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensilSpoon,
  FaBook,
  FaUser,
} from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { MdFoodBank } from "react-icons/md";
import SectionTitle from "../Components/Sectiontitle/SectionTitle";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  //  TODO: Load data from the server  to have dynamic isAdmin based on data

  const isAdmin = true;

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {/* <SectionTitle
            subheading="My Cart"
            heading="WANNA ADD MORE?"
          ></SectionTitle> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            {/* <!-- Sidebar content here --> */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="//dashboard/reservations">
                    <FaUtensilSpoon></FaUtensilSpoon> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <ImMenu></ImMenu> Manage Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUser></FaUser> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="//dashboard/reservations">
                    <FaCalendarAlt></FaCalendarAlt> Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myCart">
                    <FiShoppingCart></FiShoppingCart> My Cart
                    <span className="badge inl badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                {" "}
                <ImMenu></ImMenu> Our Menu
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/order/salad">
                <MdFoodBank></MdFoodBank> Order Food
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
