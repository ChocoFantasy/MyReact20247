import { useState } from "react"

function CreateForm({addTodo}) {

    // 重新寫一段程式碼，告訴 React 我已經改變框內的值。
    // 去取得input內容的變數，建立存輸入框的值
    const [content, setContent] = useState(''); // 初始值 空字串'' //[前面是初始值,這個存放改變後的值] //需要搭配 value 和 onChange 在html 去呼叫
    
    // 處理輸入框內容改變，可寫在外面。記得 onChange={InputChange} 要去呼叫外部。
    // const InputChange = (e) => {
    //     setInputValue(e.target.value);
    // };

    // 當按下按鈕後，增加 todo 的內容
    const handleSubmit=(e) => {
        //  取消事件預設行為
        e.preventDefault();
        //  增加todo內容
        addTodo(content);
        // 清除 input 內容
        setContent('');
    }

    return (
        <>
            {/* <form action="這裡可以跟資料庫做結合，動態程式語言"  */}
            <form className="create-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="輸入待辦事項"
                    value={content}
                    // onChange 去抓改變後的值，存放進去。不然input-text會被唯獨無法打字
                    // 處理輸入框內容改變，也可宣告 const 寫在外面
                    onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                <button type="submit">加入</button> 
            </form>
            
        </>
    )
}

export default CreateForm