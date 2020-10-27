import React from "react";

const FeatureCategory = () => {
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
  </div>;
};

export default FeatureCategory;
