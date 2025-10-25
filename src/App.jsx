import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [currentTodo, setCurrent] = useState([]);
  const [currentId, setCurrentId] = useState(3);
  const [newItem, setNewItem] = useState("");
  const [selectedItem, setSelectedItem] = useState();

  // setCurrent(currentId+1)
  /// ...prev

  const data = [
    {
      "id": "1",
      "item": "Mua sua"
    },
    {
      "id": "2",
      "item": "Hoc React"
    },
    {
      "id": "3",
      "item": "Chay bo"
    }
  ]

  const add = async (value) => {
    // console.log(newItem)
    setCurrentId(currentId+1)
    console.log(currentId)
    setCurrent([...currentTodo, {
      item: value,
      id: currentId+1,
    }])
  }

  const remove = (id) => {
    // setCurrent((prev) => {
    //   prev.filter((todo) => {
    //     todo.id !== id
    //   })
    // })

    setCurrent(currentTodo.filter(todo => {
      todo.id !== id
    }))
  }

  useEffect(() => {
    setCurrent(data)
  }, [])

  return (
    <>
      <div className="container">
        <h1>Danh sách Công Việc</h1>
        <div className="add-form">
          <input value={newItem}

            onChange={async (e) => {
              setNewItem(e.target.value)
            }
              // console.log(e.target.value)

            }
            type="text" placeholder="Nhập công việc mới..." />

          <button onClick={() => {
            add(newItem)
          }}>Thêm</button>
        </div>
        <ul>
          {currentTodo.map((todo, idx) => {
            return (
              <div key={idx}>
                <li>{todo.id} | {todo.item}
                <button 
                onClick={() => {
                  setSelectedItem(todo.id)
                  remove(todo.id)
                }
                }

                >Xóa</button></li>
              </div>
            )
          })}
          {/* <li>Mua sữa <button>Xóa</button></li>
          <li>Học React <button>Xóa</button></li>
          <li>Chạy bộ <button>Xóa</button></li> */}
        </ul>
      </div>
    </>
  )
}

export default App
