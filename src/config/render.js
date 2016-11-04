'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'render'  // feel free to remove the appEnv property here
};

export default Object.freeze(Object.assign({}, baseConfig, config));
