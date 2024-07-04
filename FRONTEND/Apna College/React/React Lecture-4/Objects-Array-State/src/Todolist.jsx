import { useState } from "react"
import { v4 as uuidv4} from 'uuid';

export default function Todolist(){
    let [list,setlist]=useState([]);
    let [newlist,setnewlist]=useState("");

    let addNewTask = () =>{
        setlist((prevlist)=>{
            return([...prevlist,{task:newlist,id:uuidv4(),isDone:false}])
        });
        setnewlist("");
    }
    let updatelistvalue = (event)=>{
        setnewlist(event.target.value);
    }

    let deletelistitem =(id)=>{
        setlist((prevlist)=>list.filter((prevlist)=> prevlist.id!=id))

    }

    let MarkasDone = () => {
        setlist((prevlist) => 
            prevlist.map((list)=>{
            return {
                ...list,
                isDone: true
            };
        })
      );
    };

    let MarkasDoneOne = (id) => {
        setlist((prevlist) => 
            prevlist.map((list)=>{
            if(list.id==id){
                return {
                    ...list,
                    isDone: true
                };
            } else {
                return list;
            }
        })
      );
    };

    return(
    <div>
        <input type="text" placeholder="Enter the task" value={newlist} onChange={updatelistvalue}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={addNewTask}>Add</button>
        <hr />
        <h4>Todo-List</h4>
        <ul>
            {
                list.map((list)=>((
                <li key={list.id}>
                    <span style={list.isDone?{textDecoration:"line-through"}:{}}>{list.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=> deletelistitem(list.id)}>Delete</button>
                    <button onClick={()=> MarkasDoneOne(list.id)}>Mark as done</button>
                </li>
                )))
            }
            
        </ul>
        <br />
        <button onClick={MarkasDone}>Mark all done</button>
    </div>
    );
}