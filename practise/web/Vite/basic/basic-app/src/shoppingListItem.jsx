export default function shoppingListItem({item, quantity, completed})
{
    return (
        <li style={{color: completed ? "green": "red"}}>{item} - {quantity}</li>
    );
}




// export default function shoppingListItem({object})
// {
//     return (
//         <li style={{color: object.completed ? "green": "red"}}>{object.item} - {object.quantity}</li>
//     );
// }