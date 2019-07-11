/**
 * Author iWuzhi
 * Date 2019/7/9
 **/

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('按钮', module)
    .add('基本使用', () => (
        <div style={{padding: 15}}>
          <Button>Primary</Button>
          <Button type='secondary'>Secondary</Button>
          <Button type='success'>Success</Button>
          <Button type='danger'>Danger</Button>
          <Button type='warning'>Warning</Button>
          <Button type='info'>Info</Button>
          <Button type='light'>Light</Button>
          <Button type='dark'>Dark</Button>
          <Button type='link'>Link</Button>
        </div>
    ), {})