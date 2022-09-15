import { makeStyles } from '@material-ui/core/styles'
import { 
	Button,
	Container, 
	Typography,
} from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(8, 0, 6,)
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
		</TemplateDefault>
	)
}

export default Home
