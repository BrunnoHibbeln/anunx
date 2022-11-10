import {
   Box,
	Card,
	CardMedia,
	CardContent,
	Button,
   Container,
   Grid,
   IconButton,
   InputBase,
   makeStyles,
   Typography,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
   searchContainer: {
      padding: theme.spacing(8, 10, 6)
   },
   searchBox: {
      display: 'flex',  
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      marginTop: 20,
      backgroundColor: '#fff',
      borderRadius: '7px',
   },
	cardMedia: {
		paddingTop: '60%'
	},
}))

const Home = () => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth='md' className={classes.searchContainer}>
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
						<Card>
							<CardMedia  
								className={classes.cardMedia}
								image={'https://source.unsplash.com/random'}
								title='Image title'
							/>
							<CardContent>
								<Typography variant='h5' component='h2'>
									Product x
								</Typography>
								<Typography>
									$ 20,00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card>
							<CardMedia  
								className={classes.cardMedia}
								image={'https://source.unsplash.com/random'}
								title='Image title'
							/>
							<CardContent>
								<Typography variant='h5' component='h2'>
									Product x
								</Typography>
								<Typography>
									$ 20,00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card>
							<CardMedia  
								className={classes.cardMedia}
								image={'https://source.unsplash.com/random'}
								title='Image title'
							/>
							<CardContent>
								<Typography variant='h5' component='h2'>
									Product x
								</Typography>
								<Typography>
									$ 20,00
								</Typography>
							</CardContent>
						</Card>
					</Grid>
            </Grid>
         </Container>
         
      </TemplateDefault>
   )
}

export default Home