// 推薦課程元件 (渲染內容)
function ShowContentClass() {
    // 先放入推薦課程資料
  
    const contentClassData = [
      {
        id: 1,
        imURL: "images/unity.jpg",
        title: "Unity 5",
        desc: "最新的Unity公開課程，讓你一步一步做出自己的心中理想的遊戲",
        teacher: "講師：xxx",
        hour: "影音課程時數：4小時",
        price: "原價 NT$ 1600",
        priceSale: "NT$ 1200",
        buttonText: "付款上課去",
      },
      {
        id: 2,
        imURL: "images/gamesalad.jpg",
        title: "GameSalad 2D遊戲製作",
        desc: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
        teacher: "講師：xxx",
        hour: "影音課程時數：8小時",
        price: "原價 NT$ 3200",
        priceSale: "NT$ 1600",
        buttonText: "付款上課去",
      },
      {
        id: 3,
        imURL: "images/gwd.jpg",
        title: "Google Web Design",
        desc: "用於建立 HTML5 廣告動畫，透過時間軸將各種物件和事件以動畫方式呈現",
        teacher: "講師：xxx",
        hour: "影音課程時數：8小時",
        price: "原價 NT$ 3200",
        priceSale: "NT$ 1600",
        buttonText: "付款上課去",
      },
    ]
  
    return (<>
      {
        contentClassData.map((item) => {
          return (<>
            <div className="box2" key={item.id}>
              {/* <p><H系列><button> 本身都會佔下一行 */}
              <p><img src={item.imURL} alt="" /></p>
              <h3>{item.title}</h3>
              <p className="b-text">{item.desc}</p>
              <p>{item.teacher}</p>
              <p>{item.hour}</p>
              <p><span className="span1">{item.price}</span><span className="span2">{item.priceSale}</span></p>
              <button>{item.buttonText}</button>
            </div>
            {/* 如果要放兩個div以上，絕對要記得用空標籤包住<></> */}
          </>)
        }
  
        )
  
      }
    </>
    )
  }

// 當元件需要輸出被別人使用要寫 元件名稱
  export default ShowContentClass