import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase } from '@mui/material'
import { logoUrl } from '../../constants/constant'
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material'
import HeaderMenu from '../common/HeaderMenu'
import { useNavigate } from 'react-router-dom'
import { routePath } from '../../constants/Route'


const StyledToolBar = styled(Toolbar)`
    background: #121212;
    padding: 0 115px !important;
    min-height :56px !important; 
    justify-content: space-between;
    & > * {
        padding: 0 16px;
    }
    & > div{
         display: flex;
         align-items: center;
         cursor: pointer;
         & > p {
            font-size: 14px;
            font-weight: 800;
        }
    }
    & > p{
        font-size: 14px;
        font-weight: 800;
        cursor: pointer
    }
`;

const InputSearchField = styled(InputBase)`
    height: 30px;
    width: 55%;
    background: #FFFFFF;
    border-radius: 5px;
    `

const Logo = styled('img')({
    width: 64,
})

const Header = () => {
    const [open, setOpen] = useState()
    const navigate = useNavigate();

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }
    return (
        <AppBar position='static'>
            <StyledToolBar>
                <Logo src={logoUrl} alt="logo" onClick={() => navigate(routePath.home)} />
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <InputSearchField />
                <Typography>IMDb<Box component="span">Span</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sign</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolBar>
        </AppBar>
    )
}
export default Header

