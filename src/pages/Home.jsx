import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { PizzaBlock, Skeleton } from "../components/PizzaBlock";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch("https://626d16545267c14d5677d9c2.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json, "data");
        setData(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : data.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </React.Fragment>
  );
};
