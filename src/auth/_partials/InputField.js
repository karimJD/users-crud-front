import React from "react";
import { Input } from "@chakra-ui/react";
import { useField } from "@formiz/core";

const InputField = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isPristine,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props);
  const { label, type, required, placeholder } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const showError = !isValid && !isFocused && (!isPristine || isSubmitted);

  return (
    <div className={`demo-form-group ${showError ? "is-error" : ""}`}>
      <label className="demo-label" htmlFor={id}>
        {label}
        {required && " *"}
      </label>

      <Input
        key={resetKey}
        id={id}
        type={type || "text"}
        value={value || ""}
        className="demo-input"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-invalid={!isValid}
        aria-describedby={!isValid ? `${id}-error` : null}
        placeholder={placeholder}
        variant="filled"
        mb={3}
        mr={2}
      />

      {showError && (
        <div id={`${id}-error`} className="demo-form-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputField;
