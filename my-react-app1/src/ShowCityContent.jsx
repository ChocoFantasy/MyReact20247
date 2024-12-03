function ShowCityContent() {
  return (
    <>
      {(async () => {
        const data = await axios.get(
          "https://chocofantasy.github.io/MyReact20247/json/F-C0032-001.json"
        );

        //     const { location } = data.data.cwaopendata.dataset;
        //     const options = { hour: 'numeric', minute: 'numeric' }
        //     console.log(data);
        const { location } = data.data.cwaopendata.dataset;
        console.log(location);

        {
          location.map((city) => {
            return <div key={city.locationName}>{city.locationName}</div>;
          });
        }
        // locationName => 縣市名稱
        // elementName => Wx => 天氣概況
        // elementName => PoP => 降雨機率
      })()}
    </>
  );
}
//  元件預設匯入
export default ShowCityContent;
