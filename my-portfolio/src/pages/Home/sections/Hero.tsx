import { Button, Container, Grid, styled, Typography } from "@mui/material"
import MainPhoto from "../../../assets/images/image2.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledMainPhoto = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledMainPhoto src={MainPhoto} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" textAlign={"center"}>Lucas Tadashi Endo</Typography>
                        <Typography color="primary" variant="h2" textAlign={"center"}>Developer Analyst</Typography>
                        
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid size={{ xs: 12, md: 4 }}  display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <DownloadIcon/>
                                    Currículo
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}  display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <EmailIcon/>
                                    Contato
                                </Button>
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
  