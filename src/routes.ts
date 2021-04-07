import { FC } from "react";
import { CHAT, LOGIN, PROFILE } from "./Const/routeConsts";
import Login from "./component/Login/Login";
import Profile from "./component/Profile/Profile";
import Chat from "./component/Chat/Chat";

type routesType = {
  name: string;
  path: string;
  Component: FC;
  id: number;
};

export const publicRoutes: Array<routesType> = [
  {
    name: "Login",
    path: LOGIN,
    Component: Login,
    id: 1,
  },
];
export const privateRoutes: Array<routesType> = [
  {
    name: "Profile",
    path: PROFILE,
    Component: Profile,
    id: 2,
  },
  {
    name: "Chat",
    path: CHAT,
    Component: Chat,
    id: 3,
  },
];
