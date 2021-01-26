function HomePage ({posts}){

   return(
      <div className="homePage">
         <ul className="posts">
            {posts ? posts.map((post) => {
               return(
                  <li key={post.id} className="post">
                     <img className="post__image" src={post.image} alt="post"/>
                     <h3 className="post__title">
                        <a href={`post/${post.id}`}>{post.title}</a></h3>
                     <p className="post__text">{post.text}</p>
                     <p className="post__data">{post.createdAt}</p>
                  </li>
               )
            }): <h3> Подгружаю посты... </h3>}
         </ul>
      </div>
   )
};

export default HomePage;