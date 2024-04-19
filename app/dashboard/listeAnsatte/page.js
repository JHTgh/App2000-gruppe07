"use client";
import { useState, useEffect } from 'react';
import { userUId } from '@/app/dashboard/layout';
import { addDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
import {AlleAnsatte} from '@/app/components/alleAnsatte';

export default function listeFremvisning() {
    const [bruker, setBruker] = useState(null);
    const [feil, setFeil] = useState(null);
    
    useEffect(() => {
        const hentBrukerData = async () => {
            try {
                const uId = await userUId; // Vente på IDen
                console.log('uID: (page) ' + uId);
                setBruker(uId);
            } catch (error) {
                setFeil(error); // Håndter feil
                console.error(error);
            }
        };
    
        hentBrukerData();
    }, []);

    if (!bruker && !feil) {
    return (
        <div>
            <h1>Ingen tilgang</h1>
            <p>Vennligst logg inn og forsøk på nytt.</p>
        </div>
    );
    }


    return (
    <div>
        <div>
            <AlleAnsatte bedriftId={bruker} />
        </div>

    </div>
    )};
        /*div>
        
      <div>
      {userList.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <button onClick={() => addUId(user.uid)}>Add</button>
          <p>------------</p>
        </div>
        ))}
      </div>
    </div> */