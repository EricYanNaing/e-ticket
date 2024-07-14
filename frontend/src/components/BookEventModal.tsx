import { FC } from "react";

interface BookEventModalProps {
  showModal: boolean; // Type for showModal prop
  closeModal: () => void; // Type for closeModal prop, a function with no arguments and returning void
}

const BookEventModal: FC<BookEventModalProps> = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <>
          {/* Modal backdrop with blur effect */}
          <div className="fixed h-full mt-0 inset-0 bg-black opacity-50 z-50"></div>

          {/* Modal dialog */}
          <div className="fixed inset-0 mt-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-80">
              <div className="flex items-center justify-center mb-4">
                <h2 className="ml-2 font-medium text-lg">Check Out</h2>
              </div>

              <hr className="font-medium" />

              <div className=" pt-3 pb-2 ">
                <p className="text-gray-500 ">Choose ticket type</p>
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value="1"
                      className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    />
                    GA
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value="2"
                      className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    />
                    VIP
                  </label>
                </div>
              </div>

              <div className=" pt-3 pb-2 ">
                <p className="text-gray-500 ">Event</p>
                <input
                  type="text"
                  name="price"
                  value="Event A"
                  disabled
                  className=" block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>

              <div className=" pt-3 pb-2 ">
                <p className="text-gray-500 ">Event Place</p>
                <input
                  type="text"
                  name="price"
                  value="Event Venue"
                  disabled
                  className=" block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>

              <div className=" pt-3 pb-2 ">
                <p className="text-gray-500 ">Event Date</p>
                <input
                  type="text"
                  name="price"
                  value="12 July 2024"
                  disabled
                  className=" block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>

              <div className=" pt-3 pb-2 ">
                <p className="text-gray-500 ">Price</p>
                <input
                  type="text"
                  name="price"
                  value="200"
                  disabled
                  className=" block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>

              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 duration-300 text-white w-full h-10 mt-4 rounded-md"
              >
                Book Event
              </button>
              <button
                onClick={closeModal}
                className=" hover:bg-gray-100 border border-red-500 duration-300  w-full h-10 mt-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookEventModal;
