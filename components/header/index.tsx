import {FC, memo} from "react";

interface Props {
  isLoggedIn: boolean;
}

const _Header: FC<Props> = ({isLoggedIn}) => {
  return (
      <header>header{isLoggedIn}</header>
  );
}

export const Header = memo(_Header);
