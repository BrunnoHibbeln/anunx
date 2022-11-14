import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
   Box,
   Container,
   Select,
   Typography,
   Button,
   IconButton,
   FormControl,
   InputLabel,
   InputAdornment,
   MenuItem,
   FormHelperText,
   Input,
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
   mask: {},
   mainImage: {},

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
   dropzone: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '10px',
      width: 200,
      height: 150,
      margin: '0 15px 15px 0',
      backgroundColor: theme.palette.background.default,
      border: '2px dashed black'
   },
   thumb: {
      position: 'relative',
      width: '200px',
      height: '150px',
      margin: '0 15px 15px 0',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',

      '& $mainImage': {
         position: 'absolute',
         backgroundColor: 'blue',
         padding: '6px 10px',
         bottom: 0,
         left: 0,
      },

      '&:hover $mask': {
         display: 'flex',
      },

      '& $mask': {
         display: 'none',
         justifyContent: 'center',
         alignItems: 'center',
         textAlign: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.7)',
         width: '100%',
         height: '100%',
      }
   }
}))

const validationSchema = yup.object().shape({
   title: yup.string()
      .min(6, 'Write a longer title')
      .max(50, 'Write a shorter title')
      .required('Required field'),

   category: yup.string()
      .required('Required field'),

   description: yup.string()
      .min(50, 'Write a longer description')
      .required('Required field'),

   price: yup.number()
      .required('Required field'),

   email: yup.string()
      .email('Write a valid email address')
      .required('Required field'),

   name: yup.string()
      .required('Required field'),

   phone: yup.number()
      .required('Required field'),

   files: yup.array()
      .min(1, 'Select at least one image')
      .required('Required field'),
})

const Publish = () => {
   const classes = useStyles()
   const [ files, setFiles ] = useState([])

   return (
      <TemplateDefault>

         <Formik
            initialValues={{
               title: '',
               category: '',
               description: '',
               price: '',
               email: '',
               name: '',
               phone: '',
               files: [],
            }}
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

                  const { getRootProps, getInputProps } = useDropzone({
                     accept: 'image/*',
                     onDrop: ( acceptedFile ) => {
                        const newFiles = acceptedFile.map(file => {
                           return {
                              ...file,
                              preview: URL.createObjectURL(file)
                           }
                        })
                        
                        // setFieldValue('name','value')

                        setFieldValue('files', [
                           ...values.files,
                           ...newFiles,
                        ])
                     }
                  })
               
                  const handleRemoveFile = fileName => {
                     const newFileState = values.files.filter(
                        file => file.name !== fileName
                     )
                     setFieldValue('files', newFileState)
                  }

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
                              <Typography
                                 component='h6'
                                 variant='h6'
                                 color='textPrimary'
                              >
                                 Images
                              </Typography>
                              <Typography
                                 component='div'
                                 variant='body2'
                                 color={
                                    errors.files && touched.files
                                    ?  'error'
                                    :  'textPrimary'
                                 }
                              >
                                 The first image will be the main picture of the ad.
                              </Typography>

                              <Box className={classes.thumbsContainer}>
                                 <Box className={classes.dropzone} {...getRootProps()}>
                                    <input name='files' {...getInputProps()} />
                                    <Typography
                                       variant='body2'
                                       color={
                                          errors.files && touched.files
                                          ?  'error'
                                          :  'textPrimary'
                                       }
                                    >
                                       Click to add or drag the image here.
                                    </Typography>
                                 </Box>

                                 {
                                    values.files.map((file, index) => (
                                       <Box 
                                          key={file.name}
                                          className={classes.thumb}
                                          style={{ backgroundImage: `url(${file.preview})` }}
                                       >
                                          {
                                             index === 0 ?

                                             <Box className={classes.mainImage}>
                                                <Typography variant='body2' color='secondary'>
                                                   Main
                                                </Typography>
                                             </Box>

                                             : null
                                          }

                                          <Box className={classes.mask}>
                                             <IconButton
                                                color='secondary'
                                                onClick={() => handleRemoveFile(file.name)}
                                             >
                                                <DeleteForever fontSize="large" />
                                             </IconButton>
                                          </Box>
                                       </Box>
                                    ))
                                 }
                              </Box>

                              {
                                 errors.files && touched.files

                                 ?  <Typography
                                       variant='body2'
                                       color='error'
                                       gutterBottom
                                    >
                                       {errors.files}
                                    </Typography>

                                 :  null
                              }

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