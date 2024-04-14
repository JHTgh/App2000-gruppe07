import { db } from "@/app/database/firebase"; 
import firebase from "firebase/app";
import { collection, getDocs,  query, where, getDoc } from "firebase/firestore";

export async function queryBedriftNavnPromise(uID) {
    console.log('uID: (query) ' + uID);
  
    const bedriftRef = doc(db, 'bedrift', uID);
  
    return new Promise((resolve, reject) => {
      getDoc(bedriftRef)
        .then((bedriftDoc) => {
          if (!bedriftDoc.exists()) {
            console.log('Bedrift ikke funnet');
            resolve(null);
            return;
          }
  
          const navn = bedriftDoc.data().bedriftNavn;
          console.log('BedriftNavn: ' + navn);
          resolve(navn);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
}