import { useFormik } from "formik";
import * as Yup from 'yup'
function SignField  () {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
        },
        onSubmit: values => {
            alert('Excellent')
        },
        validate: values => {
            let errors = {}

            if(!values.name){
                errors.name = 'Something wrong'
            }

            if(!values.email){
                errors.email = 'Something wrong'
            }
            else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)){
                errors.email = 'Try again'
            }

            if(!values.phoneNumber){
                errors.email = 'Something wrong'
            }
            else if(values.phoneNumber.toString().length !== 12){
                errors.phoneNumber = 'Try again'
            }

            return errors;
        },
    })

    console.log("Form values", formik.values)
    console.log("Form errors:", formik.errors)


    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <p>Your name:</p>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                <p>Your email:</p>
                <input type="text" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <p>Your phone:</p>
                <input type="number" name="phoneNumber" id="number" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
                {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignField;