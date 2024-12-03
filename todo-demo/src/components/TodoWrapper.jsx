// 元件檔案名稱 跟 function 名稱會相同

import { useState } from "react";
import CreateForm from "./CreateForm"
import Todo from "./Todo";


function TodoWrapper() {

    // 初始值 todoList 使用者輸入值
    // setTodoList 是改變後的值
    // 為陣列需要 key 屬性，所以要改成陣列物件，加上 id
    //  const [todoList, setTodoList] = useState([
    //      { content: 'List1', id: Math.random() , isCompleted: false },
    //      { content: 'List2', id: Math.random() , isCompleted: false }
    //  ]); // 儲存待辦事項的列表 

    //  因為要判定todo是否被點擊，所以要增加一個標記屬性 => isCompleted 
    const [todos, setTodos] = useState([
        { content: 'List1', id: Math.random(), isCompleted: false, isEdit: false },
        { content: 'List2', id: Math.random(), isCompleted: false, isEdit: false },
    ])

    // 建立加入新的todo內容
    // 1. 使用...其餘運算子來保留原陣列內容
    // 2. 再加入新的物件內容 

    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false, isEdit: false }])
    }

    //  建立刪除 Todo 函式 (刪除跟修改都要有指定的 ID)，並傳給 Todo 元件使用

    const deleteTodo = (id) => {
        // 使用filter 去遊歷找到特別的值並去除被刪除的todo。
        setTodos((todos.filter((todo) => {
            // 檢查目前找到的 id 是否為準備要被刪除的 id
            // 如果不是，則保留 
            return todo.id !== id
        })))
    }

    // 建立雙向切換「完成與取消」的函式
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            // 檢查被點擊的id是否跟目前陣列中的id一樣
            // Yes => 1.取出todo 2. 將isCompleted 屬性值反向處理(true->false /false)/
            // No => todo 不變
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }
    //   判斷是否修改
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? { ...todo, isEdit: !todo.isEdit }
            : todo
            // 可以改成 IF ELSE
        }))
    }

    // 按下完成修改，保存下來
    // 1.  異動後的content(使用者輸入)為新的內容
    // 2.  isEdit 改回 false (改回非修改狀態)

    // (id=todo資料的id ,新內容)
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo)=>{
            return todo.id ===id
            ? {...todo,content:newContent,isEdit:false}
            :todo
        }))
    }
    return (
        <div className="wrapper">
            <h3>待辦事項</h3>
            <CreateForm addTodo={addTodo} />
            {/* 放入新增的待辦事項 */}
            {
                todos.map((todo) => {
                    // 傳送 todo和key屬性，再傳送 deleteTodo 屬性
                    //   deleteTodo
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />
                })
            }
        </div>
    )
}

export default TodoWrapper