import './form.scss';
import {Formik, Field, ErrorMessage, Form, useField} from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label,...props})=>{
const [field,meta]= useField(props)
    return(
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {
                meta.touched && meta.error? (<div className='error'>{meta.error}</div>): null
            }
        </>
    )
}

const FormComponentFormik = () => {

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: '',
                currency: '',
                text: '',
                terms: false,
            }}
            validationSchema={Yup.object({
                name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
                email: Yup.string().email('Не правильный email адрес').required('Обязательное поле'),
                amount: Yup.number().min(10, 'Не менее 10').required('Обязательное поле'),
                currency: Yup.string().required('Обязательное поле'),
                text: Yup.string().min(10, 'Минимум 10 символов'),
                terms: Yup.boolean().required('Необходимо согласиться').oneOf([true], 'Необходимо согласиться'),
            })}
        >
            <Form className='form'>
                <h2>Отправить пожертвование в файл FormComponentFormik</h2>
                <MyTextInput
                    label='Ваше имя'
                    id='name'
                    name='name'
                    type='text'
                />
                <MyTextInput
                    label='Ваша почта'
                    id='email'
                    name='email'
                    type='email'
                />
                <label htmlFor='amount'>Количество</label>
                <Field
                    id='amount'
                    name='amount'
                    type='number'
                />
                <ErrorMessage className={'error'} name='amount' component='div'/>
                <label htmlFor='currency'>Валюта</label>
                <Field
                    id='currency'
                    name='currency'
                    as='select'>
                    <option value=''>Выберите валюту</option>
                    <option value='USD'>USD</option>
                    <option value='UAH'>UAH</option>
                </Field>
                <ErrorMessage className={'error'} name='currency' component='div'/>
                <label htmlFor='text'>Ваше сообщение</label>
                <Field
                    id='text'
                    name='text'
                    as='textarea'
                />
                <ErrorMessage className={'error'} name='text' component='div'/>
                <label className='checkbox'>
                    <Field name='terms'
                           type='checkbox'/>
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className={'error'} name='terms' component='div'/>
                <button type='submit'>Отправить</button>
            </Form>
        </Formik>
    )
}

export default FormComponentFormik;
