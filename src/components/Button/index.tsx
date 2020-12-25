/**
 * author iWuzhi
 * date 2020-12-25 12:13:18
 */

import React from 'react';

import { Button as MUButton } from '@material-ui/core';

import { useStyles } from './style';

interface IProps {}

const Button: React.FC<IProps> = ({ children, ...props}) => {
  const styles = useStyles();
  return <MUButton className={styles.font} {...props}>{children}</MUButton>
}

export default Button;