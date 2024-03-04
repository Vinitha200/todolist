import React, { useState } from 'react'
import { Card, Checkbox } from 'antd'
import "./read.css"
import { EditFilled } from '@ant-design/icons'
import EditData from "../editlist/editlist"

const Read = ({ newTask, setNewTask }) => {
    const [isedit, setIsEdit] = useState(false)
    const [editrecord, seteditrecord] = useState("")
    const [id,setID]=useState('')

    const handleDelete = (index) => {
        const updated = [...newTask]
        updated.splice(index, 1)
        setNewTask(updated)
    }

    const handleCheck = (e, index) => {
        let update = [...newTask]
        update[index] = { ...update[index], completed: e.target.checked };
        console.log(e.target.checked, update,)
        //   update?.completed = e.target.checked
        setNewTask(update)
    }

    const handleEdit = (item,id) => {
        setIsEdit(true)
        seteditrecord(item)
        setID(id)
    }

    const editingData = newTask?.filter((item)=>item.id===id)
    return (
        <>
            <div className='task-div'>
                {newTask.length > 0 &&
                    <Card
                        className='task-card'
                        bodyStyle={{ padding: "4px" }}>
                        {newTask?.map((item, index) => {
                            return (
                                <div className='task-item'>
                                    <div
                                        style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Checkbox
                                            onChange={(e) => handleCheck(e, index)}>
                                            <li key={index} className={item?.completed ? 'completed' : 'task-li'}>{item?.task}</li>
                                        </Checkbox>
                                        <div style={{ display: "flex" }}>
                                        <button className="delete" onClick={() => handleEdit(item,item?.id)}><EditFilled/></button>
                                            <button className="delete" onClick={() => handleDelete(index)}>x</button>
                                           
                                        </div>

                                    </div>


                                </div>)
                        })}

                    </Card>}

                {isedit && 
                <EditData 
                editrecord={editrecord} 
                newTask={newTask} 
                setNewTask={setNewTask} 
                isedit={isedit} 
                setIsEdit={setIsEdit} />}
            </div>
        </>

    )
}

export default Read