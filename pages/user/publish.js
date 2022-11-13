import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
   Box,
   Container,
   Select,
   TextField,
   Typography,
   Button,
   IconButton,
   FormControl,
   InputLabel,
   OutlinedInput,
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
      .max(3, 'Write a shorter price')
      .required('Required field'),
})

const Publish = () => {
   const classes = useStyles()
   const [ files, setFiles ] = useState([])

   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: ( acceptedFile ) => {
         const newFiles = acceptedFile.map(file => {
            return Object.assign(file, {
               preview: URL.createObjectURL(file)
            })
         })

         setFiles([
            ...files,
            ...newFiles,
         ])
      }
   })

   const handleRemoveFile = fileName => {
      const newFileState = files.filter(file => file.name !== fileName)
      setFiles(newFileState)
   }

   return (
      <TemplateDefault>

         <Formik
            initialValues={{
               title: '',
               category: '',
               description: '',
               price: '',
            }}
            validationSchema={validationSchema}
            onSubmit={() => {
               console.log('ok', values)
            }}
         >
            {
               ({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
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
                              <FormControl error={errors.title} fullWidth>
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
                                    { errors.title }
                                 </FormHelperText>
                              </FormControl>

                              <br /> <br />

                              <FormControl error={errors.category} fullWidth>
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
                                    { errors.category }
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
                                 color='textPrimary'
                              >
                                 The first image will be the main picture of the ad.
                              </Typography>
                              <Box className={classes.thumbsContainer}>
                                 <Box className={classes.dropzone} {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <Typography variant='body2' color='textPrimary'>
                                       Click to add or drag the image here.
                                    </Typography>
                                 </Box>

                                 {
                                    files.map((file, index) => (
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
                           </Box>
                        </Container>

                        {/* DESCRIPTION */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <FormControl error={errors.description} fullWidth>
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
                                    variant='outlined'
                                 />
                                 <FormHelperText>
                                    { errors.description }
                                 </FormHelperText>
                              </FormControl>
                           </Box>
                        </Container>
                        
                        {/* PRICE */}
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <Typography
                                 component='h6'
                                 variant='h6'
                                 color='textPrimary'
                              >
                                 Price
                              </Typography>
                              <br />
                              <FormControl
                                 error={errors.price}
                                 fullWidth
                                 variant='outlined'
                              >
                                 <InputLabel>Value</InputLabel>
                                 <OutlinedInput 
                                    name='price'
                                    value={values.price}
                                    onChange={handleChange}
                                    helperText={errors.description}
                                    labelWidth={40}
                                    startAdornment={
                                       <InputAdornment position='start'>$</InputAdornment>
                                    }
                                 />
                                 <FormHelperText>
                                    { errors.price }
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
                              <TextField 
                                 label='Name'
                                 variant='outlined'
                                 size='small'
                                 fullWidth
                              />
                              <br /> <br />
                              <TextField 
                                 label='E-mail'
                                 variant='outlined'
                                 size='small'
                                 fullWidth
                              />
                              <br /> <br />
                              <TextField 
                                 label='Phone'
                                 variant='outlined'
                                 size='small'
                                 fullWidth
                              />
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