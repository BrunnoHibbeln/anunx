import { Formik } from 'formik'

import {
   Box,
   Container,
   Select,
   Typography,
   Button,
   FormControl,
   InputLabel,
   InputAdornment,
   MenuItem,
   FormHelperText,
   Input,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'
import FileUpload from '../../../src/components/FileUpload'

const Publish = () => {
   const classes = useStyles()

   return (
      <TemplateDefault>

         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               console.log('ok', values)
            }}
         >
            {
               ({
                  touched,
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
               }) => {

                  return (
                     <form onSubmit={handleSubmit}>

                        {/* PAGE TITLE */}
                        <Container maxWidth='sm'>
                           <Typography
                              component='h1'
                              variant='h2'
                              align='center'
                              color='primary'
                           >
                              Publish ad
                           </Typography>
                           <Typography
                              component='h5'
                              variant='h6'
                              align='center'
                              color='textPrimary'
                           >
                              The more detailed, better.
                           </Typography>
                        </Container>
               
                        <br /><br />

                        {/* AD TITLE AND CATEGORY */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <FormControl
                                 error={errors.title && touched.title}
                                 fullWidth
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Ad title
                                 </InputLabel>
                                 <Input
                                    name='title'
                                    value={values.title}
                                    onChange={handleChange}
                                 />
                                 <FormHelperText>
                                    {
                                       errors.title && touched.title
                                       ? errors.title
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>

                              <br /> <br />

                              <FormControl
                                 error={errors.category && touched.category}
                                 fullWidth
                              >
                                 <InputLabel
                                    className={classes.inputLabel}
                                 >
                                    Category
                                 </InputLabel>
                                 <Select 
                                    name='category'
                                    value={values.category}
                                    fullWidth
                                    onChange={handleChange}
                                 >
                                    <MenuItem value='Babies and kids'>Babies and kids</MenuItem>
                                    <MenuItem value='Agriculture'>Agriculture</MenuItem>
                                    <MenuItem value='Fashion'>Fashion</MenuItem>
                                    <MenuItem value='Cars, Motocycles and Boats'>Cars, Motocycles and Boats</MenuItem>
                                    <MenuItem value='Services'>Services</MenuItem>
                                    <MenuItem value='Leisure'>Leisure</MenuItem>
                                    <MenuItem value='Animals'>Animals</MenuItem>
                                    <MenuItem value='Properties'>Properties</MenuItem>
                                    <MenuItem value='Equipments and tools'>Equipments and tools</MenuItem>
                                    <MenuItem value='Smartphones and Tablets'>Smartphones and Tablets</MenuItem>
                                    <MenuItem value='Sport'>Sport</MenuItem>
                                    <MenuItem value='Technology'>Technology</MenuItem>
                                    <MenuItem value='Job'>Job</MenuItem>
                                    <MenuItem value='Other'>Other</MenuItem>
                                 </Select>
                                 <FormHelperText>
                                    {
                                       errors.category && touched.category
                                       ? errors.category
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>
                           </Box>
                        </Container>
                        
                        {/* IMAGE */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <FileUpload 
                                 files={values.files}
                                 errors={errors.files}
                                 touched={touched.files}
                                 setFieldValue={setFieldValue}
                              />
                           </Box>
                        </Container>

                        {/* DESCRIPTION */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <FormControl
                                 error={errors.description && touched.description}
                                 fullWidth
                              >
                                 <InputLabel
                                    className={classes.inputLabel}
                                 >
                                    Write the details of what you are selling.
                                 </InputLabel>
                                 <Input
                                    name='description'
                                    value={values.description}
                                    onChange={handleChange}
                                    multiline
                                    minRows={6}
                                 />
                                 <FormHelperText>
                                    {
                                       errors.description && touched.description
                                       ? errors.description
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>
                           </Box>
                        </Container>
                        
                        {/* PRICE */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <FormControl
                                 error={errors.price && touched.price}
                                 fullWidth
                              >
                                 <InputLabel
                                    className={classes.inputLabel}
                                 >
                                    Price
                                 </InputLabel>
                                 <Input 
                                    name='price'
                                    value={values.price}
                                    onChange={handleChange}
                                    startAdornment={
                                       <InputAdornment position='start'>$</InputAdornment>
                                    }
                                 />
                                 <FormHelperText>
                                    {
                                       errors.price && touched.price
                                       ? errors.price
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>
                           </Box>
                        </Container>
                        
                        {/* CONTACT */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <Typography
                                 component='h6'
                                 variant='h6'
                                 color='textPrimary'
                                 gutterBottom
                                 >
                                 Contact Data
                              </Typography>

                              <FormControl
                                 error={errors.name && touched.name}
                                 fullWidth
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
                                       ? errors.name
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>
                              
                              <br /> <br />

                              <FormControl
                                 error={errors.email && touched.email}
                                 fullWidth
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Email
                                 </InputLabel>
                                    <Input
                                       name='email'
                                       value={values.email}
                                       onChange={handleChange}
                                    />
                                 <FormHelperText>
                                    {
                                       errors.email && touched.email
                                       ? errors.email
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>

                              <br /> <br />

                              <FormControl
                                 error={errors.phone && touched.phone}
                                 fullWidth
                              >
                                 <InputLabel 
                                    className={classes.inputLabel}
                                 >
                                    Phone
                                 </InputLabel>
                                    <Input
                                       name='phone'
                                       value={values.phone}
                                       onChange={handleChange}
                                    />
                                 <FormHelperText>
                                    {
                                       errors.phone && touched.phone
                                       ? errors.phone
                                       : null 
                                    }
                                 </FormHelperText>
                              </FormControl>

                              <br /> <br />
                           </Box>
                        </Container>
               
                        {/* SUBMIT BUTTON */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box textAlign="right">
                              <Button
                                 type='submit'
                                 variant='contained'
                                 color='primary'
                              >
                                 Publish ad
                              </Button>
                           </Box>
                        </Container>
                     </form>
                  )
               }
            }
         </Formik>

      </TemplateDefault>
   )
}

export default Publish