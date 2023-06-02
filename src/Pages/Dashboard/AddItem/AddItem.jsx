import React from "react";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";

const img_hosting_token = import.meta.env.VITE_UPLOAD_TOKEN;

const AddItem = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // ! for image-------------------
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgResponse) => {
        console.log(imgResponse);
      });

    // !----------------------------------
  };
  console.log(errors);

  return (
    <div className="w-full px-10 bg-slate-300 ml-5 mb-6 rounded-lg">
      <Helmet>
        <title>Bistro Boss | Add an Item</title>
      </Helmet>
      <SectionTitle
        subheading="What's new?"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        {/* for category */}
        <div className="flex gap-4 my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* for text text area */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        {/* for file upload */}
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <input
          className="btn btn-sm mt-4 btn-outline bg-yellow-300 text-black mb-3"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
