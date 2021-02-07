
const ModifyPost = ({title,content, updatePost, saveTitle,saveContent}) => {
    return (
        <>
            <form>
                <h1>Modify Post</h1>
                <input 
                    defaultValue={title} 
                    onChange={saveTitle}
                    type="text" 
                    size="39" 
                    placeholder="title" 
                    required/>
                <br/>
                <br/>
                <textarea 
                    defaultValue={content}
                    onChange={saveContent}
                    placeholder="contents" 
                    cols="41" 
                    rows="8" 
                    required
                    ></textarea>
                <br/>
                <br/>
                <button onClick={updatePost}>Update Post</button>
            </form>   
        </>
    )
}

export default ModifyPost
