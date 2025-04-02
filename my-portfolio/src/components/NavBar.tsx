import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem>Sobre</MenuItem>  
                <MenuItem>Habilidades</MenuItem>
                <MenuItem>Projetos</MenuItem>

            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  