import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.GRAPHCMS_URL || "", {
  headers: {
    Authorization: process.env.GRAPHCMS_ACCESS_TOKEN || "",
  },
});
