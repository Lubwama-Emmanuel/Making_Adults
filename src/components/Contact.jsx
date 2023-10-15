import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import AppSection from "../ui/AppSection";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";

// connect data
const data = [
  {
    id: 1,
    item: "take a 10-minute survey and debrief your answers by zoom",
    checked: false,
  },
  {
    id: 2,
    item: "get on a zoom call with 8-10 peers and design something cool",
    checked: false,
  },
  {
    id: 3,
    item: "join in with 20+ other young adults for an in-person workshop",
    checked: false,
  },
  {
    id: 4,
    item: "tell me more",
    checked: false,
  },
];

const response = {};
let clickedValues = [];
let checkedValue = [];

export default function Contact() {
  const [email, setEmail] = useState("");

  const [checking, setChecking] = useState();

  let notify;

  async function handleSubmit(e) {
    e.preventDefault();

    response.email = email;

    for (let item of clickedValues) {
      checkedValue.push(item.item);
    }

    response.checkedValue = checkedValue;

    if (!response.checkedValue || !response.email) {
      notify = () => toast.error("Some fields are missing");
      notify();
      return;
    }

    // make call to the backend API
    try {
      const res = await axios.post(
        "https://api.ashcreekadvisors.com/api/EmailSender/contact/newContact",
        response
      );

      // IF ALL IS WELL
      if (res.statusText === "OK") {
        notify = () => toast.success("Sent Successfully");
        notify();
        setTimeout(function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 3000);
      }
    } catch (error) {
      notify = () => toast.error("Check your internet");
      notify();
    }

    setChecking(false);
    setEmail("");
  }
  return (
    <AppSection className="m-auto max-w-[90%]">
      <div
        id="contact"
        className="mx-auto space-y-8 sm:mb-10 md:max-w-[98%] lg:max-w-[90%]"
      >
        <Heading number={3} title={"Connect"} />
        <div className="grid gap-[2%] sm:grid-cols-2">
          <div>
            <h3 className="mb-5 text-xl font-bold sm:text-2xl">
              What works for you?
            </h3>
            <form className=" space-y-2 px-5 text-lg font-medium">
              {data.map((el) => (
                <Checkbox
                  el={el}
                  checking={checking}
                  setChecking={setChecking}
                  key={el.id}
                />
              ))}
            </form>
          </div>
          <div className="space-y-5">
            <h3 className="mb-5 text-xl font-bold sm:text-2xl">
              Let's get in touch.
            </h3>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail((email) => e.target.value)}
                required
                className="rounded-full border border-blue-800 px-5 py-3 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
              />
            </form>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="w-26 rounded-full bg-blue-800 px-7 py-3 text-center text-2xl font-semibold text-stone-100 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <ToastContainer />
    </AppSection>
  );
}

const Checkbox = ({ el, checking }) => {
  function getCheckedValue(e) {
    if (e.target.checked) {
      el.checked = true;
    } else {
      el.checked = false;
    }
    clickedValues = data.filter((item) => item.checked);
  }

  return (
    <div className="space-x-2">
      <input
        type="checkbox"
        value={el.item}
        onChange={(e) => getCheckedValue(e)}
        checked={checking}
        className="sm:h-4 sm:w-4 w-5 h-5 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"
      />
      <label>{el.item}</label>
    </div>
  );
};
