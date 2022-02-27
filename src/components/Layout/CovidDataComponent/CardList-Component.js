import { Card } from "./Card-Component";

export const CardList = (props) => (
  <div className="card-list1">
    {props.countriesData.map((item) => (
      <Card
        key={item.country}
        flag={item.countryInfo.flag}
        country={item.country}
        population={item.population}
        data={item}
      />
    ))}
  </div>
);
