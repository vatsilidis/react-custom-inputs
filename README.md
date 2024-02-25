# React Custom Inputs written in Typescript

A simple but powerful customized input in React, offered as a reusable Functional Component, written with Typescript and love!

It's designed to provide a consistent way of handling user inputs throughout your application.

##

# Table of Contents

1. <a href="#installation">🛠️ Installation</a>
2. <a href="#props">⚙️ Props</a>
3. <a href="#usage">🚀 Usage</a>
4. <a href="#tips">💡 Tips</a>
5. <a href="#license">📝 License</a>
6. <a href="#keywords">🔑 Keywords</a>

## Installation

🛠️ To install this component, you can use npm:

```bash
npm install react-custom-inputs
```

Or with yarn:

```bash
yarn add react-custom-inputs
```

### You don't have to install extra types since all types are included in the package.

[Return to Menu](#table-of-contents)

## Props

### ⚙️ REQUIRED props:

| Prop     | Type             | Default | Description                              |
| -------- | ---------------- | ------- | ---------------------------------------- |
| value    | string or number | -       | the value saved in parent component      |
| onChange | function         | -       | accepts a param with the formatted value |

- value (string): The current value of the input field. This is a controlled component, so you must update this prop whenever the onChange callback is called.
- onChange (function): A callback that is called whenever the input value changes. It receives the new value as its only argument.

##

### ⚙️ OPTIONAL props:

| Prop            | Type    | Default | Description                                                            |
| --------------- | ------- | ------- | ---------------------------------------------------------------------- |
| label           | string  | -       | anything you want                                                      |
| placeholder     | string  | -       | anything you want                                                      |
| errorText       | string  | -       | anything you want                                                      |
| unitLabel       | string  | -       | anything you want                                                      |
| id              | string  | -       | anything you want                                                      |
| shadowColor     | string  | -       | string, hex, rgb, etc                                                  |
| textColor       | string  | "black" | string, hex, rgb, etc                                                  |
| width           | string  | "100%"  | px, rem, %, etc                                                        |
| type            | string  | "text"  | supported types: text, password, email, number, tel, url, search, date |
| borderRadius    | string  | "4px"   | px, rem, %, etc                                                        |
| noLeadingSpaces | boolean | false   | removes all leading spaces                                             |
| borderColor     | string  | "black" | string, hex, rgb, etc                                                  |
| bgColor         | string  | "white" | string, hex, rgb, etc                                                  |
| paddingSize     | number  | 10      | number representing px                                                 |

- Supported types:
- - text
    | password
    | email
    | number
    | tel
    | url
    | search
    | date

- placeholder (string, optional): A string that is displayed when the input field is empty, to provide a hint to the user.
- disabled (boolean, optional): If true, the input field will be disabled and the user cannot change its value.
- type (string, optional): The type of the input field. Defaults to "text". Other possible values include "password", "email", etc.
- className (string, optional): A string of class names to be applied to the input field for custom styling.

[Return to Menu](#table-of-contents)

## Usage

🚀 Here are some examples of how to use the CustomInput component:

- A very basic example with only the required props

```javascript
import React, { useState } from "react";
import { CustomInput } from "react-custom-inputs";

function Example() {
  const [value, setValue] = useState("");

  return <CustomInput value={value} onChange={setValue} />;
}
```

- A more advanced example using more props!

```javascript
import React, { useState } from "react";
import { CustomInput } from "react-custom-inputs";

function Example() {
  const [value, setValue] = useState("");

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (
    <CustomInput
      id="my-text-input"
      value={value}
      onChange={handleChange}
      type="text"
      unitLabel="PIN"
      placeholder="Enter your PIN"
      errorText={value.length > 5 ? "The maximum PIN length is 5" : null}
      borderColor="transparent"
      width="200px"
      paddingSize={8}
      borderRadius="4px"
      noLeadingSpaces
    />
  );
}
```

<img src="https://res.cloudinary.com/lamprosvats/image/upload/v1708332229/a1klnzdbvy8wxzr1q40x.gif" alt="Example 1" width="400"/>
<img src="https://i.ibb.co/6ysbJr5/4.png" alt="Example 1 with error" width="400"/>
<img src="https://i.ibb.co/TvtQJxw/3.png" alt="Example 1" width="400"/>

- Another example using even more props!

```javascript
import React, { useState } from "react";
import { CustomInput } from "react-custom-inputs";

function Example() {
  const [weight, setWeight] = useState(0);

  const handleChangeWeight = (value: any) => {
    setWeight(Number(value));
  };

  return (
    <CustomInput
      id="my-input"
      value={weight}
      onChange={handleChangeWeight}
      type="number"
      unitLabel="kgr"
      label="Your weight"
      placeholder="Enter your weight in Kgr"
      errorText={weight < 30 ? "The minimum weight is 30 Kgr" : null}
      shadowColor="rgba(0, 0, 0, 0.15)"
      textColor="blue"
      bgColor="whitesmoke"
      borderColor="transparent"
      width="200px"
      paddingSize={12}
      borderRadius="10px"
      noLeadingSpaces
    />
  );
}
```

<img src="https://i.ibb.co/xsT8wrx/1.png" alt="Example 2 with error" width="400"/>
<img src="https://i.ibb.co/9ygJKSy/2.png" alt="Example 2" width="400"/>

In this example:

- label is set to "My Label", which might be displayed as a label for the input field.
- placeholder is set to "Enter some text", which is displayed when the input field is empty.
- errorText is set to "This field is required", which might be displayed if the input value is invalid.
- unitLabel is set to "kg", which might be displayed next to the input field to indicate the unit of the value.
- id is set to "my-input", which can be used to identify the input field in your CSS or JavaScript.
- shadowColor is set to "rgba(0, 0, 0, 0.15)", which might be used to set the color of the input field's shadow.
- textColor is set to "blue", which sets the color of the text in the input field.
- width is set to "200px", which sets the width of the input field.
- type is set to "text", which sets the type of the input field.
- borderRadius is set to "8px", which sets the border radius of the input field.
- noLeadingSpaces is set to true, which might be used to remove leading spaces from the input value.
- borderColor is set to "gray", which sets the color of the input field's border.
- bgColor is set to "lightgray", which sets the background color of the input field.
- paddingSize is set to 20, which sets the padding inside the input field.

[Return to Menu](#table-of-contents)

## Tips

### 💡 Useful Tips for Validations

- An easy way to validate the user input and feed the component with error text accordingly:

```javascript
import React, { useState } from "react";
import { CustomInput } from "react-custom-inputs";

function Example() {
  const [value, setValue] = useState();

  const handleChange = (value: any) => {
    setValue(value);
  };

  // Basic Text length validation
  const getErrorText = () => {
    const re = /^\d{10}$/;
    return re.test(value) ? null : "The maximum PIN length is 5";
  };

  return (
    <CustomInput
      type="number"
      id="my-phone-input"
      value={value}
      onChange={handleChange}
      placeholder="Enter your phone"
      errorText={getErrorText}
    />
  );
}
```

- Similar if for email validation:

```javascript
import React, { useState } from "react";
import { CustomInput } from "react-custom-inputs";

function Example() {
  const [value, setValue] = useState();

  const handleChange = (value: any) => {
    setValue(value);
  };

  // Basic Email format validation
  const getErrorText = () => {
    const re = /\S+@\S+\.[a-zA-Z]{2,4}$/;
    return re.test(value) ? null : "Email format is not correct";
  };

  return (
    <CustomInput
      type="email"
      id="my-phone-input"
      value={value}
      onChange={handleChange}
      placeholder="Enter your phone"
      errorText={getErrorText}
    />
  );
}
```

[Return to Menu](#table-of-contents)

## License

### 📝 MIT License

Copyright (c) 2024 Lampros Vatsilidis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Return to Menu](#table-of-contents)

## Keywords

🔑 Tags: React input, React custom input, custom input

[Return to Menu](#table-of-contents)
