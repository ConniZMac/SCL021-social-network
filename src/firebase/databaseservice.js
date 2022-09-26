import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const db = getFirestore(app);
const auth = getAuth(app);

//Funcion Crear Post
async function createPost(description) {
  try {
    const docRef = await addDoc(collection(db, "Posts"), {
      userName: auth.currentUser.displayName,
      date: "Timestamp",
      text: description,
      uId: auth.currentUser.uid,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//Imprimir post
async function printPost() {
  const allPost = query(collection(db, "Posts"));
  console.log(allPost);
  const querySnapshot = await getDocs(allPost);
  console.log(querySnapshot); //hasta aqui llega

  let html = "";
  querySnapshot.forEach((doc) => {
    const post = doc.data();
    console.log(post);
    html += `
   <div class= "pContainer">   
   <img class='userPhoto' width='80'  src='./img/gorrito-chef.jpg'/> 
    <p class= "publication"> ${post.text} </p>
  </div>
  `;

    console.log(doc.id, " => ", doc.data());
  });
  document.getElementById("postPrint").innerHTML = html;
}
// guardar Post
/*export const savePost = (description) => {
  let userName;
  if (auth.currentUser.displayName == null) {
    let separateEmail = auth.currentUser.email.split('@');
    userName = separateEmail[0];
  } else {
    userName = auth.currentUser.displayName;
  }
  addDoc(collection(db, 'Post'), {
    uid: auth.currentUser.uid,
    name: userName,
    description: description,
    likes:[],
    likesCounter: 0,
    datepost: Timestamp.fromDate(new Date()),
  });
};*/

export { createPost, printPost };
