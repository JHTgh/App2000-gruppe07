import { initializeApp } from "firebase/app";
import { getFirestore, query, where, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAE0IgG0GIHvXQdkML9qj7X2PvlD2fDnoc",
  authDomain: "bigfivedb.firebaseapp.com",
  projectId: "bigfivedb",
  storageBucket: "bigfivedb.appspot.com",
  messagingSenderId: "8239407001",
  appId: "1:8239407001:web:b9337f19178b922bdf3d08"
};


export async function queryBrukerNavn(uID){
  // funksjon som henter data om bruker ved hjelp av uID (som er lik i begge databasene i firebase)
  console.log('gått inn i metode for å hente bruker navn');
  console.log(uID);

  const docRef = db.collection('users');
  const snapshot = await docRef.where('uid', '==', uID).get();
  if(snapshot.empty){
    console.log('bruker ikke funnet');
    return null;
  }
  console.log('kom hit');

  const navn = snapshot.docs[0].data().name;
  console.log('navn: ' + navn);
  return navn;

  /*
  const queryTilBrukerCollection = query(
    collection(db, 'users'), 
      where('uid', '==', uID)
  );
 
  // nå har vi alle bruker dokumenter med lik uid som betyr en
  // vi vil bare ta vare på navnet 
  const querySnapshot = await getDoc(queryTilBrukerCollection);
  
  const allDocs = querySnapshot.forEach((snap) => {
    console.log(snap.data().name);
  
  })
  const navn = allDocs.data().name;
  console.log('navn: ' + navn);
  
  console.log(querySnapshot.data().name);
  console.log('her det er fei?');
  const navn = querySnapshot.data().name;
  console.log(navn);
  */
  
}

export async function queryBrukerScore(uID){

  const queryTilScoreCollection = query(
    collection(db, 'testRes'),
      where('uid', '==', uID)
  );
  // vi har hentet score og matcher med uid
  const querySnapshot = await getDoc(queryTilScoreCollection);
  // i hele dette dokumentet ligger det også en uid som vi ikke ønsker å returnere
  const score = [];
  
  for (let i = 0; i < 5; i++) {
    score.push(brukerScore[i]);
  }

  return score;
}


const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase); 
export default firebase;