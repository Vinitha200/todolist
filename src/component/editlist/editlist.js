import React, { useState } from "react";
import { Form, Input, Button, Card, Modal } from "antd"
//import "./addForm.css"

const EditData = ({ newTask, setNewTask, editrecord, isedit, setIsEdit }) => {


    const [edit, setEdit] = useState(editrecord)

    console.log("editingData", edit)
    
    const handleCancel = () => {
        setIsEdit(false);
    };

    const hangelChange = (e) => {
        // console.log('Success2:', e?.targe.value);
        let newdata = e?.target?.value
        setEdit(newdata)
    }

    const handleUpdate = () => {
        const update = newTask.map((item) => {
            if (item.id === editrecord.id) {
                return { ...item, task: edit };
            }
            return item;
        });

        console.log(update, 'update')
        setNewTask(update)
        setIsEdit(false);

    }

    console.log("newTask", newTask, edit)
    return (
        <>
            <div>
                <Modal 
                title="Edit Task" 
                open={isedit} 
                onCancel={handleCancel} 
                footer={null}>
                    <Card
                        size="small"
                        className="form-card"

                    >
                        <form>
                            <input
                                name="task"
                                value={edit?.task}
                                onChange={(e) => hangelChange(e)}
                            />
                            <button htmlType='submit' onClick={handleUpdate}>update</button>
                        </form>
                    </Card>
                </Modal>


            </div>



        </>
    )
}

export default EditData