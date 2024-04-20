import { useForm, SubmitHandler } from "react-hook-form";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Inputs = {
  from_name: string;
  from_email: string;
  message: string;
};

export default function ContactMe() {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const [isNotSubmited, setIsNotSubmited] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const form = useRef(null);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const API_KEY = process.env.REACT_APP_EMAILJS_API;
    const SERVICE_KEY = process.env.REACT_APP_EMAILJS_SERVICE;
    const TEMP_KEY = process.env.REACT_APP_EMAILJS_TEMPLATE;
    if (form.current && API_KEY && SERVICE_KEY && TEMP_KEY) {
      emailjs
        .sendForm(SERVICE_KEY, TEMP_KEY, form.current, {
          publicKey: API_KEY,
        })
        .then(
          () => {
            setIsSubmited(true);
            reset();
            setTimeout(() => {
              setIsSubmited(false);
            }, 3000);
          },
          (error) => {
            setIsNotSubmited(true);
            reset();
            setTimeout(() => {
              setIsNotSubmited(false);
            }, 3000);
          },
        );
    }
  };

  return (
    <div
      id="contactMe"
      className="mb-5 flex w-full scroll-m-16 flex-col items-start gap-3 p-3 md:w-1/2"
    >
      <SectionTitle title="Contact me" />
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className=" flex w-full flex-col gap-3 rounded bg-gray-700 p-3 text-slate-200 shadow"
      >
        <div className="flex flex-col justify-between gap-1">
          <label className="">Name:</label>
          <input
            placeholder="Enter Name"
            className="w-full rounded-sm p-3 text-gray-700 focus:outline-purple-500"
            type="text"
            {...register("from_name", { required: true })}
          />
          {errors.from_name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col justify-between gap-1">
          <label className="">Email:</label>
          <input
            placeholder="Enter Email"
            className="w-full rounded-sm p-3 text-gray-700 focus:outline-purple-500"
            type="text"
            {...register("from_email", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          {errors.from_email && (
            <span className="text-red-500">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="flex  flex-col justify-between gap-1">
          <label className="">Message:</label>
          <textarea
            placeholder="Message goes here..."
            className="h-20 w-full rounded-sm p-3 text-gray-700 focus:outline-purple-500"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-500">Message cannot be empty</span>
          )}
        </div>
        <div className="flex w-full justify-end gap-3">
          <button
            type="reset"
            className="w-1/3 cursor-pointer rounded  bg-purple-500 py-3 font-semibold transition-colors duration-300 hover:bg-purple-400"
          >
            Clear
          </button>
          <button
            type="submit"
            className="w-1/3 cursor-pointer rounded  bg-purple-500 py-3 font-semibold transition-colors duration-300 hover:bg-purple-400"
          >
            Submit
          </button>
        </div>
      </form>
      <span
        className={`fixed right-3 top-16 rounded border border-green-500 bg-slate-100 p-2 text-green-500 transition-transform duration-300 ${isSubmited ? "translate-x-0" : "translate-x-96"}`}
      >
        Form sent successfully!
      </span>
      <span
        className={`fixed right-3 top-16 rounded border border-red-500 bg-slate-100 p-2 text-red-500 transition-transform duration-300 ${isNotSubmited ? "translate-x-0" : "translate-x-96"}`}
      >
        An error occured!
      </span>
    </div>
  );
}
