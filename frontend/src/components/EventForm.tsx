import { CiCircleCheck } from "react-icons/ci";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const EventhtmlForm = () => {
  return (
    <div className="bg-white px-6 py-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create Your Event{" "}
        </h2>
        <Link to={"/"}>
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 p-2 text-white rounded-full">
            <IoArrowBackCircleSharp className="text-white" size={30} />
            Back
          </button>
        </Link>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-black">
              Event Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                placeholder="event name"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-s   placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Event Place
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                placeholder="event place"
                name="email"
                id="email"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-s   placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Ticket Quantity
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                placeholder="ticket quantity"
                min="1"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-s   placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 ">
              Event Description
            </label>
            <div className="mt-2.5">
              <textarea
                placeholder="event description"
                name="message"
                id="message"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-s ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-black">
              Event Date
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                placeholder="event date"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-black">
              Event Time
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                placeholder="event time"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-s   placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-black">
              Event Photo
            </label>
            <div className="mt-2.5">
              <input
                type="file"
                name="last-name"
                placeholder="event time"
                className="block w-full rounded-md border px-3.5 py-2 border-red-100 text-gray-900 shadow-s   placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="flex justify-center gap-2 items-center w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CiCircleCheck size={30} /> Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventhtmlForm;
