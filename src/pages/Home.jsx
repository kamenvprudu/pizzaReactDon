import React, { useState } from "react";
import axios from "axios";

import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import { AppContext } from "../App";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { useRef } from "react";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch=useRef(false)
  const isMounted=useRef(false)

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
    
  };

  
  const onClickCategory = (id) => {
  
    dispatch(setCategoryId(id));
  };
 

  const { searchValue } = React.useContext(AppContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


const fetchPizzas= ()=>{
  setIsLoading(true);
const category = categoryId > 0 ? `category=${categoryId}` : "";
const sortReplace = sort.sortProperty.replace("-", "");
const sortIncludes = sort.sortProperty.includes("-") ? "asc" : "desc";

const searchPizzas = searchValue ? `&search=${searchValue}` : "";

axios
  .get(
    `https://63a82e917989ad3286fbb13c.mockapi.io/items?page=${currentPage}${category}&sortBy=${sortReplace}&order=${sortIncludes}${searchPizzas}`
  )
  .then((res) => {
    setItems(res.data);
    setIsLoading(false);
  });
window.scroll(0, 0);

}


React.useEffect(()=>{
  if(isMounted.current){
   const queryString =qs.stringify({
     sortProperty:sort.sortProperty,
     categoryId,
     currentPage,
 
   });
  
   navigate(`? ${queryString}`)
  }
  isMounted.current=true;
   },[categoryId,sort.sortProperty, currentPage])


  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
console.log(params)
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current=true
    }
  }, []);

  React.useEffect(() => {
   if(!isSearch.current){
    fetchPizzas()
   }
   isSearch.current=false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);



  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(9)].map((_, index) => (
    <Skeleton key={index} />
  ));
 
  return (
    
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
