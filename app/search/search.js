import { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        const db = getFirestore();
        const usersRef = collection(db, 'users');
        const q = query(usersRef, 
            where('username', '==', searchTerm), // Søk etter brukernavn
            where('name', '==', searchTerm), // Søk etter navn
            where('email', '==', searchTerm)
        );

        try {
            const querySnapshot = await getDocs(q);
            const results = [];
            querySnapshot.forEach(doc => {
                results.push(doc.data());
            });
            console.log('Søkeresultater:', results);
        } catch (error) {
            console.error('Feil ved søk:', error.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Søk etter bruker"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Søk</button>
        </div>
    );
}
