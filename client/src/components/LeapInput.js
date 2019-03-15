import React from 'react';
import { Field as RField, reduxForm } from 'redux-form';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import { Field, Control } from 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import { FaPaperPlane } from 'react-icons/fa';
import { renderTextField } from "./shared/inputs/TextField";

import {
  required,
  fourDigitsLong,
  isInt
} from './shared/validators';

const LeapInput = props => {
  const { handleSubmit, title } = props;
  return (
    <div>
      <Heading size={1}>{title}</Heading>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <Columns>
          <Columns.Column size={4}>
            <RField
              label={'Year'}
              name={'year'}
              placeholder={'Enter the year'}
              size={'medium'}
              component={renderTextField}
              validate={[required, isInt, fourDigitsLong]}
            />
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column size={10}>
            <Field>
              <Control>
                <Button disabled={!props.valid} type={'submit'} issize={'large'} ispulled={'left'} iscolor={props.valid ? 'primary' : ''}>
                  <FaPaperPlane/>&nbsp;Submit
                </Button>
              </Control>
            </Field>
          </Columns.Column>
        </Columns>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'branch'
})(LeapInput);
