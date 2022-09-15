import { NextPage } from "next";
import MediaCard from "../../components/elements/media_card";
import { FC } from "react";
import Typography from "@mui/material/Typography";

interface IPersonCardProps {
  query: {
    id: number;
    title: string;
    subtitle: string;
  };
}

const Person: NextPage = () => {
  const PersonCard: FC<IPersonCardProps> = ({ query }) => {
    const { title, subtitle, id } = query;
    return (
      <MediaCard
        query={{
          imageUri:
            "https://ikarush.com/wp-content/uploads/2019/02/pose_syourai_man.png",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title} - {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </MediaCard>
    );
  };

  return (
    <>
      <PersonCard query={{ title: "a", subtitle: "b", id: 3 }}></PersonCard>
      <PersonCard query={{ title: "a", subtitle: "b", id: 3 }}></PersonCard>
    </>
  );
};

export default Person;
