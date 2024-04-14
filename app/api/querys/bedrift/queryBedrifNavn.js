import { db } from "@/app/database/firebase"; 
import firebase from "firebase/app";
import { collection, getDocs,  query, where, getDoc } from "firebase/firestore";

export async function queryBedriftNavn(uID){
    // funksjon som henter data om bruker ved hjelp av uID (som er lik i begge databasene i firebase)
 
    console.log('uID: (query) ' + uID);

    const queryTilBrukerCollection = query(
        collection(db, 'bedrift'), 
          where('bedriftId', '==', uID)
      );
    const snapshot = await getDocs(queryTilBrukerCollection);
    
    if(snapshot.empty){
        console.log('bedrift ikke funnet');
        return null;
    }
    try{
        const navn = snapshot.docs[0].data().bedriftNavn;
        console.log('BedriftNavn: ' + navn);
        return navn;
    } catch(error){
        console.log(error);
        return null;
    }
}