// prop typing using generics
type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

// using generics as well as for prop typing
const List = <T extends number | string>({
  items,
  handleClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, i) => (
        <div key={i} onClick={() => handleClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
