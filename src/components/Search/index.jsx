import React from "react";
import { AppContext } from "../../App";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";






const Search = () => {
  const [value,setValue]=React.useState('')
  const {setSearchValue}=React.useContext(AppContext)
  const inputRef=React.useRef();



  const onClickInput=()=>{
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
   
  }


const updateSearchValue=React.useCallback(
  debounce((stre)=>{
    setSearchValue(stre)
  
  },400),[],)


const onChangeInput=(event)=>{
  setValue(event.target.value)
  updateSearchValue(event.target.value)
}





  return (
    <div className={styles.root}>
      <svg
      className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input} placeholder="Поиск пиццы" />
      {value &&(
        <svg onClick={onClickInput} className={styles.iconClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title/><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" fill="#464646"/></svg>
      )}
    </div>
  );
};
export default Search;
