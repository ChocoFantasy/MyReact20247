function App() {
  // 建立函式方法1
  function sayHi() {
    alert('Hello3')
  }
  // 建立函式方法2
  const sayHi2 = () => {
    alert('Hello4')
  }

  return (
    <div>
      {/* 事件處理1：在 HTML 標籤上榜定事件 */}
      <button onClick={
        // 匿名函式寫法
        function () { alert('Hello1') }}> 我是按鈕 </button>

      <button onClick={
        // 箭頭函式
        () => { alert('Hello2') }}> 打招呼 </button>

      {/* 事件處理2:呼叫函式 */}
      {/* 等待被呼叫的函式，函式名稱後面不可以加上()，sayHi()這樣不行，否則會被直接執行 */}
      <button onClick={sayHi}>打招呼3</button>
      <button onClick={sayHi2}>打招呼4</button>
      <br />
    </div>
  )
}

//元件名稱 會跟 檔案名稱 相同
export default App
