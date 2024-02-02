import {  useState } from "react";
import './style.css'


function ToggleButtoncolor() { 
   const [bgColor,setBgColor] = useState('white')
   const [textColor,setTextColor] = useState('#1b1b1b')
   const [btnStyle,setBtnStyle] = useState('white')

   function handleclick(){
      setBgColor(bgColor === 'white'? '#1b1b1b': 'white')
      setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
      setBtnStyle(bgColor === 'white' ?  '#1b1b1b' : 'white' )

   }


    

   return (<>
      <section style={{backgroundColor:bgColor,color:textColor}}>
         <button onClick={handleclick} style={{btnStyle,color:textColor,border:`2px solid ${textColor}`}} >
            {bgColor === 'white'? 'White Theme' : 'Dark theme'}
         </button>
         <section className="content">
            <h1>welcome To A <br/>
            Real World
            </h1>
         </section>
      </section>
      
   </>)
}

export default ToggleButtoncolor;