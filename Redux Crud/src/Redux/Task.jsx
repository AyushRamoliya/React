import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../Feture/Todoslice'


export default function ReduxTodo() {
    const [name, setname] = useState("")
    const [sub, setsub] = useState("")
    const [managername,setmanagername] = useState("")
    const[priority,setpriority] = useState("")
    const [description,setdescription] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    const count = useSelector((state) => {
        return state.todokey
    })
    const dispatch = useDispatch();


    const addRecord = () => {
        if (editIndex == null) {
            dispatch(addData({ id: Date.now(), name, sub,managername,priority,description }))
        }
        else {
            dispatch(updateData({ id: editIndex, name, sub,managername,priority,description}))
            setEditIndex(null)
        }

        setname("")
        setsub("")
        setmanagername("")
        setpriority("")
        setdescription("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }

    const editRecord = (id) => {
        let singleData = count.Students.find((item) => item.id == id);
        setname(singleData.name)
        setsub(singleData.sub)
        setmanagername(singleData.managername)
        setpriority(singleData.priority)
        setdescription(singleData.description)
        setEditIndex(id)
    }


    return (
        <div>
            <h1>Task Manager</h1>

            <input type="text" placeholder='Task Name' value={name} onChange={(e) => setname(e.target.value)} /><br/><br/>
            <input type="text" placeholder='Task Subject' value={sub} onChange={(e) => setsub(e.target.value)} /><br/><br/>
            <input type="text" placeholder='Task Manager Name' value={managername} onChange={(e) => setmanagername(e.target.value)}/><br/><br/>
            <input type="text" placeholder='description' value={description} onChange={(e) => setdescription(e.target.value)} /><br/><br/>
            
            <select name="" id="" value={priority} onChange={(e)=>setpriority(e.target.value)}> 
                <option value="select">Select Task Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select><br/><br/>
            
            <button onClick={addRecord}>{editIndex ? "Update Data" : "Add Data"}</button>

            {
                count ?
                    count.Students.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.sub}</li>
                            <li>{e.managername}</li>
                            <li>{e.description}</li>
                            <li>{e.priority}</li>
                            
                            <button onClick={() => editRecord(e.id)}>edit</button>
                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                        </ul>
                    })

                    :
                    <p>NO Data</p>
            }
        </div>
    )
}