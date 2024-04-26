

export default function VisApiKnapp({setVisFrem}) {
    
    const behandleTrykk = () => {
        setVisFrem(true);
    }

    return (
        <button
            onClick={behandleTrykk}
        >
            Vis Big-5 test resulater
        </button>
    );
}