// CONFIGURATION VALUES
const bgColors = {
  none:"none",
  white:"white",
  red: "red",
  blue: "blue",
  purple: "purple",
  green: "green",
  yellow: "yellow",
  grey: "grey",
  black: "black",
  lime: "lime",
  skyblue: "skyblue",
  violet:"violet",
  pink:"pink"
};
const gradients = {
  "red":"red",
  "blue":"blue",
  "purple":"purple",
  "pink":"pink",
  "green":"green",
  "sublime":"sublime",
  "rainbow":"rainbow",
  "purplepink":"purplepink",
  "lightblue":"lightblue",
  "darkblue":"darkblue",
  "lightpurple":"lightpurple",
}
const sizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl"
};
const paddings = {
  5: "5",
  10: "10",
  15: "15",
  20: "20",
  25: "25",
  30: "30",
  35: "35",
  40: "40",
  50: "50",
  60: "60",
  70: "70",
  80: "80",
  90: "90",
  100: "100",
  150: "150",
  200: "200"
};

const bRadius = {
  0:0,
  1:1,
  2:2,
  3:3,
  4:4,
  5:5,
  6:6,
  7:7,
  8:8,
  9:9,
  10:10,
  15:15,
  20:20,
  30:30,
  40:40,
  50:50,
  100:100,
  full:"full"
}

// COMPONENTS
export const Button = ({
  color = "blue",
  gradient="",
  size = "sm",
  paddingY = 10,
  borderRadius=0,
  outline="none",
  textColor="black",
  text = "Default",
  onClick
}) => {
  return (
    <button
      className={`btn 
       btn-${gradient === "" ? bgColors[color] : gradients[gradient]}
       text-${bgColors[textColor]}
       btn-${sizes[size]} 
       gradient-${gradients[gradient]}
       py-${paddings[paddingY]}
       border-radius-${bRadius[borderRadius]}
       btn-outline-${bgColors[outline]}`}
       onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonBordered = ({
  color = "blue",
  size = "sm",
  paddingY = 10,
  borderRadius=0,
  text = "Default"
}) => {
  return (
    <button
      className={`btn 
      btn-border-${bgColors[color]}
       btn-${sizes[size]} 
       py-${paddings[paddingY]}
       border-radius-${bRadius[borderRadius]}`}
    >
      {text}
    </button>
  );
};
