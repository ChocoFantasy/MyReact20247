import { useEffect } from "react";
// import axios from 'axios';
// import { IoUmbrellaOutline } from "react-icons/io5";
import "./App.css";

function App() {
  useEffect(() => {
    async () => {
      const data = await axios.get(
        "https://chocofantasy.github.io/MyReact20247/json/F-C0032-001.json"
      );

      //     const { location } = data.data.cwaopendata.dataset;
      //     const options = { hour: 'numeric', minute: 'numeric' }
      //     console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      console.log(location);

      // locationName => 縣市名稱
      // elementName => Wx => 天氣概況
      // elementName => PoP => 降雨機率
    }
  }, []);

  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* 一列二欄 */}
        <div className="row">
  /* {
           location.map((city)=> {
            return (
              <div key={city.id}>{locationName}</div>
            )
           }) 
     } 

        {rescation.Mao}


          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">{city.locationName}</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 一列三欄 */}
                <div className="row2">
                  {/* 第一欄 */}
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>
                      <IoUmbrellaOutline />
                      10%
                    </p>
                  </div>

                  {/* 第二欄 */}
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>
                      <IoUmbrellaOutline />
                      10%
                    </p>
                  </div>

                  {/* 第三欄 */}
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>
                      <IoUmbrellaOutline />
                      10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">台北市</div>
              {/* 內容 */}
              <div className="card-body">
                {/* 一列三欄 */}
                <div className="row2">
                  {/* 第一欄 */}
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>
                      <IoUmbrellaOutline />
                      10%
                    </p>
                  </div>

                  {/* 第二欄 */}
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>
                      <IoUmbrellaOutline />
                      10%
                    </p>
                  </div>

                  {/* 第三欄 */}
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00 <br />
                      ~ <br />
                      下午6:00 <br />
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>
                      <IoUmbrellaOutline />
                      10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
