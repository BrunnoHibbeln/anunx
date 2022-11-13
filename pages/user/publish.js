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
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever, ErrorSharp } from '@material-ui/icons'

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
               The more detailed the better.
            </Typography>
         </Container>

         <br /><br />

         <Formik
            initialValues={{
               title: '',
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
                  console.log(errors)
                  return (
                     <form onSubmit={handleSubmit}>
                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                           <Typography
                              component='h6'
                              variant='h6'
                              color='textPrimary'
                           >
                              Ad title
                           </Typography>
                           <TextField 
                              name='title'
                              value={values.title}
                              onChange={handleChange}
                              label='Ex: Broken bicycle $30'
                              size='small'
                              fullWidth
                              error={errors.title}
                              helperText={errors.title}
                           />

                           <br /> <br />

                           <Typography 
                              component='h6'
                              variant='h6'
                              color='textPrimary'
                           >
                              Category
                           </Typography>
                           <Select 
                              native
                              value=''
                              fullWidth
                              onChange={() => {}}
                              inputProps={{
                                 name: 'age',
                              }}
                           >
                              <option value=''>Select</option>
                              <option value={1}>Babies and kids</option>
                              <option value={2}>Agriculture</option>
                              <option value={3}>Fashion</option>
                              <option value={3}>Cars, Motocycles and Boats</option>
                              <option value={3}>Services</option>
                              <option value={3}>Leisure</option>
                              <option value={3}>Animals</option>
                              <option value={3}>Properties</option>
                              <option value={3}>Equipments and tools</option>
                              <option value={3}>Smartphones and Tablets</option>
                              <option value={3}>Sport</option>
                              <option value={3}>Technology</option>
                              <option value={3}>Job</option>
                              <option value={3}>Other</option>
                           </Select>
                           </Box>
                        </Container>
                        
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

                        <Container maxWidth='md' className={classes.boxContainer}>
                           <Box className={classes.box}>
                              <Typography
                                 component='h6'
                                 variant='h6'
                                 color='textPrimary'
                              >
                                 Description
                              </Typography>
                              <Typography
                              component='div'
                              variant='body2'
                              color='textPrimary'
                              >
                                 Write the details of what you are selling.
                              </Typography>
                              <TextField 
                                 multiline
                                 minRows={6}
                                 variant='outlined'
                                 fullWidth
                              />
                           </Box>
                        </Container>

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
                              <FormControl fullWidth variant='outlined'>
                                 <InputLabel>Value</InputLabel>
                                 <OutlinedInput 
                                    //onChange={() = {}}
                                    startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                    labelWidth={40}
                                 />
                              </FormControl>
                           </Box>
                        </Container>

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