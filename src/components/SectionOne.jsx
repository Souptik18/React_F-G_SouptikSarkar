import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
function SectionOne() {
  const [value, setValue] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quality: "",
    clean: "",
    dining: "",
    beverage: "",
    id: nanoid(),
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("phone", JSON.stringify(value));

    // const newData = Object.entries(formData);
    navigate("/SubmittedMessage");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const id = e.target.id;

    const updatedFormData = { ...formData };
    if (checked) {
      updatedFormData[name] = id;
    } else {
      updatedFormData[name] = "";
    }
    setFormData(updatedFormData);
  };
  return (
    <div className="flex ml-24 mt-8">
      <div className="bg-slate-200 p-4">
        <div>
          <div className="bg-white p-1">
            <h2 className="text-2xl mb-2">Aromatic Bar</h2>
            <p>
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. <br />
              Please fill out this questionnaire. <br />
              Thank you.
            </p>
          </div>
          <form
            className="mt-8 grid grid-cols-2 gap-8 bg-white p-4"
            onSubmit={handleSubmit}
          >
            <div className="">
              <label htmlFor="name" className="block">
                Customer Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                className="border-2 border-neutral-200 w-full p-1"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Jane Doe"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="email" className="block">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                className="border-2 border-neutral-200 w-full p-1"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="Example: jane@example.com"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="phone" className="block">
                Phone<span className="text-red-500">*</span>
              </label>
              <PhoneInput
                className="border-2 border-neutral-200 w-full p-1"
                international
                required
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={value}
                onChange={setValue}
              />
            </div>
            <div className="col-span-1 col-start-1 col-end-2">
              <label>
                Please rate the quality of the service you received from your
                host
                <span className="text-red-500">*</span>
              </label>
              <div>
                <input
                  className="mr-"
                  type="checkbox"
                  name="quality"
                  id="Excellent"
                  checked={formData.quality === "Excellent"}
                  onChange={handleChange}
                />
                <label htmlFor="Excellent" className="mr-8">
                  Excellent
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="quality"
                  id="Good"
                  checked={formData.quality === "Good"}
                  onChange={handleChange}
                />
                <label htmlFor="Good" className="mr-8">
                  Good
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="quality"
                  id="Fair"
                  checked={formData.quality === "Fair"}
                  onChange={handleChange}
                />
                <label htmlFor="Fair" className="mr-8">
                  Fair
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="quality"
                  id="Bad"
                  checked={formData.quality === "Bad"}
                  onChange={handleChange}
                />
                <label htmlFor="Bad" className="mr-8">
                  Bad
                </label>
              </div>
            </div>
            <div className="col-span-1">
              <label>
                Please rate the quality of your beverage
                <span className="text-red-500">*</span>
              </label>
              <div>
                <input
                  className="mr-"
                  type="checkbox"
                  name="beverage"
                  id="Excellent"
                  checked={formData.beverage === "Excellent"}
                  onChange={handleChange}
                />
                <label htmlFor="BeverageExcellent" className="mr-8">
                  Excellent
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="beverage"
                  id="Good"
                  checked={formData.beverage === "Good"}
                  onChange={handleChange}
                />
                <label htmlFor="BeverageGood" className="mr-8">
                  Good
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="beverage"
                  id="Fair"
                  checked={formData.beverage === "Fair"}
                  onChange={handleChange}
                />
                <label htmlFor="BeverageFair" className="mr-8">
                  Fair
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="beverage"
                  id="Bad"
                  checked={formData.beverage === "Bad"}
                  onChange={handleChange}
                />
                <label htmlFor="BeverageBad" className="mr-8">
                  Bad
                </label>
              </div>
            </div>
            <div className="col-span-1 col-start-1 col-end-2">
              <label>
                Was the restaurant clean
                <span className="text-red-500">*</span>
              </label>
              <div>
                <input
                  className="mr-"
                  type="checkbox"
                  name="clean"
                  id="Excellent"
                  checked={formData.clean === "Excellent"}
                  onChange={handleChange}
                />
                <label htmlFor="CleanExcellent" className="mr-8">
                  Excellent
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="clean"
                  id="Good"
                  checked={formData.clean === "Good"}
                  onChange={handleChange}
                />
                <label htmlFor="CleanGood" className="mr-8">
                  Good
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="clean"
                  id="Fair"
                  checked={formData.clean === "Fair"}
                  onChange={handleChange}
                />
                <label htmlFor="CleanFair" className="mr-8">
                  Fair
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="clean"
                  id="Bad"
                  checked={formData.clean === "Bad"}
                  onChange={handleChange}
                />
                <label htmlFor="CleanBad" className="mr-8">
                  Bad
                </label>
              </div>
            </div>
            <div className="col-span-1">
              <label>
                Please rate the overall dining experience
                <span className="text-red-500">*</span>
              </label>
              <div>
                <input
                  className="mr-"
                  type="checkbox"
                  name="dining"
                  id="Excellent"
                  checked={formData.dining === "Excellent"}
                  onChange={handleChange}
                />
                <label htmlFor="DiningExcellent" className="mr-8">
                  Excellent
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="dining"
                  id="Good"
                  checked={formData.dining === "Good"}
                  onChange={handleChange}
                />
                <label htmlFor="DiningGood" className="mr-8">
                  Good
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="dining"
                  id="Fair"
                  checked={formData.dining === "Fair"}
                  onChange={handleChange}
                />
                <label htmlFor="DiningFair" className="mr-8">
                  Fair
                </label>
                <input
                  className="mr-"
                  type="checkbox"
                  name="dining"
                  id="Bad"
                  checked={formData.dining === "Bad"}
                  onChange={handleChange}
                />
                <label htmlFor="DiningBad" className="mr-8">
                  Bad
                </label>
              </div>
            </div>

            <hr className="w-full col-span-2 border-1 border-slate-400" />
            <div className="col-span-2 flex justify-end">
              <button type="submit" className="text-white bg-green-500 p-2">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
