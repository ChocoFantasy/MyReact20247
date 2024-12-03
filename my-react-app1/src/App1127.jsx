import { useState } from "react";

function App() {
  // 使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");

  // 縣市名
  const [selCity, setselCity] = useState("");
  var city = ["台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市"];

  // 閱讀確認
  const [check,setCheck]=useState(false);

  // 複選：多個核取方塊
  const [chkList,setChkList]=useState([]);

  // 建立函式處理被勾選的項目
  const handleChkList =(e) => {
    // console.log(e.target.value);
    //  使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
    //setChkList([...chkList,e.target.value]);

    if (e.target.checked) {
      setChkList([...chkList,e.target.value]);
    }else{
      //否 => 從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter(()=>{

      }
    }
  }
  // 程式語法
  var pl = ["HTML", "CSS", "JS", "React"];

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱</label>
      <input
        type="text"
        id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />
      {inputUserName}
      <br />
      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select
        name="city"
        id="city"
        value={selCity}
        onChange={(e) => {
          setselCity(e.target.value);
        }}
      >
        {/* 讀取陣列寫法 JS */}
        <option value="" disabled>請選擇</option>
        {city.map((city) => {
          return (
            <option value={city} key={city}>{city}</option>
          );
        })}
      </select>{selCity}
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label> 
      <input type="checkbox" id="isCheck" 
        value={check} 
        onClick={(e) => {
          //處理勾選值的變化
          setCheck(e.target.checked);
        }}/>{check.toString()}
        <br/>
      {/* 複選:多個核取方塊 */}

      
      <label htmlFor="chkList1">HTML</label>
      {pl.map((pl) => {
          return (
            <input type="checkbox" id="chList1" name="like" value='HTML' onClick={handleChkList} />
            <label htmlFor="chkList1">HTML</label>
          );
        }
     
    </>
  );
}

export default App;
