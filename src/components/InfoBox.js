import React from "react";
//import "../assets/infoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="sub_card">
        <CardContent>
          {/*Title */}
          <Typography color="primary">{title}</Typography>

          {/*Number of Cases */}
          <h2 className="card_cases">{cases}</h2>

          {/*Total */}
          <Typography className="card_total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
