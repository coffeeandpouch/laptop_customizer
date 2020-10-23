import React from "react";
import SummaryItem from "./components/SummaryItem/SUmmaryItem";
export default function Summary(props) {
  const { USCurrencyFormat, selected } = props;

  return Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = selected[feature];

    return <div>{<SummaryItem />}</div>;
  });
}
