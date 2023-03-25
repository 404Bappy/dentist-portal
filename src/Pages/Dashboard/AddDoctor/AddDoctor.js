import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-red-600'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 charecter or longer" }, pattern: { value: /(?=.*[A-Z])(?=)(?=.*[0-9])/, message: "Password must be strong" } })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                </div>


                <br />
                <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>

        </div>
    );
};

export default AddDoctor;