export interface UserInterface {
  id: number;
  username: string;
  email: string;
  password: string
};

export const userData: UserInterface[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@dev.com",
    password: "admin"
  },
  {
    id: 2,
    username: "user",
    email: "user@dev.com",
    password: "user"
  },
];
