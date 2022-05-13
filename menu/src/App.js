// Need to clean up this code - especially classes and CSS. Make it mobile responsive using grid

import React from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = React.useState(data);
  const [categories, setCategories] = React.useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className='container main'>
      <section>
        <header>
          <h1>Our Menu</h1>
          <hr />
        </header>
        <Categories filterItems={filterItems} categories={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
