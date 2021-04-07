import { CHAT, LOGIN, PROFILE } from "./routeConsts";

type headerDataType = {
  name: string;
  path: string;
  id: number;
};

export const headerData: Array<headerDataType> = [
  {
    name: "Chat",
    path: CHAT,
    id: 4,
  },
  {
    name: "Profile",
    path: PROFILE,
    id: 2,
  },

  {
    name: "Logout",
    path: LOGIN,
    id: 3,
  },
  {
    name: "Login",
    path: LOGIN,
    id: 1,
  },
];
