import { useFormik } from "formik";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";
import { Box } from "@mui/material";

const PhoneTemp = () => {
  // @ts-ignore
  const { values, handleSubmit, setFieldValue } = useFormik({
    initialValues: { phone: "" },
    // @ts-ignore
    onSubmit: () => saveHandler(values),
  });

  const saveHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mt: 5, ml:10 }}>
        <PhoneInput
          containerStyle={{ display: "flex", justifyContent: "space-between" }}
          enableSearch
          country={"bd"}
          value={values.phone}
          onChange={(value) => {
            setFieldValue("phone", value);
          }}
        />
      </Box>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PhoneTemp;
