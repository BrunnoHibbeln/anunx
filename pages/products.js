import {
   Avatar,
   Box,
   Card,
   CardHeader,
   CardMedia,
   Chip,
   Container,
   Grid,
   Typography,
} from '@material-ui/core'

import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
   },
   productName: {
      marginTop: '15px'
   },
   price: {
      fontWeight: 'bold',
      marginBottom: '15px', 
   },
}))

const Products = () => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth='lg'>
            <Grid container spacing={3}>
               <Grid item xs={8}>
                  <Box className={classes.box}>
                     Carousel
                  </Box>
                  <Box className={classes.box} textAlign='left'>
                     <Typography
                        component='span'
                        variant='caption'
                     >
                        Published June 16, 2021
                     </Typography>
                     <Typography
                        component='h5'
                        variant='h5'
                        className={classes.productName}
                     >
                        Jaguar XE 2.0 D R-Sport Aut.
                     </Typography>
                     <Typography
                        component='h5'
                        variant='h5'
                        className={classes.price}
                     >
                        R$ 50.000,00
                     </Typography>
                     <Chip label='Category' />
                  </Box>
                  <Box className={classes.box}>
                     <Typography  
                        component='h6'
                        variant='h6'
                     >
                        Description
                     </Typography>
                     <Typography  
                        component='p'
                        variant='body2'
                     >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </Typography>
                  </Box>
               </Grid>

               <Grid item xs={4}>
                  <Card elevation={0} className={classes.box}>
                     <CardHeader 
                        avatar={
                           <Avatar>B</Avatar>
                        }
                        title='Brunno Hibbeln'
                        subtitle='brunno@email.com'
                     />
                     <CardMedia
                        image='https://source.unsplash.com/random'
                        title='Brunno Hibbeln'
                     />
                  </Card>
                  <Box className={classes.box}>
                     <Typography  
                        component='h6'
                        variant='h6'
                     >
                        Location
                     </Typography> 
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </TemplateDefault>
   )
}

export default Products