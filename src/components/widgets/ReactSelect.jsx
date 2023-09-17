import React from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'chocolate',
    label: 'Chocolate'
  },
  {
    value: 'strawberry',
    label: 'Strawberry'
  },
  {
    value: 'vanilla',
    label: 'Vanilla'
  }
];

const Cmp01 = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <Select
        options={options}
        name={props.name}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Cmp01;
