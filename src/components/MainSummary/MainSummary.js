import React from "react";
import Option from "../Option/Option";
import Total from "../Total/Total";

export default function MainSummary(props) {
  const { USCurrencyFormat, selected, total } = props;

  const summaryHTML = Object.keys(selected).map((feature, idx) => (
    <Option {...props} feature={feature} idx={idx} />
  ));

  return (
    <>
      {summaryHTML}
      <Total USCurrencyFormat={USCurrencyFormat} total={total} />
    </>
  );
}
