import PropertyListItem from "./propertyListItem";

export default function PropertyList({items})
{
    return (

        //map
        <div style={{ display:"flex", flexDirection:"row" }}>
            {items.map((item)=>
            <PropertyListItem key={item.id} object={item}/>)}
        </div>
    );
}