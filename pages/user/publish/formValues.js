import * as yup from 'yup'

const initialValues = {
   title: '',
   category: '',
   description: '',
   price: '',
   email: '',
   name: '',
   phone: '',
   files: [],
}
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

export {
   initialValues,
   validationSchema,
}
