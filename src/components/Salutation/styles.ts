import styled from "styled-components";

export const StyledSalutation = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 1rem;
margin: 1.875rem 0;


.salutation__message__lineOne{
    font-size: var(--font-size-2);
}


.salutation__span__nameUser{
    font-weight: 700;
}

.salutation__span__nameCompany{
    font-weight: 500;
}

@media (min-width: 1023px) {
    flex-direction: row;
    justify-content: left;
    padding: 0 9rem;
    width: auto;
    
    
    /* .salutation__message{
        width: 100%;
        max-width: 1246px;
        
} */
}
`