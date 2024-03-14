import { useState } from "react";

export default function ShoppingCart({items}) {
    const [cartItems, setCartItems] = useState(items);

    //deleting particular item
    function deleteItem(id) {
        setCartItems(cartItems.filter(i => i.id !== id));
    }

    //adding an particular item
    function addItem() {
        const newItem = {id:8, product:"New Item", price:0 }; 
        setCartItems([...cartItems, newItem]);
    }

    //updating all items
    function updateAllItems()
    {
        setCartItems(cartItems.map((item) => {
            return{...item, product: item.product.toLowerCase()};
        }));
    }

    //updating a particular item
    function updateItem(id)
    {
        setCartItems(cartItems.map((item)=> {
            if(item.id === id)
            {
                return {...item, price:20};
            }
            else
            {
                return item;
            }
        }));
    }
    
    return (
        <>
        {cartItems.map((item) => (
            <div key={item.id}> 
                <p>{item.product}</p>
                <p>{item.price}</p> 
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <button onClick={() => updateItem(item.id)}>Update</button>
            </div>
        ))}
        <button onClick={addItem}>Add Item</button>
        <button onClick={updateAllItems}>Update Items</button>
        </>
    );
}
