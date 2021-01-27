import {Link} from "react-router-dom";

function HomePage ({posts}){

   return(
      <div className="homePage">
         <ul className="posts">
            {posts.length!==0 ? posts.map((post) => {
               return(
                  <li key={post.id} className="post">
                     <img className="post__image" src={post.image} alt="post"/>
                     <h3 className="post__title">
                        <Link to={`post/${post.id}`}>{post.title}</Link>
                     </h3>
                     <p className="post__text">{post.text}</p>
                     <p className="post__data">{post.createdAt}</p>
                  </li>
               )
            }): <h3>Постов нет, измени запрос..</h3>}
         </ul>
      </div>
   )
};

export default HomePage;