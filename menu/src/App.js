import React from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./data";

export default function App() {
  const [menuItems, setMenuItems] = React.useState(data);
  const [categories, setCategories] = React.useState([]);

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
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
