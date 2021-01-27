import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Navigation ({setPosts}) {
   const [inputValue, setInputValue] = React.useState("");

   const handeChangeInput = (e) => {
      setInputValue(e.target.value)
   }

   const filterAxios = () => {
      if (inputValue !== ""){
         axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts?title=${inputValue.trim("")}`)
         .then(({data}) => setPosts(data))
      }else{
         axios.get("https://5c3755177820ff0014d92711.mockapi.io/posts")
         .then(({data}) => setPosts(data))
      }
   }

   const filterAxiosEnter = (e) => {
      if (e.key === "Enter") {
         filterAxios();
      }
   }

   React.useEffect(() => {
      filterAxios();
      //eslint-disable-next-line
   }, [inputValue]);
   

   return(
      <div className="navigation">
         <Link to="/" className="navigation__logo"onClick={() => {setInputValue("")}}>Мой блог</Link>
         <ul className="navigation__list">
            <li className="navigation__item"><Link to="/">Главная</Link></li>
            <li className="navigation__item"><Link to="/about">Эбаут ми</Link></li>
         </ul>
         <div className="navigation__search">
            <input type="text" className="navigation__input" placeholder="Поиск статьи..." value={inputValue}
                     onChange={handeChangeInput} onKeyUp={filterAxiosEnter}/>
            <button onClick={filterAxios} className="navigation__find">Найти</button>
         </div>
      </div>
   )
}

export default Navigation;