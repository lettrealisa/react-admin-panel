import { CircularProgress } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useGetFoodsQuery } from "../api/apiSlice";
import { FoodItem } from "./FoodItem";

export const FoodsList = () => {
  const groupItemsByDate = (items, res) => {
    items.forEach((item) => {
      const date = item.date.split("T")[0];
      if (res[date]) res[date].push(item);
      else res[date] = [item];
    });

    return res;
  };

  const {
    data: foods = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFoodsQuery();

  const groupedItems = useMemo(() => {
    const groupedItems = foods.slice();
    
  });

  let content;

  if (isLoading) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = foods.map((food) => <FoodItem food={food} />);
  } else if (isError) {
    content = <div>{error.data}</div>;
  }

  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <section className="foods-list">
      <h2>Foods</h2>
      {content}
    </section>
  );
};
