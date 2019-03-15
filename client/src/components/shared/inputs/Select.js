import React from 'react';
import { Control, Field, Help, Label } from 'react-bulma-components/lib/components/form';
import Select from 'react-select';
import '../../../styles/isdanger.css';

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: '45px',
    backgroundColor: 'fff',
    cursor: 'pointer',
    borderColor: state.isFocused ? 'rgb(50, 115, 220)' : 'rgb(219, 219, 219)',
    boxShadow: state.isFocused ? 'rgba(50, 115, 220, 0.25) 0px 0px 0px 2.5px' : 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
    fontSize: '1.25em'
  }),
  placeholder: (base) => ({
    ...base,
    color: 'rgba(54, 54, 54, 0.3)'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: 'rgb(0, 0, 255)'
  })
};

function transformValue(value, options, multi) {
  if (multi && typeof value === 'string') return [];

  const filteredOptions = options.filter(option => {
    return multi
      ? value.indexOf(option.value) !== -1
      : option.value === value;
  });
  return multi ? filteredOptions : filteredOptions[0];
}

export const renderSelect = props => {
  const {
    size = 'medium',
    input,
    multi = false,
    label,
    placeholder,
    meta: { touched, error, warning },
    options
  } = props;

  const {
    name,
    value,
    onBlur,
    onChange,
    onFocus
  } = input;

  const transformedValue = transformValue(value, options, multi);

  return (
    <Field>
      <Label size={size}>{label}</Label>
      <Control>
        <div>
          <Select
            valueKey="value"
            name={name}
            className={(touched && error) ? 'is-select-danger' : undefined}
            multi={multi}
            styles={customStyles}
            options={options}
            placeholder={placeholder}
            value={transformedValue}
            onChange={multi
              ? multiChangeHandler(onChange)
              : singleChangeHandler(onChange)
            }
            onBlur={() => onBlur(value)}
            onFocus={onFocus}
          />
          {touched &&
            ((error && <Help color={'danger'}>{error}</Help>) ||
              (warning && <Help color={'warning'}>{warning}</Help>))}
        </div>
      </Control>
    </Field>
  );
};

function singleChangeHandler(func) {
  return function handleSingleChange(value) {
    func(value ? value.value : '');
  };
}

function multiChangeHandler(func) {
  return function handleMultiHandler(values) {
    func(values.map(value => value.value));
  };
}