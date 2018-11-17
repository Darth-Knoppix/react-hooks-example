import React, { useState } from "react";

export default function Toggle({ Element, children }) {
  const [isOn, toggleOn] = useState(false);
  const toggleStates = React.Children.toArray(children);

  return (
    <Element isOn={isOn} onClick={() => toggleOn(!isOn)}>
      {toggleStates[isOn ? 0 : 1]}
    </Element>
  );
}
