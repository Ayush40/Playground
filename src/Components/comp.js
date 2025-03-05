import React from 'react';

const MyComponent = ({ abc }) => {
  return (
    <div>
      <h1>Form data:</h1>
      <p>{abc.fullName}</p>
      <p>{abc.email}</p>
      <p>{abc.password}</p>
      <p>{abc.confirmPassword}</p>
    </div>
  );
};

export default MyComponent;
