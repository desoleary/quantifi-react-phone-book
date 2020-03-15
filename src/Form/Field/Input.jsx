import { Input as InputAntd } from "antd";
import { MaskedInput } from "antd-mask-input";
import { isNil } from "lodash";
import { object, string } from "prop-types";
import React from "react";
import FormItem from "./FormItem";

const Input = props => {
  const { label, name, rules, ...inputProps } = props;
  const { mask } = inputProps;
  const Widget = isNil(mask) ? InputAntd : MaskedInput;

  return (
    <FormItem label={label} name={name} rules={rules}>
      <Widget {...inputProps} placeholder={label} />
    </FormItem>
  );
};

Input.defaultProps = {
  mask: undefined
};

Input.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  rules: object,
  mask: string
};

export default Input;
