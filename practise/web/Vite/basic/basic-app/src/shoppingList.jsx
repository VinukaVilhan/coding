import ShoppingListItem from "./shoppingListItem";

function ShoppingList({items})
{
    return (
        <ul>
            {items.map((i)=> 
                <ShoppingListItem key={i.id} {...i}/>
            )}
        </ul>
    );
}





// function ShoppingList({items})
// {
//     return (
//         <ul>
//             {items.map((i)=> 
//                 <ShoppingListItem key={i.id} object={i}/>
//             )}
//         </ul>
//     );
// }

export default ShoppingList;