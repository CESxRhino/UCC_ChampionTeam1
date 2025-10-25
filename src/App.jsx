import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [currentTodo, setCurrent] = useState([]);

  const data = [
    {
      "item": "Mua sua"
    },
    {
      "iteam": "Hoc React"
    },
    {
      "item": "Chay bo"
    }
  ]
  return (
    <>
      <div class="container">
        <h1>Danh Sách Công Việc</h1>
        <div class="add-form">
          <input type="text" placeholder="Nhập công việc mới..."/>
          <button>Thêm</button>
        </div>
        <ul>
          <li>Mua sữa <button>Xóa</button></li>
          <li>Học React <button>Xóa</button></li>
          <li>Chạy bộ <button>Xóa</button></li>
        </ul>
      </div>
    </>
  )
}

export default App
