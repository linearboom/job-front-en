import React, { useState } from "react";

const EditWorkExp = ({ userData, setModal }) => {
  const [companyname, setCompanyName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setModal(false);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="px-4" style={{ marginTop: "30px" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Company Name"
            required
            id="companyname"
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyname}
          />
        </div>
        <button type="submit">Hide Modal</button>
      </form>
    </div>
  );
};

export default EditWorkExp;
