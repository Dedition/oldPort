# React &lt;Mailto&gt; [![Build Status](https://travis-ci.org/jasonbellamy/react-mailto.png?branch=master)](https://travis-ci.org/jasonbellamy/react-mailto)

> A react component to create and display a [mailto](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links) link.


## Credits
- Library original author: [Jason Bellamy](https://github.com/jasonbellamy)

## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save reactv16-mailto`


## Usage

```javascript
import React from 'react';
import Mailto from 'reactv16-mailto';

export const EmailComponent = () => (
    <Mailto email="xyz@abc.com" obfuscate={true} >
        Email me!
    </Mailto >
);
```


## Options


Property  | Type      | Argument     | Default   | Description
----------|-----------|--------------|-----------|------------
email     | `string`  | `<required>` | `null`    | email address of the intended recipient.
obfuscate | `boolean` | `<optional>` | `false`   | show the email address in the status bar.
headers   | `object`  | `<optional>` | `null`    | any standard mail header fields. The most commonly-used of these are "subject", "cc", and "body" (which is not a true header field, but allows you to specify a short content message for the new email).


## Developing

[reactv16-mailto](https://github.com/srikanthbandaru/reactv16-mailto) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Srikanth Bandaru](http://sbandaru.com)
Licensed under the MIT license.
