// en komponent som viser frem ett Form, har to funksjoner 1. fungere som et form det submit er legge til en profil, 2. oppdatere en eksisterende profil


const ProfilForm = ({formData, behandleTrykk, setFormData, typeEvent}) => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }


    return (
        <form className={styles.ansattForm} onSubmit = {behandleTrykk} >
            <div className={styles.ansattContainer}>
                <label className={styles.ansattLabel} htmlFor="name">Navn:</label>
                <input className={styles.ansattInput} type="text" id="name" value={formData.name} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="email" >Epost:</label>
                <input className={styles.ansattInput} type="email" id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className= {styles.ansattContainer}>
                <label className={styles.ansattLabel} htmlFor="postnummer">Postnummer:</label>
                <input className={styles.ansattInput} type="text" id="postnummer" value={formData.postnummer} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="jobbtittel">Stilling:</label>
                <input className={styles.ansattInput} type="text" id="jobbtittel" value={formData.stilling} onChange={handleChange}/>
            </div>
            <div className= {styles.ansattContainer}>
                <label className={styles.ansattLabel} htmlFor="address" >Addresse:</label>
                <input className={styles.ansattInput} type="text" id="address" value={formData.address} onChange={handleChange}/>
                <label className={styles.ansattLabel} htmlFor="testId">TestId:</label>
                <input className={styles.ansattInput} type="text" id="testId" value={formData.testId} onChange={handleChange}/>
            </div>
            {typeEvent === 'submit' ? <button className={styles.leggTilKnapp} type="submit">Opprett bruker</button> : '' } 


            <div className= {styles.ansattContainer}>
                <button className={styles.leggTilKnapp} type="submit">Legg til bruker</button>
            </div>
        </form>
    );
};

export default ProfilForm;