import { styled } from "@mui/material"

const Button = () => {

    const Button = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        border: '1px solid ${theme.palette.primary.contrastText}',
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    }))

    return (
      <>
       <Button></Button>
      </>
    )
  }
  
  export default Button
  