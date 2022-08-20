import { GetStaticProps } from "next";
import React, { FC } from "react";

export interface HomeProps {}

const Home: FC<HomeProps> = ({ ...rest }) => {
  console.log(rest);

  return (
    <>
      <h1>Heckerspace</h1>
    </>
  );
};
export default Home;

export const getFetchParams = (query: string) => {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const fetchParams = getFetchParams(`
  {
    articles {
      data {
        attributes {
          slug
        }
      }
    }
  }
  `);

  const res = await fetch(`${process.env.STRAPIBASEURL}/graphql`, fetchParams);
  const { data } = await res.json();

  if (!data) return { notFound: true };

  return {
    props: { data: data },
    revalidate: 10,
  };
};
