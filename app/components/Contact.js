import React from "react";
import { TbMailFast } from "react-icons/Tb";
import { BsWhatsapp } from "react-icons/Bs";

const Contact = () => {
  return (
    <div className="text-center pt-5">
      <h2 className="font-Abhaya text-3xl font-bold">Get in Touch</h2>
      <span className="font-Abhaya text-xl text-gray-500 italic">
        If you'd like to talk about a project, or my work, you can
      </span>
      <div className="flex flex-col sm:flex-row w-4/5 m-auto mt-4 ">
        <div className="sm:w-1/2 flex flex-col">
          <h3 className="font-Abhaya text-xl font-bold mb-4">Talk to Me</h3>
          <div className="">
            <div className="contact_card background flex flex-col justify-center items-center my-1">
              <TbMailFast size={55} />
              <h3>Email</h3>
              <span className="text-gray-500 mb-2">span@span.com</span>
              <button className="cta py-2">
                <span className="hover-underline-animation text-gray-500 font-Abhaya">
                  {" "}
                  write me{" "}
                </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    dataName="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="contact_card background flex flex-col justify-center items-center my-1">
              <BsWhatsapp size={45} className="m-4" />
              <h3>whatsapp</h3>
              <span className="text-gray-500 mb-2">+000 0000 0000</span>
              <button className="cta py-2">
                <span className="hover-underline-animation text-gray-500 font-Abhaya">
                  {" "}
                  write me{" "}
                </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    dataName="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>

            {/* <div className="contact_card flex flex-col justify-center items-center my-1">
              <i></i>
              <h3></h3>
              <span></span>
              <a>
                {" "}
                Write me <i></i>
              </a>
            </div> */}
          </div>
        </div>
        <div className="font-Abhaya text-xl font-bold mb-4">or</div>
        <div className="sm:w-1/2 flex flex-col">
          <h3 className="font-Abhaya text-xl font-bold mb-4">
            Write Me Your Project
          </h3>
          <form className="">
            <div className="mb-8 h-16 relative">
              <input
                className="p-3 background absolute top-0 left-0 w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] rounded-xl placeholder:font-semibold placeholder:px-4 placeholder:text-[rgba(0,0,0,.3)]"
                type="text"
                name="name"
                placeholder="jhone week"
              />
              <label className="p-2 absolute -top-4 left-5 background font-semibold text-[rgba(0,0,0,0.3)] text-sm">
                Name
              </label>
            </div>
            <div className="mb-8 h-16 relative">
              <input
                className="background p-3 absolute top-0 left-0 w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] rounded-xl placeholder:font-semibold placeholder:px-4 placeholder:text-[rgba(0,0,0,.3)]"
                type="email"
                name="email"
                placeholder="jhoneweek@mail.com"
              />
              <label className="absolute background -top-4 left-5  p-2 font-semibold text-[rgba(0,0,0,0.3)] text-sm">
                Email
              </label>
            </div>
            <div className="mb-8 h-44 relative">
              <textarea
                className=" background p-3 absolute resize-none  top-0 left-0 w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] rounded-xl placeholder:font-semibold placeholder:px-4 placeholder:text-[rgba(0,0,0,.3)] placeholder:pt-5"
                name="project"
                cols={50}
                rows={10}
                placeholder="Write me your project"
              />
              <label className="absolute -top-4 left-5 background p-2 font-semibold text-[rgba(0,0,0,0.3)] text-sm">
                Project
              </label>
            </div>
            <button className="btn">
              <span className="icon">
                <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              <span className="text">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
