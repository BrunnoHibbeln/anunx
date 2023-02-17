import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/client'
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
	headButton: {
		marginRight: 10,
	},	
	userName: {
		marginLeft: '8px'
	},
	divider: {
		margin: '8px 0px'
	},
}))

const ButtonAppBar = () => {
	const classes = useStyles();
	const [ anchorUserMenu, setAnchorUserMenu ] = useState(false)
	const [ session ] = useSession()

	const openUserMenu = Boolean(anchorUserMenu)

	return (
		<>
			<AppBar position="static" elevation={3}>
				<Container maxWidth='lg'>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Anunx
						</Typography>
						<Link href={session ? '/user/publish' : '/auth/signin'} passHref>
							<Button
								color="inherit"
								variant='outlined'
								className={classes.headButton}
							>
								Advertise and Sell
							</Button>
						</Link>

						{
							session
							? (
								<IconButton 
									color='secondary'
									onClick={(e) => setAnchorUserMenu(e.currentTarget)}
								>
									{
										session.user.image
											? <Avatar src={session.user.image} />
											: <AccountCircle />
									}
									<Typography
										variant='subtitle2'
										color='secondary'
										className={classes.userName}
									>
										{session.user.name}
									</Typography>
								</IconButton>
							) : null
						}

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
							<MenuItem onClick={() => signOut({
								callbackUrl: '/'
							})}>Sign out</MenuItem>
						</Menu>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}

export default ButtonAppBar