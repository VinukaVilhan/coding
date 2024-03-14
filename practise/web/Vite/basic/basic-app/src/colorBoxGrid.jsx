import ColorBox from "./colorBox";
import "./colorBoxGrid.css"

export default function ColorBoxGrid({colors})
{
    //array
    const boxes = [];

    for(let i = 0; i < 25; i++)
    {
        //push color box component
        boxes.push(<ColorBox Color={colors}/>);
    }
    return(
        <div className="wrapper">{boxes}</div>
    );
}