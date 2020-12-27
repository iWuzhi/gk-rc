/**
 * author iWuzhi
 * date 2020-12-25 12:13:18
 */

import React from 'react';

import { Button as MUButton, ButtonProps as MUButtonProps } from '@material-ui/core';

import { useStyles } from './style';

export type ButtonProps = MUButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <MUButton className={styles.font} {...props}>
      {children}
    </MUButton>
  );
};

export default Button;
