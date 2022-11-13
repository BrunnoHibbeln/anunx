import {
   Box,
   Container,
   Grid,
   IconButton,
   InputBase,
   makeStyles,
   Typography,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'

const useStyles = makeStyles((theme) => ({
   searchBox: {
      display: 'flex',  
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      marginTop: 20,
      backgroundColor: '#fff',
      borderRadius: '7px',
   },
	cardGrid: {
		marginTop: '60px',
	},
}))

const Home = () => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth='md'>
            <Typography
               component='h1'
               variant='h3'
               align='center'
               color='textPrimary'
            >
               What you are looking for?
            </Typography>
            <Box className={classes.searchBox}>
               <InputBase 
                  placeholder='Ex: Iphone 12 pro max'
                  fullWidth
               />
               <IconButton>
                  <SearchIcon />
               </IconButton>
            </Box>
         </Container>

         <Container maxWidth='lg' className={classes.cardGrid}>
			   <Typography
               component='h2'
               variant='h4'
               align='center'
               color='textPrimary'
            >
               Highlights
            </Typography>
				<br />
            <Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={4}>
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
						/>
					</Grid>
            </Grid>
         </Container>
         
      </TemplateDefault>
   )
}

export default Home