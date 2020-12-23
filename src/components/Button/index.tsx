/**
 * @author iWuzhi
 * @date 2020-12-20 17:50:09
 */

import * as React from 'react';
import { Button as MButton } from '@material-ui/core';

export interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props}) => {
  return <MButton {...props} variant="contained" color="primary" disableElevation >{children}</MButton>
}

export default Button;
