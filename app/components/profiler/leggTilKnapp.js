// en knapp som gjør valgtProfil tom - denne skal altid være synelig (ikke at vi koder det her)


export default function LeggTilKnapp({ setValgtProfil, setFormData }) {

    const handleClick = () => {
        setValgtProfil(null);
        setFormData({
            navn: '',
            epost: '',
            adresse: '',
            postNr: '',
            stilling: '',
            testId: ''
        });
    };
    return (
        <button 
            onClick={handleClick}>
                Legg til en profil
        </button>
    );
}