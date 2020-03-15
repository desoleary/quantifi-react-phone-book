import { useState } from "react";

const useFormErrors = () => {
  const [hasErrors, setHasErrors] = useState(false);

  const onFieldsChange = (changedFields, allFields) => {
    const hasError =
      allFields.find(({ errors }) => errors.length > 0) !== undefined;
    setHasErrors(hasError);
  };

  return { hasErrors, onFieldsChange };
};

export default useFormErrors;
