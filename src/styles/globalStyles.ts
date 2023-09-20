import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --color-primary: #14140F;
    --color-secondary: #EBEBEB;
    
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;

    --color-success: #168821;
    --color-negative: #E83F5B;
        
    
    --radius-default: 5px;
    --shadow: 0 4px 4px 0 #00000040;

    --font-size-1: 30px;
    --font-size-2: 26px;
    --font-size-3: 22px;
    --font-size-4: 20px;
    --font-size-5: 18px;
    --font-size-6: 16px;
    --font-size-7: 14px;
    --font-size-8: 12px;
    --font-size-9: 10px;
}

body{
    font-family: "Montserrat", sans-serif;
}

`