import { useEffect, useState } from "react"
import "./styles.css"

function App() {
 
  const [list,setList] = useState([])
  const [value,setValue] = useState("")
  const [donelist,setDonelist] = useState([])
  const [beingdonelist,setBeingdonelist] = useState([])
 

 
  const ekle = () => {
    if (value) {
      const newItem = {
        text: value,
        date: new Date().toLocaleString()
      };
      
      setList([...list, newItem]);
      setValue("");
    }
  };
const gönder = (e) => {
  setValue(e.target.value)
}

const sil = (i) => {
  const update = [...list.slice(0, i), ...list.slice(i + 1)];
  setList(update)
}
const silprogress = (i) => {

  const updated = [...donelist.slice(0, i), ...donelist.slice(i + 1)];
  setDonelist(updated)
}

const sildone = (i) => {
  const updated2 = [...beingdonelist.slice(0, i), ...beingdonelist.slice(i + 1)];
  setBeingdonelist(updated2)

}
 const doneekle = (i) => {
  setDonelist([...donelist, list[i]]);

  const newItem2 = {
    text: list[i].text,
    date: new Date().toLocaleString(),
  };

  setDonelist([...donelist, newItem2]);

  const update = [...list.slice(0, i), ...list.slice(i + 1)];
  setList(update);
};

const beingdoneekle = (i) => {
  setBeingdonelist([...beingdonelist, donelist[i]]);

  const newItem3 = {
    text: donelist[i].text,
    date: new Date().toLocaleString(),
  };

  setBeingdonelist([...beingdonelist, newItem3]);

  const update = [...donelist.slice(0, i), ...donelist.slice(i + 1)];
  setDonelist(update);
};

const handleKeyDown = (e) => {

  if (e.key === "Enter") {
    ekle();
  }
};
const clearlist =() => {
  setList([]);
 
}
const clearprogress =() => {
  
  setDonelist([]);
  
}
const cleardone =() => {

  setBeingdonelist([]);
}
  return (
    <div className="very-big-container">
    <div className="big-container">
    <div className="container">
      <h1 className="title">TO DO LIST</h1>
      

 <div className="üst-kisim">
       <input className="input" type="text" value={value} onChange={gönder} onKeyDown={handleKeyDown}/>
       <button className="buton" onClick={ekle}>Add </button>
       
 </div>

 <div className="alt-kisim">
 <ul>
 {list.map((item, i) => (
                <li className="liste-eleman" key={i}>
                  {item.text}
                  <button className="sil" onClick={() => sil(i)}>
                    x
                  </button>
                  <button className="ekle" onClick={() => doneekle(i)}>
                    +
                  </button>
                  <p>Date: The decision was made on {item.date}</p>
                </li>
              ))}
             
 </ul>

 <button className="clear" onClick={()=> clearlist()}
 > Clear
  </button>

</div>

</div>

</div>
<div className="big-container3">

<h1 className="title">IN PROGRESS</h1>

<div className="alt-kisim">
<ul>
 {

      donelist.map((dt, i) => (

      <li 
      
      className="liste-eleman"key={i}>{dt.text} 
       <button className="sil" onClick={() => silprogress(i)}>
                    x
                  </button>
      <button className="ekle" onClick={() => beingdoneekle(i)}>
                    +
      </button>
       <p>Date: Started on {dt.date}</p>
      </li>
      
      
   ))
   
 }
 </ul>
 <button className="clear" onClick={()=> clearprogress()}
 > Clear
  </button>
</div>

  
</div>
<div className="big-container2">

  <h1 className="title">DONE</h1>

 <div className="alt-kisim">
 <ul>
 {

      beingdonelist.map((donevalue, i) => (

      <li 
      
      className="liste-eleman"key={i}>{donevalue.text} 
       <button className="sil" onClick={() => sildone(i)}>
                    x
                  </button>
       <p>Date: Ended on {donevalue.date}</p>
      </li>
      
      
   ))
   
 }
 </ul>
 <button className="clear" onClick={()=> cleardone()}
 > Clear
  </button>
</div>


 

</div>

</div>
)
}

export default App
