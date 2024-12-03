import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";


// 解構 props 的屬性名稱，用{屬性名稱}包起來。
// 接收todo , deleteTodo 屬性
function Todo({ todo, deleteTodo, toggleCompleted,toggleIsEdit,editTodo }) {
    return (
        todo.isEdit
            ? <EditForm todo={todo} editTodo={editTodo}/>
            :
            // 新增一個 completed 類別規則
            // 使用反引號+三元運算子檢查 isCompleted
            // 如果為真 => 套用 completed 類別規則
            // 如果為否 => 取消 completed 類別規則 => ''
            <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* <p>上課中</p> */}
                {/* <p>{todo}</p> */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }} />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>

            </div>

    )
}

export default Todo