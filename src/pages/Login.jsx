import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextInput from '../components/auth/TextInput';

import { awaiters } from '../utils/helper';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    setLoading((prevValue) => !prevValue);

    dispatch(asyncSetAuthUser({ email, password }));

    await awaiters();
    setLoading((prevValue) => !prevValue);
    navigate('/');
  };

  return (
    <section className="container flex items-center justify-center h-[50vh] mx-auto">
      <TextInput
        link="/register"
        buttonName="sign in"
        handleSubmit={onSubmit}
        loading={loading}
        formName="sign in"
      />
    </section>
  );
}
