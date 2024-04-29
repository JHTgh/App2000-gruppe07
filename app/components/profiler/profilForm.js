// en komponent som viser frem ett Form, har to funksjoner 1. fungere som et form det submit er legge til en profil, 2. oppdatere en eksisterende profil
import styles from './../page.module.css';


/**
 * @author Mie
 * @con Kjartan, codeium
 * Komponent som viser frem et form selve formet har flere funksjoner
 * Funksjonene som formet kan gjøre bestemmes i fra innkommende funksjoner og en swith (typeEvent)
 * Så det er to forskjellige måter komponenten kan vises frem på endten LeggeTilProfil eller Redigere(slette/endre)
 * Håndterer endring av formData innad
 * 
 * @param {object} formData - inneholder all info som skal vises frem
 * @param {function} behandleTrykk - funksjon for å legge til en profil eller endre en profil
 * @param {function} behandleEkstraTrykk - funksjon for å slette (ellers tom)
 * @param {function} setFormData - funksjon for å sette all infor i FormData
 * @param {string} typeEvent - switch som bestemmer hva som skal vises frem
 * @returns {JSX.Element} - komponenten profilForm
 */
const ProfilForm = ({formData, behandleTrykk, behandleEkstraTrykk, setFormData, typeEvent}) => {

    
   const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };


    return (
        <form className={styles.ansattForm} onSubmit = {behandleTrykk} >
            <div className={styles.ansattContainer}>
                <label className={styles.ansattLabel} htmlFor="name">Navn:</label>
                <input className={styles.ansattInput} type="text" id="navn" value={formData.navn} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="email" >Epost:</label>
                <input className={styles.ansattInput} type="email" id="epost" value={formData.epost} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="postnummer">Postnummer:</label>
                <input className={styles.ansattInput} type="text" id="postNr" value={formData.postNr} onChange={handleChange}/>
            </div>
            <div className={styles.ansattContainer}>
                <label className={styles.ansattLabel} htmlFor="jobbtittel">Stilling:</label>
                <input className={styles.ansattInput} type="text" id="stilling" value={formData.stilling} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="address" >Addresse:</label>
                <input className={styles.ansattInput} type="text" id="adresse" value={formData.adresse} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="testId">TestId:</label>
                <input className={styles.ansattInput} type="text" id="testId" value={formData.testId} onChange={handleChange}/>
            </div>
            {
                typeEvent === 'submit' ? 
                <div className= {styles.ansattContainer}>
                    <button className={styles.leggTilKnapp} type="submit">Legg til bruker</button>
                </div> :
                <div className= {styles.ansattContainer}>
                    <button className={styles.knappOppdater} type="submit">Oppdater bruker</button>
                    <button className={styles.knappSlett} type="button" onClick={behandleEkstraTrykk}>Slett profil</button>
                </div>
            }
        </form>
    );
};

export default ProfilForm;