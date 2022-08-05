import React, { useState } from 'react'
import {Checkbox, Row, Tag} from 'antd'

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function index({ name, priority, completed }) {

    const [checked, setChecked] = useState(completed);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
                {priority}
            </Tag>
        </Row>
    )
}
