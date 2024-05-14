import React from "react";

function page() {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen flex-col">
        <h1 className="my-10 text-center font-bold text-4xl">Mark your Prayers for {new Date().toLocaleDateString()}</h1>
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Fajar</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Zohar</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Asar</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Maghrib</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Isha</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        
      </div>
    </div>
  );
}

export default page;
