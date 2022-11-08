import { useState } from "react";

type Option = {
  option: string;
};

type inputProps = {
  inputDto: {
    handleChange: any;
    setFieldValue: any;
    values?: {
      query: string;
      type: string;
      options?: Options[];
    };
    index: number;
    setCurrIndex: any;
    field: any;
    setField:any
  };
};

type Options = Option[];

const InputField = ({ inputDto }: inputProps) => {
  const [options, setOptions] = useState<Options>([] as Options);
  const [isAdd, setIsAdd] = useState(false);

  const { values, setFieldValue, setCurrIndex, index, field, handleChange, setField } =
    inputDto;

  const handleAddOption = () => {
    const payload = {
      option: "",
    };

    setOptions([...options, payload]);
    setIsAdd(true);
  };



  return (
    <div className="mt-3">
      <input
        type="text"
        name="query"
        id="query"
        onChange={handleChange}
        value={values?.query}
        
      />
      
      <select
        name="type"
        id="type"
        value={values?.type}
        onChange={handleChange}
      > 
        <option value="text">text</option>
        <option value="DDL">DDL</option>
        <option value="radio">radio</option>
        <option value="checkbox">checkbox</option>
      </select>
      <div className="App">
        {isAdd && (
          <input
            className="d-block mt-3"
            type="text"
            name="option"
            id="option"
          />
        )}
      </div>
      <button className="mt-3 App" onClick={handleAddOption} type="button">
        Add Options
      </button>
    </div>
  );
};

export default InputField;
