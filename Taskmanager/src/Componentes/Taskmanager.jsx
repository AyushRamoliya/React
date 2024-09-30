import React, { useEffect, useState } from 'react';




export default function Taskmanager() {
    const [task, setTask] = useState('');
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("student")) || [];
        setRecord(data);
    }, []);

    const handleAdd = () => {
        let data = { id: Date.now(), task, status: "Pending" }; 
        let oldRecord = JSON.parse(localStorage.getItem("student")) || [];

        if (editIndex) {
            let singleData = record.find((item) => item.id === editIndex);
            singleData.task = task;
            localStorage.setItem("student", JSON.stringify(record));
            setEditIndex(null);
        } else {
            oldRecord.push(data);
            setRecord(oldRecord);
            localStorage.setItem("student", JSON.stringify(oldRecord));
        }
        setTask("");
    };

    const handleDelete = (id) => {
        let deletedData = record.filter((item) => item.id !== id);
        setRecord(deletedData);
        localStorage.setItem("student", JSON.stringify(deletedData));
    };

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id === id);
        setTask(singleData.task);
        setEditIndex(id);
    };

    const handleComplete = (id) => {
        let updatedRecords = record.map((item) => {
            if (item.id === id) {
                return { ...item, status: "Complete" }; 
            }
            return item;
        });
        setRecord(updatedRecords);
        localStorage.setItem("student", JSON.stringify(updatedRecords));
    };

    return (
        <div>
            <h1>Taskmanager</h1>
            <center>

            <input type="text" placeholder='Enter Task Name' value={task} onChange={(e) => setTask(e.target.value)}/>

            <button onClick={handleAdd}>{editIndex ? "Update" : "Add"}</button>
            </center>
            <table border="1" width="50%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th> 
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record ? (
                        record.map((e, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.task}</td>
                                <td>{e.status}</td> 
                                <td>
                                    <button onClick={() => handleEdit(e.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleComplete(e.id)} >
                                        Complete
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : 
                    ""
                    }
                </tbody>
            </table>
        </div>
    );
}