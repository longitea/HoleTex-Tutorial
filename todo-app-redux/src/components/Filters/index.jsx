import React, { useState } from 'react'
import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd'
import { useDispatch } from 'react-redux';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../Redux/action';

const { Search } = Input;


export default function index() {
    const dispath = useDispatch()
    
    
    const [searchText, setSearchText] = useState('')
    const [filterStatus, setFilterStatus] = useState('All')
    const [filterPriorities, setFilterPriorities] = useState([])
    
    const handleSearchTextChange = ev => {
        setSearchText(ev.target.value)
        dispath(searchFilterChange(ev.target.value))
    }

    const handleStatusChange = ev => {
        setFilterStatus(ev.target.value)
        dispath(statusFilterChange(ev.target.value))
    }

    const handlePrioritiesChange = ev => {
        setFilterPriorities(ev)
        dispath(priorityFilterChange(ev))
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={ handleStatusChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={filterPriorities}
                    onChange = {handlePrioritiesChange}
                >
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
            </Col>
        </Row>
    )
}
