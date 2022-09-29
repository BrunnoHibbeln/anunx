import { makeStyles } from '@material-ui/core/styles'
import { 
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container, 
	Grid, 
	Typography,
} from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(8, 0, 6,)
	},
	cardMedia: {
		paddingTop: '60%'
	},
	buttonAd: {
		margin: '30px auto',
		display: 'block',
	}
}))

const Home = () => {
	const classes = useStyles()

	return (
		<TemplateDefault>
			<Container maxWidth='sm' className={classes.container}>	
				<Typography component='h1' variant='h2' align='center'>
					My Ads
				</Typography>
				<Button 
					variant='contained' 
					color='primary'
					className={classes.buttonAd}
				>
					Post new ad
				</Button>
			</Container>

			<Container maxWidth='md'>
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
							<CardActions>
								<Button size='small' color='primary'>
									Edit
								</Button>
								<Button size='small' color='primary'>
									Remove
								</Button>
							</CardActions>
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
							<CardActions>
								<Button size='small' color='primary'>
									Edit
								</Button>
								<Button size='small' color='primary'>
									Remove
								</Button>
							</CardActions>
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
							<CardActions>
								<Button size='small' color='primary'>
									Edit
								</Button>
								<Button size='small' color='primary'>
									Remove
								</Button>
							</CardActions>
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
							<CardActions>
								<Button size='small' color='primary'>
									Edit
								</Button>
								<Button size='small' color='primary'>
									Remove
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</TemplateDefault>
	)
}

export default Home