import React, { FC } from "react";

export interface HomeProps {}

const Home: FC<HomeProps> = ({ ...rest }) => {
  return <h1>Heckerspace</h1>;
};
export default Home;
