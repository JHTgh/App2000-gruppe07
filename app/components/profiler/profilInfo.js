// panel som viser frem info om valgt profil


const ProfilInfo = ({ profil }) => {
    return (
        <div>
            <h1>{profil.navn}</h1>
            <p>{profil.epost}</p>
            <p>{profil.ansatte}</p>
        </div>
    );
};

export default ProfilInfo;