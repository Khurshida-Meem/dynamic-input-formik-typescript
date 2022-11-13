import { Container } from "@mui/material";
import { green } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useFormik } from "formik";

let key = 0;

// const fields = [
//   {
//     id: 1,
//     query: "text field",
//     type: "text",
//     option: ["asdfgsdf"],
//   },
//   {
//     id: 2,
//     query: "DDL Field",
//     type: "DDL",
//     option: ["option 1", "option 2", "option 3", "option 4"],
//   },
//   {
//     id: 3,
//     query: "radio field",
//     type: "radio",
//     option: ["rad 1", "rad 2", "rad 3", ""],
//   },
//   {
//     id: 4,
//     query: "checkbox field",
//     type: "checkbox",
//     option: ["check 1", "check 2", "check 3"],
//   },
// ];

const InputGeneration = ({ fields }: any) => {
  let value = [];
  for (let i = 0; i < fields.length; i++) {
    const obj = {
      query: "",
      ans: fields[i].type === "checkbox" ? [] : "",
    };
    value.push(obj);
  }

  const [answers, setAnswers] = useState([]);

  const { values, setFieldValue, handleChange } = useFormik({
    initialValues: {
      value,
    },
    onSubmit: (values) => console.log(values),
  });

  console.log(values)

  const handleClickSubmit = () => {
    //@ts-ignore
    setAnswers(values);

    console.log(answers);
  };
  

  return (
    <Container sx={{ p: 3, m: 8, backgroundColor: green[50] }}>
      {fields?.map((item: any, index: number) => (
        <div key={index}>
            <p>{item.type}</p>
          {item.type === "text" && (
            <FormControl sx={{ mt: 3, width: "50%" }}>
              <TextField
                //@ts-ignore
                id={values.value[index].ans}
                //@ts-ignore
                name={values.value[index].ans}
                label={item.query}
                onChange={(e) => {
                  e.preventDefault();
                  values.value[index].ans = e.target.value;
                  values.value[index].query = item.query;
                }}
                variant="standard"
              />
            </FormControl>
          )}
          {item.type === "DDL" && (
            <FormControl sx={{ mt: 3, width: "50%" }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {item.query}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                //@ts-ignore
                id={values.value[index].ans}
                //@ts-ignore
                name={values.value[index].ans}
                label={item.query}
                onChange={(e) => {
                  const opIndex = e.target.value;
                  //@ts-ignore
                  values.value[index].ans = item.option[opIndex];
                  values.value[index].query = item.query;
                }}
                variant="standard"
              >
                {item.option.map((optionText: any) => (
                  <MenuItem key={index} value={index}>
                    {optionText}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {item.type === "radio" && (
            <FormControl sx={{ mt: 3 }}>
              <FormLabel id="demo-radio-buttons-group-label">
                {item.query}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                {item.option.map(
                  (field: any) =>
                    field !== "" && (
                      <FormControlLabel
                        key={key++}
                        //@ts-ignore
                        name={values.value[index].ans}
                        value={field}
                        control={<Radio />}
                        label={field}
                        onChange={(e) => {
                          //@ts-ignore
                          values.value[index].ans = e.target.value;
                          values.value[index].query = item.query;
                        }}
                      />
                    )
                )}
              </RadioGroup>
            </FormControl>
          )}
          {item.type === "checkbox" && (
            <FormControl sx={{ mt: 3 }}>
              <FormLabel id="demo-radio-buttons-group-label">
                {item.query}
              </FormLabel>
              {item.option.map(
                (field: any) =>
                  field !== "" && (
                    <FormControlLabel
                      key={key++}
                      //@ts-ignore
                      name={values.value[index].ans}
                      control={<Checkbox />}
                      value={field}
                      label={field}
                      onChange={(e) => {
                        //@ts-ignore
                        values.value[index].ans.push(e.target.value);
                        values.value[index].query = item.query;
                      }}
                    />
                  )
              )}
            </FormControl>
          )}
        </div>
      ))}
      <Button onClick={handleClickSubmit} variant="contained">
        Submit
      </Button>
    </Container>
  );
};

export default InputGeneration;
