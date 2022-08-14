import {FC, memo} from "react";
import {Button, Typography} from "@mui/material";
import styles from "./header.module.scss";
import {Box} from "@mui/system";
import {Avatar} from "@mui/material"
import {NotificationsOutlined} from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface Props {
  isLoggedIn: boolean;
}

const _AvatarHeader: FC<Props> = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return (
        <>
          <NotificationsOutlined></NotificationsOutlined>
          <Avatar alt={"Osamu"} src={"https://google.com"} ></Avatar>
        </>
    )
  } else {
    return (
        <Button>ログイン</Button>
    )
  }
}

const _Header: FC<Props> = ({isLoggedIn}) => {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"nowrap"}>
      <Typography variant="h4" gutterBottom>Knowp</Typography>
      <div>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} className={styles.accountPart}>
          <SearchOutlinedIcon></SearchOutlinedIcon>
          <_AvatarHeader isLoggedIn={isLoggedIn} />
        </Box>
      </div>
    </Box>
  );
}

const Header = memo(_Header);

export default Header;
