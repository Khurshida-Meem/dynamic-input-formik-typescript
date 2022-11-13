import { useFormik, Field } from "formik";
import { useState } from "react";
import InputGeneration from "./inputGeneration";

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
  const [field, setField] = useState<Field>({} as Field);
  const [isInput, setIsInput] = useState(false);

  const { values, setFieldValue } = useFormik({
    initialValues: {
      query: field.query || "",
      type: field.type || "",
      option: field.option || [],
    },
    onSubmit: (values) => console.log(values),
  });

  const handleAddField = () => {
    let object = {
      id: fields.length + 1,
      query: "",
      type: "",
      option: [],
    };

    

    setFields([...fields, object]);
  };

  const HandleSave = () => {
    setIsInput(true);
  };

  const handleAddOption = (inputField: any) => {
    const newList = fields?.map((item: any, index) => {
      if (inputField.id === item.id) {
        return {
          ...item,
          option: [...item.option, ""],
        };
      }
      return item;
    });
    setFields(newList);
  };

  return (
    <div>
      {!isInput && (
        <div>
          <button onClick={handleAddField}>Add Field</button>
          <form>
            {fields?.map((item, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="query"
                  id="query"
                  onChange={(e) => {
                    item.query = e.target.value;
                    setFieldValue(
                      "query",
                      item.id === index ? e.target.value : ""
                    );
                  }}
                />
                <select
                  name="type"
                  id="type"
                  onChange={(e) => {
                    item.type = e.target.value;
                    setFieldValue(
                      "type",
                      item.id === index ? e.target.value : ""
                    );
                  }}
                >
                  <option value="text">text</option>
                  <option value="DDL">DDL</option>
                  <option value="radio">radio</option>
                  <option value="checkbox">checkbox</option>
                </select>
                <div>
                  {
                    //@ts-ignore
                    item?.option.map((opField, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          name={values.option[index]}
                          id={values.option[index]}
                          onChange={(e) => {
                            e.preventDefault();
                            //@ts-ignore
                            item.option[index] = e.target.value;
                            setFieldValue(values.option[index], e.target.value);
                          }}
                        />
                      </div>
                    ))
                  }
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    //@ts-ignore
                    setFieldValue(values.option.push(""));
                    setField(item);
                    handleAddOption(item);
                  }}
                >
                  Add Options
                </button>
              </div>
            ))}

            <button type="button" onClick={HandleSave}>
              Save
            </button>
            <button type="button" onClick={() => setFields([])}>
              Reset
            </button>
          </form>
        </div>
      )}
      {isInput && <InputGeneration fields={fields} />}

      
    </div>
  );
};

export default Landing;


