// panel som viser frem info om valgt profil
import ProfilForm from "./profilForm";

const ProfilInfo = ({ profil, setFormData }) => {

    function oppdaterProfil() {
        setFormData(profil);
    }

    return (
        <ProfilForm formData={formData} behandleTrykk={oppdaterProfil} setFormData={setFormData} typeEvent="oppdater" />
    );
};

export default ProfilInfo;