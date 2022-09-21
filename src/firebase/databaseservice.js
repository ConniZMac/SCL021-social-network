
import { getAuth} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import {app} from "./firebase.js"
import { getFirestore, collection , addDoc,query,getDocs,} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";





const db = getFirestore(app);
const auth = getAuth(app);

//Funcion Crear Post
async function createPost (description ){
try {
  const docRef = await addDoc(collection(db, "Posts"), {
    userName: auth.currentUser.displayName,
    date: "Timestamp",
    text: description,
    uId:auth.currentUser.uid
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

}


async function printPost (){
const allPost = query(collection(db, "Post"), orderBy("capital", "==", true));

const querySnapshot = await getDocs(allPost);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots crear como se muestra o implementa
  const containerText = document.createElement("div");
  const text = document.createElement ('p')
  text.className = "textPost";
  containerText.className="cText";
  containerPost.appendChild(containerText);

  console.log(doc.id, " => ", doc.data());
});

}

export{createPost,printPost};