import { useState } from "react";

const maxWidths = {
  md: "accordion--md",
  sm: "accordion--sm",
  lg: ""
};
const themes = {
  none:"none",
  dark: "dark-mode",
  red: "red-mode",
  orange: "orange-mode",
  blue: "blue-mode",
  purple: "purple-mode",
  green: "green-mode",
  yellow: "yellow-mode",
  grey: "grey-mode",
  lime: "lime-mode",
  skyblue: "skyblue-mode",
  violet:"violet-mode",
  pink:"pink-mode"
};

export const Accordion = ({
  title = "Title",
  text = "This is text",
  theme = "none",
  width = "sm"
}) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const isAccordionOpen = () => setToggleAccordion(!toggleAccordion);

  return (
    <div className={`accordion ${themes[theme]} ${maxWidths[width]}`}>
      <div className="accordion__header" onClick={isAccordionOpen}>
        <h1 className="accordion__title text-shadow">{title}</h1>
        <button className="accordion__btn">
          {toggleAccordion ? <span>&#8722;</span> : <span>&#43;</span>}
        </button>
      </div>
      <div className={`accordion__text ${toggleAccordion ? "h-full" : ""}`}>
        {text}
      </div>
    </div>
  );
};

export const AccordionWrapper = ({ children,className }) => {
  return <div className={`${className} accordion__wrapper`}>{children}</div>;
};
