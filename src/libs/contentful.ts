import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "gambar",
    });

    const teams = response.items.map((team: any) => {
      return {
        images: team.fields.images,
      };
    });
    return teams[0];
  } catch (error) {
    console.log(error);
  }
};
