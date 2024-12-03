//  陣列解構

//  建立陣列
const arr1 = ['p1', 'p2', 'p3']

//  陣列解構
const [pNo1, pNo2, pNo3] = arr1;

function App() {
  return (
    <>
    {/* 一般寫法 */}
    <p>陣列值1:{arr1[0]}</p>
    <h1/>
    {/* 解構寫法 */}
    <div>陣列值2:{pNo2}</div>
    <div>陣列值3:{pNo3}</div>
    </>
  )
}

export default App