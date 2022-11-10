import React, { useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Divider,
} from '@material-ui/core'

import {
	AccountCircle,
	MenuIcon,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	userName: {
		marginLeft: '6px'
	},
	divider: {
		margin: '8px 0px'
	},
}))

const ButtonAppBar = () => {
	const classes = useStyles();
	const [ anchorUserMenu, setAnchorUserMenu ] = useState(false)
	const openUserMenu = Boolean(anchorUserMenu)

	return (
		<>
			<AppBar position="static" elevation={3}>
				<Container maxWidth='lg'>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Anunx
						</Typography>
						<Link href='/user/publish'>
							<Button color="inherit" variant='outlined'>
								Advertise and Sell
							</Button>
						</Link>
						<IconButton 
							color='secondary'
							onClick={(e) => setAnchorUserMenu(e.currentTarget)}
						>
							{
								true === false
								? <Avatar src='' />
								: <AccountCircle />
							}
							<Typography
								variant='subtitle2'
								color='secondary'
								className={classes.userName}
							>
								Brunno Hibbeln
							</Typography>
						</IconButton>

						<Menu
							anchorEl={anchorUserMenu}
							open={openUserMenu}
							onClose={() => setAnchorUserMenu(null)}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							<Link href='/user/dashboard'>
								<MenuItem>My Ads</MenuItem>
							</Link>
							<Link href='/user/publish'>
								<MenuItem>Publish new ad</MenuItem>
							</Link>
							<Divider className={classes.divider} />
							<MenuItem>Sign out</MenuItem>
						</Menu>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}

export default ButtonAppBar