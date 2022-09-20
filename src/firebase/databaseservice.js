import {app} from "./firebase.js"
import { getFirestore, collection , addDoc} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";


const db = getFirestore(app);

//Funcion Crear Post
async function createPost ( ){
try {
  const docRef = await addDoc(collection(db, "Posts"), {
    userName: "Ada",
    date: "15-09-22",
    text: ""
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

}

export{createPost};