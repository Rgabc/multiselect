import React, { useState } from "react";
import "./Multi.css"
const Multiselect=()=>{
    const course=["react","nodejs","mongoDb","expressjs"]
    const[dropDown,setDropDown]=useState(false);
    const[value,setValue]=useState();

    return(
    <fieldset className="field" >

    <button onClick={()=>{setDropDown(prevState => !prevState)}}>course</button>
    {dropDown&&<div className="field_inner">
        <div>you want course
            <input  type="checkbox"  onChange={()=>{setValue(false)}} />
            <label>yes</label> &nbsp;
            <input  type="checkbox"  onChange={()=>{setValue(true)}}/>
            <label>No</label>
        </div>

        {course.map((row)=>{
            return(<>
            <input disabled={value} type="checkbox"/>
            <label >{row}</label><br/>
            </>)
        })}
        
        
        
        </div>}


    
    </fieldset>)
}
export default Multiselect;