import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { json, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import docc from "../../../assets/images/docc.avif";
import axios from "axios";

const AddDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getDoctors();
  }, []);

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:9000/appointmentSpecialty`);
      const data = await res.json();
      return data;
    },
  });
  const getDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:9000/doctor-users");
      if (res.data?.length > 0) {
        setDoctors(res?.data);
      }
      console.log("res", res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddDoctor = (data) => {
    const resu = doctors?.filter((items) => {
      return items.email === data.email;
    });
    if (resu && resu.length > 0) {
      toast.error(`This Email is Already Used by ${resu ? resu[0]?.name : ""}`);
      return;
    } else {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            console.log(imgData.data.url);
            const doctor = {
              name: data.name,
              email: data.email,
              specialty: data.specialty,
              image: imgData.data.url,
            };

            //Save Doctor Information to the Database

            fetch("http://localhost:9000/doctors", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(doctor),
            })
              .then((res) => {
                res.json();
                console.log("res", res);
              })
              .then((result) => {
                console.log(result);
                saveUser(data);
              });
          }
        });
    }
  };

  const saveUser = (datas) => {
    const user = {
      name: datas?.name,
      email: datas.email,
      role: "doctor",
      password: "Doctor124",
    };
    fetch("http://localhost:9000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        toast.success(`${datas.name} is added successfully`);
        navigate("/dashboard/managedoctors");
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div className="w-96 p-7 mt-10 ml-20">
        <h2 className="text-3xl font-bold text-red-600 ml-20">Add A Doctor</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select
              {...register("specialty")}
              className="select input-bordered w-full max-w-xs"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "Photo is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && <p className="text-red-600">{errors.img.message}</p>}
          </div>

          <br />
          <input
            className="btn btn-accent w-full"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>

      <div className="mt-20 ml-0">
        <img height={400} width={400} src={docc} alt="" />
      </div>
    </div>
  );
};

/**
 * Three places to store images
 *
 * 1. image hosting server
 * 2. file system of your server
 * 2. mongoDb
 */

export default AddDoctor;
