import React from "react"
import axios from "axios";
import {Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import FullPostPage from "./pages/FullPostPage";

function App() {
   const [posts, setPosts] = React.useState([]);
   const [pageLoad, setPageLoad] = React.useState(false);

   React.useEffect(() => {
      setPageLoad(true);
      axios.get("https://5c3755177820ff0014d92711.mockapi.io/posts")
      .then(({data}) => setPosts(data))
      .finally(() => setPageLoad(false))
   }, []);

   //? До использования react-router-DOM.

   // if(window.location.pathname.includes('post')){
   //    return(
   //       <div className="main">
   //          {pageLoad && <h3>Гружу бложек...</h3>}
   //          <FullPostPage/>
   //       </div>
   //    )
   // }else{
   //    return(
   //       <div className="main">
   //          {pageLoad && <h3>Гружу бложек...</h3>}
   //          <Navigation/>
   //          {window.location.pathname === "/" && <HomePage posts={posts}/>}
   //          {window.location.pathname === "/about" && <AboutPage/>}
   //       </div>
   //    )
   // }

   console.log(posts)

   return(
      <div className="main">
         <Route exact path="/">
            {pageLoad && <h3>Гружу бложек...</h3>}
            <Navigation setPosts={setPosts}/>
            <HomePage posts={posts}/>
         </Route>
         
         <Route exact path="/about">
            {pageLoad && <h3>Гружу бложек...</h3>}
            <Navigation setPosts={setPosts}/>
            <AboutPage/>
         </Route>

         <Route path="/post/:id">
            {pageLoad && <h3>Гружу бложек...</h3>}
            <FullPostPage/>
         </Route>
      </div>
   )
};

export default App;