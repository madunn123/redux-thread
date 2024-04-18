import { useDispatch } from 'react-redux';
import { useState } from 'react';

import TextInput from '../components/auth/TextInput';

import { awaiters } from '../utils/helper';

import { asyncRegister } from '../states/authUser/action';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async ({ name, email, password }) => {
    setLoading((prevValue) => !prevValue);

    dispatch(asyncRegister({ name, email, password }));

    await awaiters();
    setLoading((prevValue) => !prevValue);
  };

  return (
    <section className="container flex items-center justify-center h-[50vh] mx-auto">
      <TextInput
        link="/*"
        buttonName="sign up"
        handleSubmit={onSubmit}
        loading={loading}
        formName="sign up"
      />
    </section>
  );
}
