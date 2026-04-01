import { useForm } from "react-hook-form";

export function HookFormDemo(){


    const {register, handleSubmit, formState:{errors}} =  useForm();

    const submit = (data)=>{
        console.log(data);
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" {...register("UserName", {required:true, minLength:4})} type="text" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")?<span>Name Required</span>:<span></span>
                            &&
                            (errors.UserName?.type==="minLength")?<span>Name too short</span>: <span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" {...register("Mobile", {required:true, pattern:/^\+91\d{10}$/})} type="text" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")?<span>Mobile Required </span>: <span></span>
                            &&
                            (errors.Mobile?.type==="pattern")? <span>Invalid Mobile</span>: <span></span>
                        }
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}