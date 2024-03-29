import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import {
   Box,
   Button,
   Container,
   Typography,
   FormControl,
   Input,
   InputLabel,
   FormHelperText,
   CircularProgress,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import { inicialValues, validationSchema } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'
import { Alert } from '@material-ui/lab'
import Image from 'next/image'

const Signin = ({ APP_URL }) => {
   const classes = useStyles()
   const router = useRouter()
   const { setToasty } = useToasty()
   const [ session ] = useSession()

   console.log(session)

   const handleGoogleLogin = () => {
      signIn('google', {
         callbackUrl: `${APP_URL}/user/dashboard`
      })
   }

   const handleFormSubmit = (values) => {
      signIn('credentials', {
         email: values.email,
         password: values.password,
         callbackUrl: `${APP_URL}/user/dashboard`
      })
   }

   return (
      <TemplateDefault>
         <Container
            component='main'
            className={classes.container}
         >
            <Typography
               component='h1'
               variant='h2'
               align='center'
               color='textPrimary'
            >
               Sign in
            </Typography>
         </Container>

         <Container maxWidth='md'>
            <Box className={classes.box}>

               <Box
                  display='flex'
                  justifyContent='center'
               >
                  <Button
                     variant='contained'
                     color='primary'
                     startIcon={
                        <Image
                           src='/images/google.svg'
                           width={20}
                           height={20}
                           alt='Login with google'
                        />
                     }
                     onClick={handleGoogleLogin}
                  >
                     Entry with Google
                  </Button>
               </Box>

               <Box className={classes.orSeparator}>
                  <span>or</span>
               </Box>

               <Formik
                  initialValues={inicialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
               >
                  {
                     ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                     }) => {
                        return (
                           <form onSubmit={handleSubmit}>

                              {
                                 router.query.i === '1'
                                 ? (
                                    <Alert
                                       severity='error'
                                       className={classes.errorMessage}
                                    >
                                       Invalid username or password
                                    </Alert>
                                 )

                                 : null
                              }

                              <FormControl
                                 fullWidth
                                 error={errors.email && touched.email}
                                 className={classes.formControl}
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Email
                                 </InputLabel>
                                 <Input 
                                    name='email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                 />
                                 <FormHelperText>
                                    {
                                       errors.email && touched.email
                                       ?  errors.email
                                       :  null
                                    }
                                 </FormHelperText>
                              </FormControl>

                              <FormControl
                                 fullWidth
                                 error={errors.password && touched.password}
                                 className={classes.formControl}
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Password
                                 </InputLabel>
                                 <Input 
                                    name='password'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                 />
                                 <FormHelperText>
                                    {
                                       errors.password && touched.password
                                       ?  errors.password
                                       :  null
                                    }
                                 </FormHelperText>
                              </FormControl>

                              { 
                                 isSubmitting
                                 ?  (
                                    <CircularProgress className={classes.loading} />
                                 ) : (
                                    <Button
                                       type='submit'
                                       fullWidth
                                       variant='contained'
                                       color='primary'
                                       className={classes.submit}
                                    >
                                       Log in
                                    </Button>
                                 )
                              }

                           </form>
                        )
                     }
                  }
               </Formik>
            </Box>
         </Container>
      </TemplateDefault>
   )
}

Signin.getServerSideProps = async function() {
   return {
      APP_URL: process.env.APP_URL
   }
}

export default Signin