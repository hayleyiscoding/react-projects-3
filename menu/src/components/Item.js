export default function Item(props) {
  return (
    <article className='article menu-item flex align-center justify-between'>
      <img src={props.image} alt={props.name} />
      <div className='article--col_2'>
        <div className='menu-item-header flex justify-between'>
          <h2>{props.name}</h2>
          <h3 className='price'>${props.price}</h3>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    </article>
  );
}
