import React from "react";

export default function Parts(props) {
  const options = features[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
}
