import {
   Box,
   Container,
   Select,
   TextField,
   Typography,
   Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
   container: {
      padding: theme.spacing(8, 0, 6)
   },
   box: {
      background: theme.palette.background.white,
      padding: theme.spacing(3)
   },
   boxContainer: {
      paddingBottom: theme.spacing(3),
   },
}))

const Publish = () => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth='sm' className={classes.container}>
            <Typography
               component='h1'
               variant='h2'
               align='center'
               color='primary'
            >
               Publish ad
            </Typography>
            <Typography
               component='h5'
               variant='h6'
               align='center'
               color='textPrimary'
            >
               The more detailed the better.
            </Typography>
         </Container>

         <Container maxWidth='md' className={classes.boxContainer}>
            <Box className={classes.box}>
            <Typography
               component='h6'
               variant='h6'
               color='textPrimary'
            >
               Ad title
            </Typography>
            <TextField 
               label='Ex: Broken bicycle $30'
               size='small'
               fullWidth
            />

            <br /> <br />

            <Typography 
               component='h6'
               variant='h6'
               color='textPrimary'
            >
               Category
            </Typography>
            <Select 
               native
               value=''
               fullWidth
               onChange={() => {}}
               inputProps={{
                  name: 'age',
               }}
            >
               <option value=''>Select</option>
               <option value={1}>Babies and kids</option>
               <option value={2}>Agriculture</option>
               <option value={3}>Fashion</option>
               <option value={3}>Cars, Motocycles and Boats</option>
               <option value={3}>Services</option>
               <option value={3}>Leisure</option>
               <option value={3}>Animals</option>
               <option value={3}>Properties</option>
               <option value={3}>Equipments and tools</option>
               <option value={3}>Smartphones and Tablets</option>
               <option value={3}>Sport</option>
               <option value={3}>Technology</option>
               <option value={3}>Job</option>
               <option value={3}>Other</option>
            </Select>
            </Box>
         </Container>
         
         <Container maxWidth='md' className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography
                  component='h6'
                  variant='h6'
                  color='textPrimary'
               >
                  Images
               </Typography>
               <Typography
               component='div'
               variant='body2'
               color='textPrimary'
            >
               The first image will be the main picture of the ad.
            </Typography>
            </Box>
         </Container>

         <Container maxWidth='md' className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography
                  component='h6'
                  variant='h6'
                  color='textPrimary'
               >
                  Description
               </Typography>
               <Typography
               component='div'
               variant='body2'
               color='textPrimary'
               >
                  Write the details of what you are selling.
               </Typography>
               <TextField 
                  multiline
                  minRows={6}
                  variant='outlined'
                  fullWidth
               />
            </Box>
         </Container>

         <Container maxWidth='md' className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography
                  component='h6'
                  variant='h6'
                  color='textPrimary'
                  gutterBottom
               >
                  Contact Data
               </Typography>
               <TextField 
                  label='Name'
                  variant='outlined'
                  size='small'
                  fullWidth
               />
               <br /> <br />
               <TextField 
                  label='E-mail'
                  variant='outlined'
                  size='small'
                  fullWidth
               />
               <br /> <br />
               <TextField 
                  label='Phone'
                  variant='outlined'
                  size='small'
                  fullWidth
               />
               <br /> <br />
            </Box>
         </Container>

         <Container maxWidth='md' className={classes.boxContainer}>
            <Box textAlign="right">
               <Button variant='contained' color='primary'>
                  Publish ad
               </Button>
            </Box>
         </Container>
      </TemplateDefault>
   )
}

export default Publish