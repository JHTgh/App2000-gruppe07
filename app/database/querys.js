import { db } from "../database/firebase";
import firebase from "firebase/app";
import { collection, getDocs,  query, where, getDoc } from "firebase/firestore";

export async function queryBrukerNavn(uID){
    // funksjon som henter data om bruker ved hjelp av uID (som er lik i begge databasene i firebase)
 
    const queryTilBrukerCollection = query(
        collection(db, 'users'), 
          where('uid', '==', uID)
      );
    const snapshot = await getDocs(queryTilBrukerCollection);
    
    if(snapshot.empty){
        console.log('bruker ikke funnet');
        return null;
    }
    try{
        const navn = snapshot.docs[0].data().name;
        console.log('navn: ' + navn);
        return navn;
    } catch(error){
        console.log(error);
        return null;
    }
}
  
export async function queryBrukerScore(uID){

    const queryTilScoreCollection = query(
        collection(db, 'testRes'), 
        where('uid', '==', uID)
    );
    const snapshot = await getDocs(queryTilScoreCollection);

    if(snapshot.empty){
        console.log('score ikke funnet');
        return null;
    }
    try{
        const score = [];
        const ekstroversjon = snapshot.docs[0].data().Ekstroversjon;
        score.push(ekstroversjon);
        const nevrotisisme = snapshot.docs[0].data().Nevrotisisme;
        score.push(nevrotisisme);
        const samhandling = snapshot.docs[0].data().Samhandling;
        score.push(samhandling);
        const selvinnsikt = snapshot.docs[0].data().Selvinnsikt;
        score.push(selvinnsikt);
        const tillit = snapshot.docs[0].data().Tillit;
        score.push(tillit);

        console.log('score: ' + score);
        return score;
    } catch(error){
        console.log(error);
        return null;
    }
}
export async function queryBrukerEmail(uID){
    const queryTilBrukerCollection = query(
        collection(db, 'users'), 
            where('uid', '==', uID)
        );
    const snapshot = await getDocs(queryTilBrukerCollection);

    if(snapshot.empty){
        console.log('bruker ikke funnet');
        return null;
    }
    try{
        const email = snapshot.docs[0].data().email;
        console.log('email: ' + email);
        return email;
    } catch(error){
        console.log(error);
        return null;
    }
}
export async function getUserByEmail(email){
    const queryTilBedriftCollection = query(
        collection(db, 'bedrift'), 
            where('email', '==', email)
        );
    const snapshot = await getDocs(queryTilBedriftCollection);

    if(snapshot.empty){
        console.log('bruker ikke funnet');
        return null;
    }
    try{
        const user = snapshot.docs[0].data();
        console.log('user: ' + user);
        return user;
    } catch(error){
        console.log(error);
        return null;
    }
}

export function getUserByEmailPromise(email) {
    return new Promise((resolve, reject) => {
      const queryTilBedriftCollection = query(
        collection(db, "bedrift"),
        where("email", "==", email)
      );
  
      getDocs(queryTilBedriftCollection)
        .then((snapshot) => {
          if (snapshot.empty) {
            reject("Bruker ikke funnet");
          }
  
          try {
            const user = snapshot.docs[0].data();
            resolve(user);
          } catch (error) {
            reject(error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
