/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-autofocus */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useInput from '../../hooks/useInput';

export default function TextInput({
  link, buttonName, handleSubmit, loading, formName,
}) {
  const [textInput, onChangeInput] = useInput();
  const { pathname } = useLocation();

  const submit = () => {
    if (pathname === '/*') {
      handleSubmit({ email: textInput?.email, password: textInput?.password });
    } if (pathname === '/register') {
      handleSubmit({ name: textInput?.name, email: textInput?.email, password: textInput?.password });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex flex-col gap-4 min-w-[600px]"
    >
      <h1 className="text-2xl uppercase">{formName}</h1>

      {
            pathname === '/register' && (
            <input
              type="text"
              name="name"
              value={textInput?.name}
              className="p-3 bg-transparent outline-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
              placeholder="Name"
              autoFocus={true}
              onChange={onChangeInput}
            />
            )
        }

      <input
        autoFocus={true}
        type="email"
        name="email"
        value={textInput?.email}
        className="p-3 bg-transparent outline-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
        placeholder="Email"
        onChange={onChangeInput}
      />

      <input
        type="password"
        name="password"
        value={textInput?.password}
        className="p-3 bg-transparent outline-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
        placeholder="Password"
        onChange={onChangeInput}
      />

      <div className="flex flex-col gap-2">
        <button type="submit" className="p-3 text-base font-bold uppercase duration-500 bg-green-500 text-slate-900 hover:bg-green-700 hover:text-slate-200">
          {loading ? 'loading...' : buttonName}
        </button>

        <span className="text-base">
          Belum punya akun?
          {' '}
          <Link to={link} className="text-green-500 underline duration-300 hover:text-green-600">Daftar disini</Link>
        </span>
      </div>
    </form>
  );
}
