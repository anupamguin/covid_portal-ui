import NumberFormat from "react-number-format";

export const SecondCard = (props) => (
  <div className="second-card">
    <h2 className="text-danger">COVID DEATHS</h2>
    <div className="box">
      <img src="images/CardImg1.jpg" alt="Death" />
      <div className="box-content">
        <h3 className="text-info">Deaths</h3>
        <p>{props.updateMSG}</p>
        <NumberFormat
          thousandsGroupStyle="thousand"
          value={props.data.deaths}
          displayType={"text"}
          thousandSeparator={true}
          style={{ fontSize: "30px" }}
        />
      </div>
    </div>
  </div>
);
