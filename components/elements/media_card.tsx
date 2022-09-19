import { FC, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface IMediaCardProps {
  query: {
    imageUri: string;
    alt?: string;
    height?: string;
  };
  children: ReactNode;
}

const MediaCard: FC<IMediaCardProps> = ({ query, children }) => {
  const { imageUri, alt = "", height = "140" } = query;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height={height} image={imageUri} alt={alt} />
      <CardContent>{children}</CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default MediaCard;
