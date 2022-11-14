import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
   box: {
      background: theme.palette.background.white,
      padding: theme.spacing(3)
   },
   boxContainer: {
      paddingBottom: theme.spacing(3),
   },
   thumbsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '15px',
   },
   inputLabel: {
      fontWeight: 400,
      color: theme.palette.primary.main,
   },
}))

export default useStyles