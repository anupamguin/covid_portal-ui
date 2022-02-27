import NumberFormat from "react-number-format";

export const FirstCard = (props) => (
  <div className="covid-world">
    <h1 className="text-info">COVID CASES</h1>
    <div className="box">
      <div className="box-img">
        <img src="images/CardImg.png" alt="Img" />
      </div>
      <div className="box-content">
        <h1 className="text-info">Case</h1>
        <p>{props.updateMSG}</p>
        <NumberFormat
          thousandsGroupStyle="lakhs"
          value={props.data.cases}
          displayType={"text"}
          thousandSeparator={true}
          style={{ fontSize: "30px" }}
        />
      </div>
    </div>
  </div>
);
