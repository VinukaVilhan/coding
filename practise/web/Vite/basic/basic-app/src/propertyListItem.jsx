
export default function PropertyListItem({object})
{
    return(
        <>
            <div style={{margin:"1em", padding:"1em", border:"1px solid black"}}>
                <div>{object.name}</div>
                <div>${object.rating} a night</div>
                <div>{object.price}</div>
            </div>
        </>
        
    );
}