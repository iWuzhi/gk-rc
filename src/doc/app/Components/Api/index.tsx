/**
 * author iWuzhi
 * date 2020-12-26 10:18:45
 */

import React from 'react';

interface IApi {
  of: React.ElementType
}

const Api: React.FC<IApi> = ({ of }) => {
  return (
    <div>你好</div>
  )
}

export default Api;