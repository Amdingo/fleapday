import { Control, Field, Help, Input, Label } from "react-bulma-components/lib/components/form";
import React from "react";

export const renderTextField = props => {
  const {
    size = 'medium',
    input,
    label,
    type = 'text',
    placeholder,
    meta: { touched, error, warning }
  } = props;
  return (
    <Field>
      <Label size={size}>{label}</Label>
      <Control>
        <Input
          color={
            touched && warning
              ? 'warning'
              : touched && error
                ? 'danger'
                : undefined
          }
          size={size}
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {touched &&
          ((error && <Help color={'danger'}>{error}</Help>) ||
            (warning && <Help color={'warning'}>{warning}</Help>))}
      </Control>
    </Field>
  );
};