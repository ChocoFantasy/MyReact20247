import { useState } from "react"

function EditForm({ todo, editTodo }) {

    // 重新寫一段程式碼，告訴 React 我已經改變框內的值。
    // 去取得input內容的變數，建立存輸入框的值
    const [content, setContent] = useState(todo.content); // 初始值 空字串'' //[前面是初始值,這個存放改變後的值] //需要搭配 value 和 onChange 在html 去呼叫

    // 處理輸入框內容改變，可寫在外面。記得 onChange={InputChange} 要去呼叫外部。
    // const InputChange = (e) => {
    //     setInputValue(e.target.value);
    // };

    // 當按下按鈕後，
    const handleSubmit = (e) => {
        //  取消事件預設行為，重新整理

        e.preventDefault();
        
        // 保存送出的結果
        editTodo(todo.id, content)
    }

    return (
        <>
            {/* <form action="這裡可以跟資料庫做結合，動態程式語言"  */}
            <form className="create-form" onSubmit={handleSubmit}>
                <input type="text"
                    value={content}
                    // onChange 去抓改變後的值，存放進去。不然input-text會被唯獨無法打字
                    // 處理輸入框內容改變，也可宣告 const 寫在外面
                    onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                <button type="submit">完成</button>
            </form>

        </>
    )
}


export default EditForm
