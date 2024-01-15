import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from "../firebase-config";
import '../App.css'

const Home = () => {
  const [postLists,setPostLists] = useState([])
  const postsCollectionRef = collection(db,"posts")


  useEffect(()=>{
    const getPosts = async() =>{
      const data = await getDocs(postsCollectionRef);
      // console.log(data.docs);
      setPostLists(data.docs.map((doc) => ({...doc.data(),id: doc.id})))
      console.log(postLists);
    }
    getPosts();
  },[])
  return (
    <div className='homePage'>
      {postLists.map((post) =>{
        return(
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className="postTextContainer">
              {post.post}
            </div>
            <h3>@{post.author.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Home