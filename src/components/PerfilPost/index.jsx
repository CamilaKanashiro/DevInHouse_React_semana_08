import { MdMoreVert } from "react-icons/md";


const PerfilPost = ({
    perfilPhoto,
    name
}) => {
    return (
        <div className="perfil-post">
            <img src={perfilPhoto} alt="foto de perfil" className="foto-perfil-post"></img>
            <div className="perfil-post-info">
                <div className="perfil-post-name-config">
                    <h2 className="perfil-post-name">{name}</h2>
                    <MdMoreVert className="three-dots-Post"/>
                </div>
                <p className="perfil-post-time">10m</p>
            </div>
        </div>
    )
}


export default PerfilPost;