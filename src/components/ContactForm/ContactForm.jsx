import { Form, Formik, Field } from 'formik';
import { ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from "yup";

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
            <Form>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="span" />

                <label htmlFor="number">Number</label>
                <Field type="tel" name="number" id="number" />
                <ErrorMessage name="number" component="span" />

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm