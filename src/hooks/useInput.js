import { useState } from 'react';

export default function useInput() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeValue = ({ target }) => {
    setValue((prevValue) => ({
      ...prevValue,
      [target.name]: target.value,
    }));
  };

  return [value, handleChangeValue];
}
