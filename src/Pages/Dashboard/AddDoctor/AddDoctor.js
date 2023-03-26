import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:9000/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    })


    const handleAddDoctor = data => {
        console.log(data);

    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl font-bold text-red-600'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    <label className="label"><span className="label-text">Speciality</span></label>
                    <select
                        {...register('specialty')}
                        className="select input-bordered w-full max-w-xs">

                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}
                            >{specialty.name}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("img", { required: "Photo is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img.message}</p>}
                </div>


                <br />
                <input className='btn btn-accent w-full' value="Add Doctor" type="submit" />

            </form>

        </div>
    );
};

export default AddDoctor;