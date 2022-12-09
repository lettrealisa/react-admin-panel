import { useGetPostQuery } from "../api/apiSlice";
import { CircularProgress } from "@mui/material";

export const Pet = ({ pet }) => {
  return (
    <div>
      {pet.id}
      {pet.name}
    </div>
  );
};
