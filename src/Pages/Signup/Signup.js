import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import signup from '../../assets/images/signup.png';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }



    const handleSignup = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully!')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
    }




    return (
        <div style={{ display: 'flex', gap: '30px', marginBottom: '50px' }}>
            <div className='mt-40 ml-80'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center font-bold text-success'>Sign Up</h2>

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

                    <p>Already have an account  <Link className='text-secondary' to="/login">Please Login</Link></p>

                </div>

            </div>

            <div className='mt-40'>
                <img height={400} width={400} src={signup} alt="" />
            </div>
        </div>
    );
};

export default Signup;