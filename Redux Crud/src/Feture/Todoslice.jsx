import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({
    name: "todo",
    initialState: { Students: [] },
    reducers:{
        addData : (state, action)=>{
            state.Students.push(action.payload)
        },
        deleteData: (state , action)=>{
            let data = state.Students.filter((item)=> item.id != action.payload)
            state.Students = data
        },
        updateData:(state , action) => {
            state.Students.map((e,i)=>{
                if(e.id == action.payload.id)
                {
                    e.name = action.payload.name
                    e.sub = action.payload.sub
                    e.managername = action.payload.managername
                    e.description = action.payload.description
                    e.priority = action.payload.priority
                }
                else{
                    e
                }
            })
        }
    }
})

export const {addData , deleteData, updateData} = todo.actions
export default todo.reducer