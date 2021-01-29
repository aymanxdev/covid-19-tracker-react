import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../assets/subCard.css";

function SubCard({ title, cases, total, active, color, isGreen, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`sub_card ${
        active ? "subcard--selected" : "subcard--notSelected"
      } ${isGreen ? "subcard--isGreen" : "subcard--notSelected"}`}
    >
      <CardContent>
        {/*Title */}
        <Typography color="textSecondary">{title}</Typography>

        {/*Number of Cases */}
        <h2
          className={`card_cases ${isGreen && "card_cases--green"} ${
            color && "card_cases--green"
          }`}
        >
          {cases}
        </h2>

        {/*Total */}
        <Typography className="card_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SubCard;
