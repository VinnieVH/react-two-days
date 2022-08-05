import ListItem from "./ListItem";

const style = {
        listStyle: "none",
        padding: 0
}

interface ListItemProps {
        numberOfItems: number;
}

const List = (props: ListItemProps) => {
   return (
       <ul style={style}>{[...Array(props.numberOfItems)].map((_,index)=><ListItem key={index} />)}</ul>
   );
}

export default List;