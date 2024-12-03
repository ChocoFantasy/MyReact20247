// 特色區元件 (渲染內容可用同樣方式寫 CSS 樣式getStyles())
function ShowContent() {
    // 特色區資料
    // 統整法：陣列
    const contentData2 = [
      {
        // 不一定要 id:1，也可以取名叫做 number 只是為了key=這裡取名的id
        id: 1,
        title: "教學影音",
        desc: "誘導影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
      },
      {
        id: 2,
        title: "良性互動",
        desc: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決"
      },
      {
        id: 3,
        title: "趨勢分享",
        desc: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展"
      },
    ]
  
    return (
      <>
        {
          contentData2.map((item) => {
            // 把需要跑的區塊指令放進來
            //  用contentData去跑，每一筆放進item(變數)
            return (<>
              {/* enter會直接出現大括號，需要有key值才能正確呼叫 */}
              <div className="box" key={item.id}>
                <h2><strong>{item.title}</strong></h2>
                <p>{item.desc}</p>
              </div>
            </>)
          })
        }
      </>
    )
  }

  //  元件預設匯入
  export default ShowContent