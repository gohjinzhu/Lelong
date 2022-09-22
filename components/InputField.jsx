import {
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from "@chakra-ui/form-control";
import { Field, useField } from "formik";
  
  const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <FormControl isInvalid={meta.error && meta.touched} variant="floating" mb='0'>
        <Field {...field} {...props} />
        <FormLabel>{label}</FormLabel>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  };
  
  
export default InputField;



