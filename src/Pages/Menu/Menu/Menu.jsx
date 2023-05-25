import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../../assets/menu/pizza-bg.jpg";
import saladtImg from "../../../assets/menu/salad-bg.jpg";
import souptImg from "../../../assets/menu/soup-bg.jpg";
// import PopularMenu from "../../Home/Popularmenu/PopularMenu";
// import { useMatch } from "react-router-dom";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* !Main Cover */}
      <SectionTitle
        subheading="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered  menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}

      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizzzzzza */}
      <MenuCategory
        img={pizzatImg}
        items={pizza}
        title={"Pizza"}
      ></MenuCategory>
      {/* salsads and soup*/}
      <MenuCategory
        items={salad}
        title={"salad"}
        img={saladtImg}
      ></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={souptImg}></MenuCategory>
    </div>
  );
};

export default Menu;
