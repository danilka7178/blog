function Navigation () {
   return(
      <div className="navigation">
         <a href="/" className="navigation__logo">Мой блог</a>
         <ul className="navigation__list">
            <li className="navigation__item"><a href="/">Главная</a></li>
            <li className="navigation__item"><a href="/about">Эбаут ми</a></li>
         </ul>
         <div className="navigation__search">
            <input type="text" className="input" placeholder="Поиск статьи..."/>
            <button className="navigation__find">Найти</button>
         </div>
      </div>
   )
}

export default Navigation;