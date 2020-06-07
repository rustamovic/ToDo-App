import React, {useState} from 'react';
import './App.css';
import ToDo from './ToDo';
  const App = (props) => {
  const [todoName, settodoName] = useState('');
  const [List, setList] = useState([]);
  const onchangeHandling = (event) =>{
    settodoName(event.target.value);
  }
  const addList = () => {
    let newList={
      id:Math.random,
      name: todoName
    }
      setList(List.concat(newList));
  }
  const deleteList = (deleteId) => {
    const updated = [...List]
    updated.splice(deleteId, 1)
    setList(updated);
  }  
return(
  <React.Fragment>
  <div className='AddPerson'>
   <h1>ToDos</h1>
    <input onChange={onchangeHandling} 
           value={todoName}
           placeholder="Enter what you want" 
           type="text"/>
    <button type='button' onClick={addList}>+</button> 
  </div>                  
      {List.map((work)=>(
      <ToDo key = {work.id} 
      removeWork = {()=>deleteList(work.id)}
      workName = {work.name}/>
    ))}
  </React.Fragment>
);
}
export default App;