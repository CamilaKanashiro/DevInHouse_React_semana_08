const PerfilDeContato = ({
    photo,
    name,
    description
}) => {
    return (
        <div className="perfil-de-contato">
            <img src={photo} alt="foto de perfil" className="foto-perfil"></img>
            <div className="perfil-info">
                <h2 className="perfil-name">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default PerfilDeContato;