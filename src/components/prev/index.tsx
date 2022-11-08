import { useFormik } from "formik";
import React, { useState } from "react";

type Option = {
  option: string;
};

type values = {
  query: string;
  type: string;
  option?: string;
};

type Field = {
  id: number;
  query: string;
  type: string;
  option?: string[];
};
type inputFields = Field[];

const Landing = () => {
  const [fields, setFields] = useState<inputFields>([] as inputFields);


  const { handleSubmit, values, setFieldValue, resetForm } = useFormik({
    initialValues: {
      query: "",
      type: "",
      option: "",
    },
    onSubmit: (values: values) => console.log(values),
  });

  const handleAddField = () => {
    let object = {
      id: fields.length + 1,
      query: "",
      type: "",
      option: [],
    };

    setFields([...fields, object]);
    // resetForm();
  };

  const handleSave = () => {
    console.log(fields);
  };

  const handleAddOption = (field: Field) => {
    field.option?.push("");
  };

  
  console.log("hello")

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <div>
          {fields?.map((field, index) => (
            <div className="d-block" key={index}>
              <input
                type="text"
                name="query"
                id="query"
                onChange={(e) => {
                  field.query = e.target.value;
                  setFieldValue(
                    "query",
                    field.id === index ? e.target.value : ""
                  );
                }}
                value={field.query || values?.query}
              />

              <select
                name="type"
                id="type"
                value={field.type || values?.type}
                onChange={(e) => {
                  field.type = e.target.value;
                  setFieldValue(
                    "type",
                    field.id === index ? e.target.value : ""
                  );
                }}
              >
                <option value="text">text</option>
                <option value="DDL">DDL</option>
                <option value="radio">radio</option>
                <option value="checkbox">checkbox</option>
              </select>

              {/* add option */}
              <div className="d-block">
                <div className="d-block">
                  {field.option?.map((data, index) => (
                    <input
                      type="text"
                      name="option"
                      id="option"
                      onChange={(e) => {
                        setFieldValue("option", e.target.value);
                      }}
                      value={values?.option}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleAddOption(field)}
                >
                  Add Options
                </button>
              </div>
            </div>
          ))}
        </div>
        {fields?.length > 0 && (
          <button type="button" onClick={handleSave}>
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default Landing;
