import React from "react"
import axios from "axios";
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

   if(window.location.pathname.includes('post')){
      return(
         <div className="main">
            {pageLoad && <h3>Гружу бложек...</h3>}
            <FullPostPage/>
         </div>
      )
   }else{
      return(
         <div className="main">
            {pageLoad && <h3>Гружу бложек...</h3>}
            <Navigation/>
            {window.location.pathname === "/" && <HomePage posts={posts}/>}
            {window.location.pathname === "/about" && <AboutPage/>}
         </div>
      )
   }
};

export default App;