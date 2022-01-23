import firebase from "firebase/compat/app";
import "firebase/firestore";


async function getBestReview() {
  const db = firebase.firestore();

  const snapshot = await db
    .collection("review")
    .where("is_best", "==", true)
    .orderBy("timestamp", "desc")
    .limit(25)
    .get();

  const newDoc = [];
  snapshot.forEach((doc) => {
    newDoc.push({ ...doc.data(), id: doc.id });
  });

  return newDoc;
}

async function getSingleDocument(target, id) {
  const db = firebase.firestore();
  const snapshot = await db.collection(target).doc(id).get();

  return snapshot.data();
}

export {
    getBestReview,
    getSingleDocument
};
