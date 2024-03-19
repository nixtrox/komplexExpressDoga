import { useEffect, useState } from 'react'
import { Console } from './console';

import './App.css'

function App() {
 
  const [consoles,setConsole] = useState([] as Console[]);
  const [name,setName] = useState('');
  const [brand,setBrand] = useState('');
  const [price,setPrice] = useState('');


  async function load() {
    const response = await fetch("http://localhost:3000/Konzolok");
    const console = await response.json() as Console[];
    

    setConsole(console);


  }


  useEffect(()=>{
    load();
  },[])





  async function PostData() {
    
    const Data = `{"Name": "${name}", "Brand": "${brand}", "Price": ${price}} `



    const sendComm = await fetch('http://localhost:3000/Konzolok',{
        method:"POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: Data
      })
      await load();


  }



  return (
   <div>


< label htmlFor="">Adat felvétele</label>
    <br />
    <label htmlFor="">Név:</label>
    <input type="text" name="" id="nameInp" onInput={e => {setName(e.currentTarget.value)}} />
    <br />
    <label htmlFor="">Márka:</label>
    <input type="text" name="" id="brandInp" onInput={e => {setBrand(e.currentTarget.value)}} />
    <br />
    <label htmlFor="">Ár:</label>
    <input type="text" name="" id="priceInp" onInput={e => {setPrice(e.currentTarget.value)}}/>
    <button onClick={PostData} >Add</button>



    <div className='container' >
      
      <h1>Title</h1>
      <ul>
      {
        consoles.map(cons => <p> {cons.Name} - {cons.Brand} - {cons.Price}Ft</p>)
      }
      </ul>




    </div>





   </div>
  )
}

export default App
