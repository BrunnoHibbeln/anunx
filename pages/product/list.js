import {
   Box,
   Container,
   Grid,
   IconButton,
   InputBase,
   Typography,
}
from "@material-ui/core"

import { makeStyles } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
   searchBox: {
      display: 'flex',  
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      backgroundColor: '#fff',
      borderRadius: '7px',
   },
   resultBox: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3),
      marginTop: 20,
   },
   subtitle: {
      fontWeight: '700',
   },
}))

const List = () => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth='md'>
            <Box className={classes.searchBox}>
               <InputBase 
                  placeholder='Ex: Iphone 12 pro max'
                  fullWidth
               />
               <IconButton>
                  <SearchIcon />
               </IconButton>
            </Box>
            <Box className={classes.resultBox}>
               <Typography
                  className={classes.subtitle}
                  component='p'
                  variant='body1'
               >
                  Ads
               </Typography>
               <Typography
                  component='p'
                  variant='body2'
               >
                  We found 200 results
               </Typography>
               <br />
               <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                     <Card 
                        image={'https://source.unsplash.com/random?car=1'}
                        title='Product x'
                        subtitle='$ 20,00'
                        />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <Card 
                        image={'https://source.unsplash.com/random?car=2'}
                        title='Product x'
                        subtitle='$ 20,00'
                        />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <Card 
                        image={'https://source.unsplash.com/random?car=5'}
                        title='Product x'
                        subtitle='$ 20,00'
                        />
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </TemplateDefault>
   )
}

export default List