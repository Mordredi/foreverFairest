import * as React from 'react';
import './Input.css';

export const Input = ({name, type='text', children}) => (
  <label>
    { children } <input type={type} name={name} />
  </label>
) 