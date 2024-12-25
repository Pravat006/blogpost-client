import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Textarea from "./Textarea.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/post.services.js"

const UploadPost = () => {
  const [imagePreview, setimagePreview] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const { register, handleSubmit } = useForm();
//  const userData = useSelector(state=> state.auth.userData)
  // dropzone for drag-n-drop and click to upload functionality

  const onDrop = (acceptedimage) => {
    const file = acceptedimage[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setimagePreview(reader.result); // preview the uploaded image
        setIsImageUploaded(true); // enable additional form fields
      };
      reader.readAsDataURL(file);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  }); 

  const formSubmit = async (data) => {
    console.log({
      ...data,
      image: imagePreview,
    });
    if(data){
        await PostService.publishPost(data)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 m-0">
      <div className="bg-white shadow-lg rounded-lg p-3 max-w-2xl w-full m-0">
        {/* Drag and Drop Image Upload */}
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:border-gray-400"
        >
          <input {...getInputProps()} />
          {!imagePreview ? (
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Drag and drop an image here, or click to upload
              </p>
            </div>
          ) : (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          )}
        </div>

        {/* Display additional fields only if an image is uploaded */}
        {isImageUploaded && (
          <form className="mt-6" onSubmit={handleSubmit(formSubmit)}>
            {/* Title */}
            <Input
              label="Title"
              name="title"
              placeholder="Enter a title"
              {...register("title", {
                required: true,
              })}
            />

            {/* Description*/}
            <Textarea
              label="Description"
              placeholder="Enter the Description"
              rows={4}
              {...register("name", {
                required: true,
              })}
            />

            {/* Submit Button */}
            <Button text="Upload Post" type="submit" className="mt-2" />
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadPost;
