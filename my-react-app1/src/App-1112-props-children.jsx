//  傳遞組件
//  把組件放到另一個組件的內容裡面
//  這種寫法在 React 中，叫做組合 (composition)
//  此方法在不影響組件功能的基礎上，另外再給組件加入額外的功能。

//  建立一個新的組件
function SecondComponent(){
  return <h1>我是 SecondComponent 組件</h1>
}

// 子組件
function MyComponent (){
  return <><SecondComponent/></>
}
// function MyComponent({children}){
//   // return <>{childern}</> 請注意 childern 外面是大括號，{childern}這個指令會呼叫他的子組件也就是 SecondComponent
//   return <>
//     我是MyComponent組件
//     {children}
//   </>
// }

// 父組件
function App(){
  return(
    <>
      {/* <MyComponent children={<SecondComponent/>}/> */}

      {/* 先讓爸爸可以傳子組件 */}
      <MyComponent>
        {/* 因為 children 是 react 內建的屬性，所以傳送組件時，可以不用寫 children 屬性 */}
        {/* <SecondComponent/> */}
      </MyComponent>
    </>
  )
}

export default App