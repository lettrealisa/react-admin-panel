import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useGetPetsQuery } from "../api/apiSlice";
import { Pet } from "./Pet";

export const PetsList = () => {
  const {
    data: pets,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPetsQuery();

  let content;

  if (isLoading) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = pets.map((pet) => <Pet pet={pet} />);
  } else if (isError) {
    content = <div>{error.data}</div>;
  }

  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <section className="pets-list">
      <h2>Pets</h2>
      {content}
    </section>
  );
};
