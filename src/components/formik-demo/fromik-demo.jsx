import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikDemo(){
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <Formik initialValues={{UserName:'', Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('Name Required').min(4, 'Name too short'), Mobile:yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')})} onSubmit={(user)=>console.log(user)}>
                {
                    form =>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field name="UserName" type="text" /></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                            <dt>Mobile</dt>
                            <dd><Field name="Mobile" type="text" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                        </dl>
                        <button disabled={(form.isValid)?false:true} type="submit">Submit</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}