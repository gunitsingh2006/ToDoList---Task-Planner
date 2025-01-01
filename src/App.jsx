import { useState , useEffect} from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { useInsertionEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

const [ToDo, setToDo] = useState("")
const [ToDos, setToDos] = useState([])  

useEffect(()=>{
  let ToDoString = localStorage.getItem("ToDos")
  if  (ToDoString){
    let ToDos = JSON.parse(localStorage.getItem("ToDos"))
    setToDos(ToDos)}
}, [])

const saveToLocalStorage = (params) => {
  localStorage.setItem('ToDos', JSON.stringify(ToDos))
}


const handleAdd = () => {
  setToDos([...ToDos, {id: uuidv4(), ToDo, isCompleted: false}])
  setToDo("")
  saveToLocalStorage(ToDos)
  console.log(ToDos)
}
const handleEdit = (e, id) => {
 let t = ToDos.filter(i=>i.id === id)
setToDo(t[0].ToDo)
let newToDos = ToDos.filter(item=>{
  return item.id !== id;
})
setToDos(newToDos)
  }

const handleDelete = (e, id) => {
  let newToDos = ToDos.filter(item=>{
    return item.id !== id;
  })
  setToDos(newToDos)
}
const handleChange = (e) => {
setToDo(e.target.value)

}
const handleCheckbox = (e) => {

let index = ToDos.findIndex(item=>{
  return item.id === id;
})
console.log(index)
let newToDos = [...ToDos];
newToDos[index].iscompleted = !newToDos[index].iscompleted;
setToDos(newToDos)
saveToLocalStorage(ToDos)
}

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-[80vh]">
   
  <div className="addtodo my-5 ">
    <h2 className='text-2xl font-bold'>Add A ToDo</h2>
    <input  onChange={handleChange} value={ToDo} type="text" className='w-1/2 rounded-md h-8'  />
    <button onClick={handleAdd} className='bg-blue-800 hover:bg-blue-950 p-3 py-1 text-white font-bold rounded-md text-lg mx-6'>Save</button>
  </div>
   <h2 className='text-2xl font-bold'>Your ToDos</h2>
    <div className="todos">
      
      {ToDos.length === 0 && <div className="text-center text-6xl font-bold text-white drop-shadow-lg">No ToDos</div>}
      {ToDos.map(item=>{

  return <div key={item.id} className=" flex text-xl my-3 justify-between ">
    <div className='flex gap-5 '>
    <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}  id="" />
    <div className={item.iscompleted?"line-through":""}>{item.ToDo}</div>
    </div>
    <div className="buttons flex h-full">
      <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-blue-800 hover:bg-blue-950 p-3 py-1  text-white font-bold rounded-md text-lg mx-1 '>Edit</button>
      <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-blue-800 hover:bg-blue-950 p-3 py-1  text-white font-bold rounded-md text-lg mx-1 '>Delete</button>
    </div>
    </div>
})}
    </div>
   
</div>
    </>
  )
}

export default App
