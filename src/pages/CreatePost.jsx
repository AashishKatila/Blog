import React from 'react'

const CreatePost = () => {
  return (
    <div className='createPostPage' style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
      <div className="createPostContainer">
        <h1>Create A Post</h1>
        <div className="inputDiv">
          <label>Title: </label>
          <input placeholder='Title...'/>
        </div>
        <div className="inputDiv">
          <label>Post: </label>
          <textarea placeholder='Title...'/>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost