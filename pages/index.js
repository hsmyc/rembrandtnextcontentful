import { createClient } from "contentful";
import Link from "next/link";
import RecipeCard from "../components/RecipeCard";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "recipe" }); // if we will add new content type we have to change this part

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
};

export default function Recipes({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe}></RecipeCard>
      ))}
      <style jsx>{`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 60px;
      `}</style>
    </div>
  );
}
