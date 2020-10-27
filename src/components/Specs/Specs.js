import React from "react";
import "../Parts/Parts";
export default function Specs(props) {
  const featureHash = feature + "-" + idx;
  const itemHash = slugify(JSON.stringify(item));
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === selected[feature].name}
        onChange={(e) => props.updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );
}
