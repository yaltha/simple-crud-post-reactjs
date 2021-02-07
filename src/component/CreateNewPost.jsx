const CreateNewPost = ({ onSaveTitle, onSaveContent, getTitle, getContent, savePost }) => {
  return (
    <>
      <form onSubmit={savePost}>
        <h1>Create New Post</h1>
        <input
          onChange={onSaveTitle}
          ref={getTitle}
          type="text"
          size="39"
          placeholder="title"
          required
        />
        <br />
        <br />
        <textarea
          onChange={onSaveContent}
          ref={getContent}
          placeholder="contents"
          id=""
          cols="41"
          rows="8"
          required
        ></textarea>
        <br />
        <br />
        <button>Save Post</button>
      </form>
    </>
  );
};

export default CreateNewPost;
