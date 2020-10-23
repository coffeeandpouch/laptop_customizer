import React from "react";
import FeatureItem from "./components/FeatureItem/FeatureItem";
import FeatureCategory from "./components/FeatureCategory/FeatureCategory";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default function Features(props) {
  const { USCurrencyFormat, selected, features } = props;

  return Object.keys(features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return <div>{<FeatureCategory />}</div>;
      return <div>{<FeatureItem />}</div>;
    });
  });
}
