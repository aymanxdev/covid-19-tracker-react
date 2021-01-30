import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "../assets/subCard.css";

function SubCard({
  title,
  cases,
  total,
  active,
  color,
  darkMode,
  isGreen,
  isGray,
  dText,
  ...props
}) {
  console.log(title, active);

  return (
    <Card
      onClick={props.onClick}
      className={`sub_card ${
        active ? "subcard--selected" : "subcard--notSelected"
      } ${isGreen ? "subcard--isGreen" : "subcard--notSelected"} ${
        darkMode && "dark-mode "
      } ${isGray ? "subcard--isGray" : "subcard--notSelected"}`}
    >
      <CardContent>
        {/*Title */}
        <Typography
          className={`card_total ${darkMode && "dark-mode--subtext"}`}
          color="textSecondary"
        >
          {title}
        </Typography>

        {/*Number of Cases */}
        <h2
          className={`card_cases ${isGreen && "card_cases--green"} ${
            color && "card_cases--green"
          } ${isGray && "subCard--selected-text"} ${
            dText && "subCard--selected-text"
          } `}
        >
          {cases}
        </h2>

        {/*Total */}
        <Typography
          className={`card_total ${darkMode && "dark-mode--subtext"}`}
          color="textSecondary"
        >
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SubCard;
