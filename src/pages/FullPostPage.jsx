import React from "react";
import axios from "axios";

function FullPostPage ({page}) {
   const [post, setPost] = React.useState([]);
   const [comments, setComments] = React.useState([]);

   React.useEffect(() => {
      axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${page}`)
      .then(({data}) => setPost(data));
      axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${page}/comments`)
      .then(({data}) => setComments(data))
   }, [page]);

   return(
      <div className="fullPostPage">
         <a className="fullPostPage__goBack" href="/">Назад</a>

         <div className="currentpost">
            <img className="currentpost__image" src={post.image} alt=""/>
            <h3 className="post__title">
               <a href={`post/${post.id}`}>{post.title}</a>
            </h3>
            <p className="post__text">{post.text}</p>
            <p className="post__data">{post.createdAt}</p>
         </div>
         <ul className="currentpost__comments comments">
            <h3 className="comments__title">Комментарии:</h3>
            {comments ? comments.map((comment) => {
               return(
                  <li key={comment.id} className="comments__comment comment">
                     <div className="comment__left">
                        <img className="comment__image" src={comment.avatar} alt="avatar"/>
                     </div>
                     <div className="comment__right">
                        <h4 className="comment__name">{comment.name}</h4>
                        <p className="comment__text">{comment.text}</p>
                     </div>
                  </li>
               )
            }) : <h4>Грузим комментарии..</h4>}
         </ul>
      </div>
   )
};

export default FullPostPage;


