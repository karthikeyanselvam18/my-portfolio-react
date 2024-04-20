import { error } from "console";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionTitle from "./SectionTitle";

type Inputs = {
  from_name: string;
  from_email: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("from_email")); // watch input value by passing the name of it

  return (
    <div id="ContactMe"
    className="mb-5 flex scroll-m-16 flex-col items-start gap-3 p-3">
          <SectionTitle title="Contact me" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex w-full flex-col gap-3 rounded bg-gray-700 p-3 text-slate-200 shadow"
      >
        <div className="flex flex-col justify-between gap-1">
          <label className="">Name:</label>
          <input
            placeholder="Enter Name"
            className="w-full rounded-sm p-3 text-gray-700 focus:outline-purple-500 md:w-3/4"
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
            className="w-full rounded-sm p-3 text-gray-700 focus:outline-purple-500 md:w-3/4"
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
            className="h-20 w-full rounded-sm p-3 text-gray-700 focus:outline-purple-500 md:w-3/4"
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
    </div>
  );
}
