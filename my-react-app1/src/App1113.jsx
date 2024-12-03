//  課程練習

// 載入 app.css
import './App.css';

//  可以從 public 直接抓圖片，檔案請放 images
import banner from '../public/images/banner.jpg'

//特色區元件 (導入jsx 元件檔案)
import ShowContent from './ShowContent.jsx'

//推薦課程元件 (導入jsx 元件檔案)
import ShowContentClass from './ShowContentClass.jsx'

// 何時需要獨立元件呢? 1.重工部分 2.較複雜部分 (檔案名稱每個字首大寫，不然大部分都可以在原本檔案做好)

// 輸出區
function App() {

  // 用於統整(特色留言區)的資料，統整法:物件綁物件
  // const contentData = {
  //   data1 : {
  //     title: "教學影音",
  //     desc: "誘導影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
  //   },
  //   data2 : {
  //     title: "良性互動",
  //     desc: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決"
  //   },
  //   data3 : {
  //     title: "趨勢分享",
  //     desc: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展"
  //   },
  // }


  // 呼叫 getStyles() 取得樣式物件
  // const styles = getStyles();

  //  return 之內不能使用 for 迴圈，return 之前可使用任何 js 語法，之內需要用大括號包住只能使用 map。

  // const arr = [1, 2, 3]; // 外面宣告陣列
  //  做渲染元件用
  // function ShowContent(props) {
  //   console.log(props);

  //   return (<>
  //     {
  //       props.((item) => {
  //         <div className="box">
  //           <h2><strong>{item.data1.title}</strong></h2>
  //           <p>{item.data1.desc}</p>
  //         </div>
  //       })
  //     }
  //   </>
  //   )
  // }

  return (
    <>
      {/* wrap 整個外框名稱 */}
      <div className="wrap">
        {/* 頁首廣告曲 */}
        {/* 一個 header 外框 + 1 個圖片區塊 */}
        <header>
          {/* 導入圖片後使用 */}
          {/* <img src="../public/images/banner.jpg" alt="" */}
          <img src={banner} alt="網站橫幅" />
          {/* 也可以直接使用 public 下的圖片，可以直接寫圖片所在位置的資料夾名稱+圖片名稱 */}
          {/* <img src="images/banner.jpg" alt="" />*/}
        </header>

        {/* 特色區 */}
        {/* 一個外框 + 3 個 box 區塊 + box裡面內含(<h2>大標題區 + <p> 文字說明區 ) */}
        <div className="content">
          {/* 呼叫外部資料元件 */}
          <ShowContent />
          {/* <ShowContent arrData=[contentData2]/>  如果資料不在ShowContent 需要給路徑，arrData是fc()括號內的命名變數，contentData2 則是fc名稱*/}
          {/* 迴圈寫法 */}
          {
            // // jSX 中使用迴圈，要用 map /filter。不可以用for/while迴圈。
            // // 用 map 前提一定要是陣列
            // contentData2.map((item) => {
            //   // 把需要跑的區塊指令放進來
            //   //  用contentData去跑，每一筆放進item(變數)
            //   return (
            //     <>
            //       {/* enter會直接出現大括號，需要有key值才能正確呼叫 */}
            //       <div className="box" key={item.id}>
            //         <h2><strong>{item.title}</strong></h2>
            //         <p>{item.desc}</p>
            //       </div>
            //     </>
            //   )
            // })
          }
          {/* 普通寫法 */}
          {/* box區塊1 */}
          {/* <div className="box">
            <h2><strong>{contentData.data1.title}</strong></h2>
            <p>{contentData.data1.desc}</p>
          </div> */}
          {/* box區塊2 */}
          {/* <div className="box">
            <h2><strong>{contentData.data2.title}</strong></h2>
            <p>{contentData.data2.desc}</p>
          </div> */}
          {/* box區塊3 */}
          {/* <div className="box">
            <h2><strong>{contentData.data3.title}</strong></h2>
            <p>{contentData.data3.desc}</p>
          </div> */}
        </div>

        {/* 主標題slogan */}
        <div className="slogan">
          <h3>讓學習成為一種習慣</h3>
        </div>

        {/* 推薦課程 */}
        <div className="content2">
          {/* 大標題(置中) + 3 個 box + box 內容含(<img> + 標題<h2> + 說明<p> + 講師<p> + 時數<p> + 畫刪除線價格<p> + 紅標價格<p> + <buttton> ) */}
          <h1>推薦課程</h1>
          <div className="contentClass">
            {/* 課程1 ~3 */}
            <ShowContentClass />
          </div>
        </div>

        {/* 頁尾 */}
        <footer>
          <p>&copy;學生：盧千玉</p>
        </footer>

      </div>
    </>
  )

}

export default App  