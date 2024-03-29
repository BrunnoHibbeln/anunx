import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

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

const Signup = () => {
   const classes = useStyles()
   const router = useRouter()
   const { setToasty } = useToasty()

   const handleFormSubmit = async (values) => {
      const response = await axios.post('/api/users', values)

      if (response.data.success) {
         setToasty({
            open: true,
            severity: 'success',
            text: 'Successfully registered data!',
         })

         router.push('auth/signin')
      }
   }

   return (
      <TemplateDefault>
         <Container 
            maxWidth
            component='main'
            className={classes.container}
         >
            <Typography
               component='h1'
               variant='h2'
               align='center'
               color='textPrimary'
            >
               Create your account
            </Typography>
            <Typography
               component='h5'
               variant='h5'
               align='center'
               color='textPrimary'
            >
               Advertise all over Brazil
            </Typography>
         </Container>

         <Container maxWidth='md'>
            <Box className={classes.box}>
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
                              <FormControl
                                 fullWidth
                                 error={errors.name && touched.name}
                                 className={classes.formControl}
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Name
                                 </InputLabel>
                                 <Input 
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                 />
                                 <FormHelperText>
                                    {
                                       errors.name && touched.name
                                       ?  errors.name
                                       :  null
                                    }
                                 </FormHelperText>
                              </FormControl>

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

                              <FormControl
                                 fullWidth
                                 error={errors.passwordConf && touched.passwordConf}
                                 className={classes.formControl}
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Password confirmation
                                 </InputLabel>
                                 <Input 
                                    name='passwordConf'
                                    type='password'
                                    value={values.passwordConf}
                                    onChange={handleChange}
                                 />
                                 <FormHelperText>
                                    {
                                       errors.passwordConf && touched.passwordConf
                                       ?  errors.passwordConf
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
                                       Sign up
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

export default Signup