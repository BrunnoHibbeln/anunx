import {
   Box,
   Container,
   Grid,
   Typography,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core"
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
   footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(3),
      paddingBotton: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
         paddingTop: theme.spacing(6),
         paddingBotton: theme.spacing(6),
      }
   },
}))

const Footer = () => {
   const classes = useStyles()

   return (
      <Container
         maxWidth='lg'
         component='footer'
         className={classes.footer}
      >
         <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
               <Box textAlign='center'>
                  <Link href='#' passHref>
                     <Typography
                        color='textSecondary'
                        variant='subtitle1'
                     >
                        Help and contact
                     </Typography>
                  </Link>
               </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
               <Box textAlign='center'>
                  <Link href='#' passHref>
                     <Typography
                        color='textSecondary'
                        variant='subtitle1'
                     >
                        Security tips
                     </Typography>
                  </Link>
               </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
               <Box textAlign='center'>
                  <Link href='#' passHref>
                     <Typography
                        color='textSecondary'
                        variant='subtitle1'
                     >
                        Advertise and sell
                     </Typography>
                  </Link>
               </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
               <Box textAlign='center'>
                  <Link href='#' passHref>
                     <Typography
                        color='textSecondary'
                        variant='subtitle1'
                     >
                        Professional plan
                     </Typography>
                  </Link>
               </Box>
            </Grid>
         </Grid>
      </Container>
   )
}

export default Footer