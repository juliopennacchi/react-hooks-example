import { useEffect, useState } from "react";

const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(items => setItems(items));  
    }, [getItems]);

    return items && items.map((item) => <p key={item}>{item?.title || item?.name}</p>)
}
    
export default List;