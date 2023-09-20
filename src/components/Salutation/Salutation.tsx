import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { StyledSalutation } from "./styles";

export const Salutation = () => {
    
    const {user} = useContext(UserContext);

    const token = localStorage.getItem('@epicStyle:token')

    return(
        <StyledSalutation>
            {token ? (
                <div className="salutation__message">
                    <div className="salutation__message__lineOne">
                        <h2>Olá, <span className="salutation__span__nameUser">{user?.name}</span>!</h2>
                    </div>
                </div>
             ):(
                null
             )}
            
        </StyledSalutation>
    )


}