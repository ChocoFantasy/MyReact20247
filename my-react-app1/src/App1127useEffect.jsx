import { useState } from "react";
import { useEffect } from "react";

function App() {
    count [count,setCount] =useState(0);

 useEffect (()=>{

    console.log(1);
  // 每一次渲染後執行
  //useEffect(()=>{});
    // 取得段落，再變色
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener("click", () => {
    let p1b = document.getElementById('p1');
      p1b.style.color = "red";
    });
  });
  // 開啟檔案時，只執行一次
   useEffect(()=>{

   },[]);
  // 當陣列中的依賴條件改變時，就會執行
  //useEffect(()=>{},[count]);

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <p id="p1">我是段落</p>
      {/* 綁定事件 */}
      <button
        onClick={() => {
          let p1a = document.getElementById("p1");
          p1a.style.color = "blue";
        }}
      >
        變藍色
      </button>

      {/* 監聽事件 */}
      <button id="btn2">變紅色</button>
      <button id="btn3" onClick={CHANGE}>變紅色</button>
    </>
  );
}

export default App;
