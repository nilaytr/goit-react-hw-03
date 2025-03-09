import { Form, Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
    const initialValues = { name: '', number: '' };

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAdd(newContact);
    resetForm();
  };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
            <Form className={css.form}>
                <div>
                    <label className={css.formLabel} htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage className={css.formError} name="name" component="span" />
                </div>
                <div>
                    <label className={css.formLabel} htmlFor="number">Number</label>
                    <Field type="tel" name="number" id="number" />
                    <ErrorMessage className={css.formError} name="number" component="span" />
                </div>
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm