import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd"
import "./addForm.css"

const AddForm = ({newTask,setNewTask}) => {

    const [id,setID]=useState(0)
    const [form] = Form.useForm();

    const generateID = () => {
        setID(prevId => prevId + 1); 
        return id + 1; // 
    };
    
    const onFinish = (values) => {
        console.log('Success:', values);
        if (values?.task.trim() !== '') {
            const newId = generateID(); // Generate a new ID
            setNewTask(prev => [...prev, { task: values?.task, completed: false, id: newId }]);
            form.resetFields();
        }
    };
    

    console.log(newTask)
    return (
        <>
          <div>
            <Card
            size="small"
            className="form-card"
            
            >
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
               
                className="add-form"
            >
                <Form.Item
                    // label="Task"
                    name="task"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Task!',
                        },
                    ]}
                >
                    <Input 
                    className="form-input"
                    placeholder="Add a new task..."
                   
                    />
                </Form.Item>
                <Form.Item
                 
                >
                    <button
                    className="submit-button"  
                    htmlType="submit">
                        Add
                    </button>
                </Form.Item>
            </Form>
            </Card>
           
          </div>
            

            
        </>
    )
}

export default AddForm