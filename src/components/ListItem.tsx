const style = {
  border: "1px solid black",
  borderRadius: "15px",
  padding: "10px",
};

type ListItemProps = {
  number: number;
};
const ListItem = (props: ListItemProps) => {
  return (
    <li style={style}>
      {props.number}
    </li>
  );
};

export default ListItem;
