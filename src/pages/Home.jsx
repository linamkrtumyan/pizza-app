import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { PizzaBlock, Skeleton } from "../components/PizzaBlock";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const fetchData = () => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    // fetch("https://626d16545267c14d5677d9c2.mockapi.io/items")
    fetch(
      `https://63da6b6019fffcd620c8ef15.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
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
  }, [categoryId, sortType]);

  return (
    <React.Fragment>
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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
