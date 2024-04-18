/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-autofocus */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncCreateNewThread } from '../states/threads/action';

export default function CreateThread() {
  const [textInput, setTextInput] = useState({
    title: '',
    category: '',
    body: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    setTextInput((prevValue) => ({
      ...prevValue,
      [target.name]: target.value,
    }));
  };

  const onSubmit = () => {
    dispatch(asyncCreateNewThread({ title: textInput.title, body: textInput.body, category: textInput.category }));

    setTextInput({
      title: '',
      category: '',
      body: '',
    });
  };

  return (
    <section className="container flex flex-col gap-6 mx-auto">
      <h1 className="text-xl font-semibold tracking-wide capitalize text-slate-300/90">buat diskusi baru</h1>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          name="title"
          value={textInput?.title}
          autoFocus={true}
          placeholder="Judul"
          className="p-3 bg-transparent outline-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="category"
          value={textInput?.category}
          placeholder="Kategori"
          className="p-3 bg-transparent outline-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
          onChange={handleChangeInput}
        />
        <textarea
          rows="7"
          value={textInput?.body}
          name="body"
          className="p-3 bg-transparent outline-none resize-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
          placeholder="Body"
          onChange={handleChangeInput}
        />

        <button type="submit" className="p-3 text-base font-bold uppercase duration-500 bg-green-500 text-slate-900 hover:bg-green-700 hover:text-slate-200">
          Buat Thread
        </button>
      </form>
    </section>
  );
}
