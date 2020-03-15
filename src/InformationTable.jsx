import { Table } from "antd";
import { arrayOf, shape, string } from "prop-types";
import React from "react";

const columns = [
  {
    title: "First name",
    dataIndex: "firstName",
    key: "firstName"
  },
  {
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName"
  },
  {
    title: "Phone number",
    dataIndex: "phoneNumber",
    key: "phoneNumber"
  }
];

const toDataSource = items =>
  items.map(({ phoneNumber, ...rest }) => ({
    ...rest,
    phoneNumber,
    key: phoneNumber
  }));

const InformationTable = props => {
  const { entries } = props;

  return <Table dataSource={toDataSource(entries)} columns={columns} />;
};

InformationTable.defaultProps = {
  entries: []
};

InformationTable.propTypes = {
  entries: arrayOf(
    shape({
      firstName: string.isRequired,
      lastName: string.isRequired,
      phoneNumber: string.isRequired
    })
  )
};

export default InformationTable;
