import { useState } from "react"

function App(){
  //  存放姓名的變數，定義變數name與setName方法
  //  name = 預設值('')，
  const [name,setName]= useState('');
  const [name2,setName2]= useState('');

  function changeName(event){
    setName2(event.target.value);
  }

  return(
    <>
    <h2>設計一個輸入名字的欄位，並且即時顯示出來</h2>
    請輸入姓名1：<input type="text" value={name} onChange={(event) => {
      // event(也可以用 e) 是事件觸發來的參數
      // console.log(event); 先去了解input 文字方塊內容是用哪邊來抓
      setName(event.target.value);
    }}/>{name}
    <br/>
    請輸入姓名2：<input type="text" value={name2} onChange={changeName}/>{name2}

    {/* value這個屬性必須同時包含onchange */}
    {/* onchange 是發生改變時，要觸發的內容 */}
    </>
  )
}

export default App