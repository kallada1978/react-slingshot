// Define prompts for use with npm 'prompt' module in setup script
/* eslint-disable */
module.exports = [
  {
    name: 'projectName',
    description: 'Project name (default: new-project)',
    pattern: /^[^._][a-z0-9-_~]+$/,
    message: 'Limited to: lowercase letters, numbers, period, hyphen, ' +
    'underscore, and tilde; cannot begin with period or underscore.'
  },
  {
    name: 'version',
    description: 'Version (default: 0.1.0)'
  }, 
  {
    name: 'author',
    description: 'Author',
    pattern: /^[^.*\\S+.* ][a-z0-9-_~]+$/,
    message: 'Author field is manadatory' 
  },
  {
    name: 'email',
    description: 'Email',
    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email field is manadatory'
  },
  {
    name: 'license',
    description: 'License (default: MIT)'
  },
  {
    name: 'description',
    description: 'Project description'
  }
];
