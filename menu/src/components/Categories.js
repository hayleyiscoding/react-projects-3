export default function Categories({ filterItems }) {
  return (
    <section className='categories flex center'>
      <button onClick={() => filterItems("all")}>All</button>
      <button onClick={() => filterItems("breakfast")}>Breakfast</button>
      <button onClick={() => filterItems("lunch")}>Lunch</button>
      <button onClick={() => filterItems("shakes")}>Shakes</button>
    </section>
  );
}
