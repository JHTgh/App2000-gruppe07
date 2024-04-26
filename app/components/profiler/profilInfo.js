// panel som viser frem info om valgt profil
import ProfilForm from "./profilForm";

const ProfilInfo = ({ profil, formData, setFormData }) => {


    const handleUpdate = async (event) => {
        event.preventDefault();
        // sjekker om det er endring
        console.log('Endringer i profilen, oppdaterer...');
        updateProfil(profil.id, formData);
    }

    return (
        <ProfilForm profil={profil} formData={formData} behandleTrykk={handleUpdate} setFormData={setFormData} typeEvent="oppdater" />
    );
};

export default ProfilInfo;