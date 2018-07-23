import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AuthButton from '../src/ui/button/auth_button';

const defaultProps = {
  label: 'Button',
  strategy: 'strategy',
  onClick: action('clicked!')
};

storiesOf('AuthButton', module)
  .add('Default Props', () => <AuthButton {...defaultProps} />)
  .add('Custom Styles', () => (
    <AuthButton {...defaultProps} foregroundColor="papayawhip" primaryColor="tomato" />
  ));
