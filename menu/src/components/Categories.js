export default function Categories({ categories, filterItems }) {
  return (
    <section className='categories flex center'>
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}

      {/* <button onClick={() => filterItems("all")}>All</button>
      <button onClick={() => filterItems("breakfast")}>Breakfast</button>
      <button onClick={() => filterItems("lunch")}>Lunch</button>
      <button onClick={() => filterItems("shakes")}>Shakes</button> */}
    </section>
  );
}
