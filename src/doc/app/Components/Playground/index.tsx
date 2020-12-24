// @ts-nocheck
import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import { makeStyles } from '@material-ui/core/styles';

import { useStyles } from './style';

export default ({ children, scope }) => {
  const cxs = useStyles();
  return (
    <div className={cxs.playground}>
      <LiveProvider
        code={children}
        transformCode={code => {
          return `
            <div className={'${cxs.preview}'}>
              ${code}
            </div>
          `;
        }}
        scope={{ mdx, makeStyles, ...scope }}
      >
        <LivePreview />
        <LiveEditor className={cxs.editor} />
        <LiveError />
      </LiveProvider>
      <div className={cxs.operation}></div>
    </div>
  )
}