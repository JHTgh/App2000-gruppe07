import BarChart from "./compareChart";




function CompareAll(profiler) {

    // lager en liste over alle de forskjellige teamer vi har score til 
    const temaListe = fyllTemaListe();
    const scoreListe = fyllScoreListe(profiler);
    
    function fyllTemaListe() {
        // legger inn tittel for alt som er tatt test på
        const hovedScore = ['Nevrotisisme', 'Ekstroversjon', 'Åpenhet For Erfaringer', 'Medmenneskelighet', 'Planmessighet'];

        const nevrotisisme = ['Angst', 'Sinne', 'Deprisjon', 'Selvbevissthet', 'Impulsivitet', 'Sårbarhet'];
        const ekstroversjon = ['Vennlighet', 'Sosiabilitet', 'Selvmarkering', 'Aktivitet', 'Spennings Søking', 'Positive Følelser'];
        const åpenhetForErfaringer = ['Fantasi', 'Estetikk', 'Følelser', 'Eventyrlyst', 'Intellekt', 'Liberale Verdier'];
        const medmenneskelighet = ['Tillit', 'Moral', 'Altruisme', 'Føyelighet', 'Beskjedenhet', 'Følsomhet'];
        const planmessighet = ['Kompetanse', 'Orden', 'Pliktoppfyllenhet', 'Prestasjonsstreben', 'Selvdisiplin', 'Betenksomhet'];

        return [hovedScore, nevrotisisme, ekstroversjon, åpenhetForErfaringer, medmenneskelighet, planmessighet];
    }

    if(profiler.length === 0) {
        return(
            <div>
                <p>Velg en bruker</p>
            </div>
        );
    }
    // sorterer score fra scoreListe (liste over alle som skal sammenlignes)
    //men det er masse annen data vi ikke trenger i scoredata
    function fyllScoreListe(profiler) {
    
        const hovedData = profiler.map(bruker => ({
            navn: bruker.navn,
            nevrotisisme: bruker.nevrotisisme,
            ekstroversjon: bruker.ekstroversjon,
            åpenhetForErfaringer: bruker.åpenhetForErfaringer,
            meDmenneskelighet: bruker.medmenneskelighet,
            planmessighet: bruker.planmessighet
        }));

        return hovedData;
    }
    console.log(scoreListe);

    //ett objekt fra profiler burde være ett objekt med ett navn og all score data fra testen
    
        

    // returnerer alle charts i en løkke
    return (
        <div>
            <p>her er jeg</p>
        </div>
    )
}

export default CompareAll;