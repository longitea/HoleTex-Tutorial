import React, { useState } from 'react'
import { Button, Col, Input, Row, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/action'
import { v4 as uuidv4 } from 'uuid'
import { todosRemaining } from '../Redux/selectors'

export default function index() {

    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const dispath = useDispatch()
    const todoList = useSelector(todosRemaining)

    const handleSumbit = () => {
        dispath(addTodo(
            {
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            }))

        setTodoName('')
        setPriority('Medium')

    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {/* render danh sách todolist bên trong store */}
                {
                    todoList?.map(task => <Todo key={task.id} name={task.name} priority={task.priority} completed={task.completed}/>)
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={ev => setTodoName(ev.target.value)} />
                    <Select defaultValue="Medium" value={priority} onChange={ev => setPriority(ev)}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleSumbit}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}
