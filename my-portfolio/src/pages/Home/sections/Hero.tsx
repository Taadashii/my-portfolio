import {Container, Grid, styled, Typography } from "@mui/material"
import MainPhoto from "../../../assets/images/image2.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../components/StyleButton";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledPhotoContainer = styled("div")(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.only("xs")]: {
            paddingTop: "60px", // Padding aplicado ao contêiner
        },
    }));

    const StyledMainPhoto = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        boxSizing: "border-box"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center" alignItems="center">
                        <StyledPhotoContainer>
                            <StyledMainPhoto src={MainPhoto} />
                        </StyledPhotoContainer>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Lucas Tadashi Endo</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>Developer Analyst</Typography>
                        
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                            <Grid size={{ xs: 12, md: 4 }}  display={"flex"} justifyContent={"center"}>
                                <StyledButton>
                                    <DownloadIcon/>
                                    <Typography>
                                        Currículo
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}  display={"flex"} justifyContent={"center"}>
                                <StyledButton>
                                    <EmailIcon/>
                                    <Typography>
                                        Contato
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>        
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  