import { Button, Form as FormAntd } from "antd";
import { noop } from "lodash";
import { arrayOf, bool, func, shape, string } from "prop-types";
import React from "react";
import { Input } from "./Field";
import { useFormErrors } from "./Hooks";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Form = props => {
  const { fields, formData, onSubmit, btnLabel } = props;

  const { hasErrors, onFieldsChange } = useFormErrors();

  return (
    <FormAntd
      {...layout}
      initialValues={formData}
      onFinish={onSubmit}
      onFieldsChange={onFieldsChange}
    >
      {fields.map(field => (
        <Input {...field} key={field.name} />
      ))}

      <FormAntd.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" disabled={hasErrors}>
          {btnLabel}
        </Button>
      </FormAntd.Item>
    </FormAntd>
  );
};

Form.defaultProps = {
  fields: [],
  formData: {},
  onSubmit: noop,
  btnLabel: "Submit"
};

Form.propTypes = {
  fields: arrayOf(
    shape({
      name: string.isRequired,
      label: string.isRequired,
      required: bool
    })
  ),
  formData: shape({}),
  btnLabel: string,
  onSubmit: func
};

export default Form;
