import React from 'react'
import {AppBar, Toolbar, styled, Typography, Box, InputBase} from '@mui/material'
import { logoUrl } from '../constants/constant'
import { Menu } from '@mui/icons-material'


    const StyledToolBar = styled(Toolbar)`
    background: #121212;
    padding: 0 115px !important;
    min-height :56px !important; 
`;
    const Logo = styled('img')({
        width: 64,
        
    })
const Header = () => {
    return (
        <AppBar>
        <StyledToolBar>
           <Logo src={logoUrl} alt="" />
           <Box>
            <Menu />
            <Typography>Menu</Typography>
           </Box>
           <InputBase />
           <Typography>IMDb<Box component="span">Span</Box></Typography>
        </StyledToolBar>
        </AppBar>
    )
}
export default Header

