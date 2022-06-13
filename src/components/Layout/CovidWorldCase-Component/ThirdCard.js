import NumberFormat from "react-number-format";

export const ThirdCard = (props) => (
  <div className="third-card">
    <h2 className="text-success">COVID RECOVERED</h2>
    <div className="box">
      <img src="images/recover.jpg" alt="anupam" />
      <div className="content">
        <h3>Recovered</h3>
        <p>{props.updateMSG}</p>
        <NumberFormat
          thousandsGroupStyle="thousand"
          value={props.data.recovered}
          displayType={"text"}
          thousandSeparator={true}
          style={{ fontSize: "30px" }}
        />
      </div>
    </div>
  </div>
);
