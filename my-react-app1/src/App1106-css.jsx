// 導入外部 CSS 檔案
import './App.css';


// 新增元件建議要寫在外面
function MyComponent() {
  // return 後面只能必須有東西，可用以下方法。
  // 空標籤:Fragment
  // 小括號()
  // 顯示淺色字代表沒有被使用
  return (<>
  </>
  )
}

//每個元件只能回傳一個值。
function App() {
  //不建議元件包上元件，但允許元件中使用元件。

  // 建立變數 const 區塊範圍，常用來宣告不需要改變的變數
  const strName="健仔";

  return (
    <div>
      {/* JSX 中使用 javaScript 變數，前後加大括號{變數名稱} */}
      {/* toUpperCase 變成大寫 */}
      <h1 style={{
            color: 'red',
            backgroundColor: 'yellow',
            width: '300px',
      }}>{strName.toUpperCase()}, 午安</h1> 
      {/* 屬性中使用變數 */}
      <label htmlFor="userName" className='unLineColor'>請輸入姓名：</label>
      {/* placeholer => 提示字 */}
      <input type="text" id="userName"placeholder={strName}/>
      {/* <MyComponent */}
      <MyComponent/>
    </div>
  )
}

//元件名稱 會跟 檔案名稱 相同
export default App
