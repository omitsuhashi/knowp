import * as React from "react";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface IProps {
  query: {
    imageUri: string;
    alt?: string;
    height?: string;
    title: string;
    subtitle: string;
    content: JSX.Element;
  };
}

const MediaCard: FC<IProps> = (props) => {
  const {
    imageUri,
    alt = "",
    height = "140",
    title,
    subtitle,
    content,
  } = props.query;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height={height} image={imageUri} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>{content}</CardActions>
    </Card>
  );
};

export default MediaCard;
