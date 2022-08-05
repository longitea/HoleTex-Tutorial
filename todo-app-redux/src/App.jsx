import { Typography, Divider } from 'antd'
import './App.css'
import Filters from '../src/components/Filters'
import TodoList from '../src/components/TodoList'

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}> REDUX TODO </Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  )
}

export default App
