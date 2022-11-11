import { 
	Button,
	Container, 
	Grid, 
	Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
	buttonAd: {
		margin: '30px auto',
		display: 'block',
	}
}))

const Home = () => {
	const classes = useStyles()

	return (
		<TemplateDefault>
			<Container maxWidth='sm'>	
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
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
							actions={
								<>
									<Button size='small' color='primary'>
										Edit
									</Button>
									<Button size='small' color='primary'>
										Remove
									</Button>
								</>
							}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
							actions={
								<>
									<Button size='small' color='primary'>
										Edit
									</Button>
									<Button size='small' color='primary'>
										Remove
									</Button>
								</>
							}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
							actions={
								<>
									<Button size='small' color='primary'>
										Edit
									</Button>
									<Button size='small' color='primary'>
										Remove
									</Button>
								</>
							}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card 
							image={'https://source.unsplash.com/random'}
							title='Product x'
							subtitle='$ 20,00'
							actions={
								<>
									<Button size='small' color='primary'>
										Edit
									</Button>
									<Button size='small' color='primary'>
										Remove
									</Button>
								</>
							}
						/>
					</Grid>
				</Grid>
			</Container>
		</TemplateDefault>
	)
}

export default Home
