import ListItem from "./ListItem";

const style = {
        listStyle: "none",
        padding: 0
}

const List = () => {
   return (
       <ul style={style}>
           <ListItem />
           <ListItem />
           <ListItem />
           <ListItem />
           <ListItem />
           <ListItem />
           <ListItem />
           <ListItem />
           <ListItem />
        </ul>);
}

export default List;