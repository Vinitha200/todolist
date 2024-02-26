import React from 'react'
import { Card } from 'antd'
const Read = ({ newTask }) => {

    console.log("read", newTask)
    return (
        <>
            <div>
                <Card
                    bodyStyle={{ padding: "4px" }}>
                    {newTask?.map((item) => {
                        return <li>{item?.task}</li>
                    })}
                </Card>

            </div>
        </>

    )
}

export default Read