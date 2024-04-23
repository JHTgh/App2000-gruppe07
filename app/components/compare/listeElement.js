// skal returnere bare ett element i en liste
'use client';
import { useState } from 'react';

export default function ListeElement( { profil, handleProfilKlikk} ) {

    const [selected, setSelected] = useState(false);
    

    const behandleEnProfilKlikk = (p) => {
        // Legg til logikk for å flytte profilen til den andre listen her
        handleProfilKlikk(p);
        console.log(p.id);
        console.log(p.navn + ' er valgt til sammenligning');
        // lager logikk for å selecte profilen
        setSelected(!selected);
    };
    
    // hvis denne profilen har blitt valgt vil vi heller returnere en skygget knapp som ikke har en trykke funksjon
    if(selected) return null;
    
    return (
        <li 
            onClick={() => behandleEnProfilKlikk(profil)}>
                {profil.navn}
        </li>
    );
}