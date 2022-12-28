import * as yup from 'yup'

const inicialValues = {
   email: '',
   password: '',
}

const validationSchema = yup.object().shape({
   email: yup.string()
      .email('Write a valid email address')
      .required('Required field'),
   password: yup.string()
      .min(6, 'Write a longer password')
      .required('Required field'),
})

export {
   inicialValues,
   validationSchema,
}