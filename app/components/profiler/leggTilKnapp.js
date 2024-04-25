// en knapp som gjør valgtProfil tom - denne skal altid være synelig (ikke at vi koder det her)


export default function LeggTilKnapp({ setValgtProfil }) {

    const handleClick = () => {
        setValgtProfil(null);
    };
    return (
        <button 
            onClick={handleClick}>
                Legg til en profil
        </button>
    );
}