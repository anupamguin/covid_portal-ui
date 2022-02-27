export const Card = (props) => (
  <div className="card-container1">
    <img alt="Data" src={props.flag} />
    <h2> {props.country} </h2>
    <p>Cases : {props.data.cases}</p>
    <p>Deaths: {props.data.deaths}</p>
    <p>Recovered : {props.data.recovered}</p>
    <p>Today Cases: {props.data.todayCases}</p>
    <p>Today Deaths : {props.data.todayDeaths}</p>
    <p>Critical :{props.data.critical}</p>
    <p>Population: {props.population} </p>
  </div>
);
