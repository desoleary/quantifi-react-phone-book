import { Card } from "antd";
import { noop } from "lodash";
import { func } from "prop-types";
import React from "react";

import Form from "./Form";

const nameRules = [{ required: true }, { min: 2 }, { max: 50 }];

const fields = [
  {
    name: "firstName",
    label: "First name",
    rules: nameRules
  },
  {
    name: "lastName",
    label: "Last name",
    rules: nameRules
  },
  {
    name: "phoneNumber",
    label: "Phone number",
    mask: "###-###-####",
    rules: [
      { required: true },
      {
        pattern: /^\d{3}-\d{3}-\d{4}$/,
        message: "must be a valid phone number"
      }
    ]
  }
];

const initialFormData = fields.reduce(
  (memo, field) => ({ ...memo, [field.name]: null }),
  {}
);

const PhoneBookForm = props => {
  const { addEntryToPhoneBook } = props;

  return (
    <Card title="New Entry" style={{ width: 600 }}>
      <Form
        btnLabel="Create"
        formData={initialFormData}
        fields={fields}
        onSubmit={addEntryToPhoneBook}
      />
    </Card>
  );
};

PhoneBookForm.defaultProps = {
  addEntryToPhoneBook: noop
};

PhoneBookForm.propTypes = {
  addEntryToPhoneBook: func
};

export default PhoneBookForm;
