import { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from './Post'
import ModifyPost from './ModifyPost'

const DisplayAllPosts = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState('');

  //initialize Ref
  const getTitle = useRef();
  const getContent = useRef();

  const saveTitle = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };
  const saveContent = (e) => {
    setContent(e.target.value);
    // console.log(content);
  };
  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    console.log(allPosts);

    getTitle.current.value = "";
    getContent.current.value = "";
    // setContent("");
    // setTitle("");
    toggleCreateNewPost();
  };
  
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost)
  }
  
  const toggleModifyPost = () => {
    setIsModifyPost(!isModifyPost)
  }
  
  const editPost = id => {
    setEditPostId(id) ;
    toggleModifyPost();
  }
  
  const updatePost = e =>{
    e.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId){
        return{...eachPost,
               title:title || eachPost.title,
               content:content || eachPost.content}
      }
      return eachPost;
    })
    setAllPosts(updatedPost);
    toggleModifyPost();
  }
  
  const deletePost = (id) => {
    const removePost = allPosts.filter(eachPost =>{ return eachPost.id !== id})
    setAllPosts(removePost);
  }
  
if(isCreateNewPost){
  return (
    <>
      <CreateNewPost
        onSaveTitle={saveTitle}
        onSaveContent={saveContent}
        getTitle={getTitle}
        getContent={getContent}
        savePost={savePost}
        />
    </>
  );
} else if(isModifyPost){
  const post = allPosts.find(post => {return post.id === editPostId});
  return(
    <ModifyPost
      title={post.title}
      content={post.content}
      updatePost={updatePost}
      saveTitle={saveTitle}
      saveContent={saveContent}
    />
  )
}

  return (
    <>
      <h2>All Posts</h2>
      {
        !allPosts.length ? ( <div>
          <h3>There is no posts!</h3>
        </div> ) : ( 
        allPosts.map(eachPost =>{
          return (
            <Post
              key={eachPost.id}
              id={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          )
        })
        )
      }
      <br/>
      <br/>
      <button onClick={toggleCreateNewPost}>Create New Post</button>
    </>
  )

};

export default DisplayAllPosts;
