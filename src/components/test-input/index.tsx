import { FieldArray, FormikProvider, useFormik } from "formik";
import React from "react";

const TestInput = () => {
  const formData = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <FormikProvider value={formData}>
        {/* @ts-ignore */}
        <FieldArray name="work">
          {/* @ts-ignore */}
          {({ remove, push, form }) => (
            <div>
              {form.values.work?.map((value: any, index: any) => (
                <div key={index}>
                  <input
                    name={`work.${index}.name`}
                    id={`work.${index}.name`}
                    placeholder="Jane Doe"
                    type="text"
                    onChange={(e) => {
                      e.preventDefault();
                      //@ts-ignore
                      setFieldValue(`work.${index}.name`, e.target.value);
                    }}
                  />
                  <input
                    name={`work.${index}.email`}
                    placeholder="Jane@gmail.co"
                    type="text"
                    onChange={(e) => {
                      e.preventDefault();
                      //@ts-ignore
                      setFieldValue(`work.${index}.email`, e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => remove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="secondary"
                onClick={() => push({ name: "", email: "" })}
              >
                Add Input
              </button>
            </div>
          )}
        </FieldArray>
      </FormikProvider>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestInput;
