import { db } from "../database/firebase";
import firebase from "firebase/app";
import { collection, getDocs,  query, where, getDoc } from "firebase/firestore";

export async function queryBrukerNavn(uID){
    // funksjon som henter data om bruker ved hjelp av uID (som er lik i begge databasene i firebase)
    console.log('gått inn i metode for å hente bruker navn');
    console.log(uID);
 
    const queryTilBrukerCollection = query(
        collection(db, 'users'), 
          where('uid', '==', uID)
      );
    const snapshot = await getDocs(queryTilBrukerCollection);
    
    if(snapshot.empty){
        console.log('bruker ikke funnet');
        return null;
    }
    console.log('kom hit');
    try{
        const navn = snapshot.docs[0].data().name;
        console.log('navn: ' + navn);
        return navn;
    } catch(error){
        console.log(error);
        return null;
    }
}



/*


export async function queryBrukerNavn(uID){
    // funksjon som henter data om bruker ved hjelp av uID (som er lik i begge databasene i firebase)
    console.log('gått inn i metode for å hente bruker navn');
    console.log(uID);
 
   
    const queryTilBrukerCollection = query(
        collection(db, 'users'), 
          where('uid', '==', uID)
      );
    const snapshot = await queryTilBrukerCollection.get();
    

    if(snapshot.empty){
        console.log('bruker ikke funnet');
        return null;
    }
    console.log('kom hit');
    try{
        const navn = snapshot.docs[0].data().name;
        console.log('navn: ' + navn);
        return navn;
    } catch(error){
        console.log(error);
        return null;
    }

    
    

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
    
    
  }
  
  */
  
  export async function queryBrukerScore(uID){
  
    console.log('score: ');
    return [80, 60, 40, 50, 90];

    /*
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
    */
  }