import * as yup from 'yup'

const inicialValues = {
   name: '',
   email: '',
   password: '',
   passwordConf: '',
}

const validationSchema = yup.object().shape({
   name: yup.string()
      .required('Required field'),
   email: yup.string()
      .email('Write a valid email address')
      .required('Required field'),
   password: yup.string()
      .min(6, 'Write a longer password')
      .required('Required field'),
   passwordConf: yup.string()
      .oneOf([yup.ref('password'), null], 'The passwords must be the same')
      .required('Required field'),
})

export {
   inicialValues,
   validationSchema,
}