// 匯入 React => 背後處理JSX ，轉換成瀏覽器理解的JavaScript
// { useState } =>從 React 函式庫解構引入 useState 這個 Hook
// 從 react 函式庫中匯入 React，並解構引入 useState，使用它管理元件的狀態。

import { useState } from "react"

function App() {
  // React 宣告 coust 代表常數變數(不能變動的數) 
  // const num = 0;  const 會發生錯誤必須使用 useState 方法，才會自動重新渲染元件數值。
  //  let num = 0;
  //  不然(num)不會被觸發重新渲染

  //  定義 useState (HOOK 就是類似於 excel 的)
  //  宣告一個狀態變數 num，預設值為 0
  const [num, setNum] = useState(0);

  function addfive() {
    //  修改 num +5
    setNum(num +　5);
  }

  //let num = 0;
  return (
    <>
      <h1>React狀態-useState方法</h1>
      <h2>目前值：{num}</h2>

      {/* 事件綁定＝使用箭頭韓式 */}
      <button onClick={() => {
        // num++
        // num=num+1
        setNum(num +　1);
      }}>+1</button>

      {/* 事件綁定：呼叫函式 */}
      <button onClick={addfive}>+5</button>
    </>
  )
}

export default App