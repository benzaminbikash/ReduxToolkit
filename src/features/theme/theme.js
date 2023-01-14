import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./themeSlice";

function Theme() {
    const [color, setColor] = useState('white')
    const colo=useSelector((state)=>state.theme.color)
    const dispatch=useDispatch()
    return (
        <div>
            <h3 style={{color:colo}}>Theme Color</h3>
            <input onChange={(e)=>setColor(e.target.value)} type='text'/>
            <br/>
            <button onClick={()=>dispatch(changeColor(color))} >Change color</button>
            <h4>{colo}</h4>
        </div>
    );
}

export default Theme;
