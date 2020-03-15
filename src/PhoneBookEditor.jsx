import { element, number } from "prop-types";
import { Col, Row as RowAntd, Typography } from "antd";
import React from "react";
import { usePhoneBookStore } from "./Hooks";
import InformationTable from "./InformationTable";
import PhoneBookForm from "./PhoneBookForm";

const { Title } = Typography;

const Row = ({ children, span, offset }) => (
  <RowAntd gutter={[16, 32]}>
    <Col span={span} offset={offset}>
      {children}
    </Col>
  </RowAntd>
);

Row.defaultProps = {
  span: 12,
  offset: 2
};

Row.propTypes = {
  children: element.isRequired,
  span: number,
  offset: number
};

const PhoneBookEditor = () => {
  const { entries, addEntry } = usePhoneBookStore();

  const handleAddEntry = entry => {
    addEntry(entry);
  };

  return (
    <>
      <Row>
        <Typography>
          <Title>React Phone Book</Title>
        </Typography>
      </Row>
      <Row>
        <PhoneBookForm addEntryToPhoneBook={handleAddEntry} />
      </Row>
      <Row>
        <InformationTable entries={entries} />
      </Row>
    </>
  );
};

export default PhoneBookEditor;
