import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { IoTrashBinSharp } from "react-icons/io5";
import "../App.css";

const Home = ({ isAuth }) => {

  // For all the posts along with the title, initially an empty array
  const [postLists, setPostLists] = useState([]);

  // Creates a reference to a collection named "posts" within the Firestore database and stores it in postsCollectionRef
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef); //read data from Firestore collection
      // console.log(data.docs);

      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));//stores data in setPostLists
      // console.log(postLists);
    };
    getPosts();
  }, []);

  // Deletes the post if is authorized and the id matches
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => deletePost(post.id)}>
                    <IoTrashBinSharp />
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.post}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
