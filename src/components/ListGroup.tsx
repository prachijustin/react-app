function ListGroup() {
  const items = ["India", "USA", "Canada", "Germany", "Australia", "China"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item}
          onClick={() => console.log(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
