import React from "react";

type Option = {
  option: string;
};


type inputProps = {
  inputDto: {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setFieldValue: any;
    values?: {
      query: string;
      type: string;
      options?: Options[];
    };
    index: number;
    setCurrIndex: any;
    field: any;
  };
};
type Options = Option[];

const SingleInput = ({ inputDto }: inputProps) => {
  const { values } = inputDto;

  return (
    <div>
      <input type="text" name="query" id="query" />
      <select name="type" id="type">
        <option value="text">text</option>
        <option value="DDL">DDL</option>
        <option value="radio">radio</option>
        <option value="checkbox">checkbox</option>
      </select>
    </div>
  );
};

export default SingleInput;
