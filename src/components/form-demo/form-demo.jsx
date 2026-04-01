import { useFormik } from "formik"
import * as yup from "yup";

export function FormDemo(){

   
    const formik = useFormik({
        initialValues: {
            UserName:'',
            Mobile: '',
            City: '-1',
            Gender:''
        },
        validationSchema: yup.object({
            UserName: yup.string().required('Name Required').min(4,'Name too short'),
            Mobile: yup.string().required('Mobile Required').matches(/^\+91\d{10}$/,'Invalid Mobile')
        }) ,
        onSubmit: (data)=>{
            console.log(data);
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h4>Register User</h4>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps('UserName')} name="UserName"  /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text"  onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Mobile"  /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>Your City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value='-1'>Choose City</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value='Male' /> <label>Male</label> 
                        <input onChange={formik.handleChange} type="radio" name="Gender" value='Female' /> <label>Female</label> 
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                </dl>
                <button disabled={(formik.isValid)?false:true} type="submit">Submit</button>
                <button className={(formik.dirty)?'d-inline':'d-none'} > Save</button>

                <div className={`mt-4 text-danger ${(formik.isValid)?'d-none':'d-block'}`}>
                    <div className="h3">Please check the following errors</div>
                    <ul>
                        {
                            Object.values(formik.errors).map(error=><li key={error}>{error}</li>)
                        }
                    </ul>
                </div>
            </form>
        </div>
    )
}