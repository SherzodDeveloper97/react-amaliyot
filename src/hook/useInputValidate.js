import { useState } from "react";

// Personal-Hook:
const useInputValidation = (initalValue) => {
    const [value, setValue] = useState(initalValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0;
    }

    const validateColor = validateInput() ? "text-danger" : null;

    return {value, onChange, validateInput, validateColor}

}

export default useInputValidation;