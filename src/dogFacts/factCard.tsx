import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

type Props = {
  fact: string;
};

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

const FactCard = ({ fact }: Props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image="https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg"
        title="Member Avatar"
      />
      <CardContent className="CardContent">
        <Typography>{fact}</Typography>
      </CardContent>
    </Card>
  );
};

export default FactCard;
