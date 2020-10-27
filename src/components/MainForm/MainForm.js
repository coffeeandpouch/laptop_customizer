import React from "react";

import Specs from "../Specs/Specs";

export default function MainForm(props) {
  const { features } = props;

  return Object.keys(features).map((feature, idx) => (
    <Specs {...props} feature={feature} idx={idx} />
  ));
}
