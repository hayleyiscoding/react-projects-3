import Item from "./Item";

export default function Menu(props) {
  return (
    <section className='menu'>
      {props.items.map((menuItem) => {
        const { name, id, description, image, price } = menuItem;
        return (
          <Item
            key={id}
            name={name}
            description={description}
            image={image}
            price={price}
          />
        );
      })}
    </section>
  );
}
