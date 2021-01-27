import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function FullPostPage () {
   const [post, setPost] = React.useState([]);
   const [comments, setComments] = React.useState([]);

   const page = window.location.pathname.substring(6);

   React.useEffect(() => {
      axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${page}`)
      .then(({data}) => setPost(data));
      axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${page}/comments`)
      .then(({data}) => setComments(data))
   }, [page]);

   return(
      <div className="fullPostPage">
         <Link to="/" className="fullPostPage__goBack">Назад</Link>

         <div className="currentpost">
            <img className="currentpost__image" src={post.image} alt=""/>
            <h3 className="currentpost__title">
               <Link to={`${post.id}`}>{post.title}</Link>
            </h3>
            <p className="currentpost__text">{post.text}</p>
            <p className="currentpost__data">{post.createdAt}</p>
         </div>
         <ul className="currentpost__comments comments">
            <h3 className="comments__title">Комментарии:</h3>
            {comments.length !== 0 ? comments.map((comment) => {
               return(
                  <li key={comment.id} className="comments__comment comment">
                        <h4 className="comment__name">{comment.name}</h4>
                        <p className="comment__text">{comment.text}</p>
                  </li>
               )
            }) : <h3>Пока никто не оставил комментарии..</h3>}
         </ul>
      </div>
   )
};

export default FullPostPage;


