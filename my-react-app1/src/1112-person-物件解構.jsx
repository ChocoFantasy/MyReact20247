

function App() {
  //  建立物件變數
  const person = {
      name: "同學1",
      age: 10
  }

  /* 物件解構寫法，直接解構 person，不能拿{}框住會只作用在裡面 */
  const { name, age } = person;


  return (
    <>
      {/* 一般寫法 */}
      {/* JSX 要寫 JS 記得用大括號 */}
      <div>姓名：{person.name}</div>
      <div>年齡：{person.age}歲</div>
      <hr />
      <div>{`姓名：${person.name}`}</div>
      <div>{`年齡：${person.age}歲`}</div>
      <hr />
      {/* 物件解構寫法 */}
      <div>解構後的姓名：{name}</div>
      <div>解構後的年齡：{age}歲</div>

    </>
  )
}

export default App