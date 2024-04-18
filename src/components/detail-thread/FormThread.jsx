import React, { useState } from 'react';

export default function FormThread({ comment }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    comment(text);

    setText(' ');
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <textarea
        name="content"
        rows="10"
        value={text}
        placeholder="Komentar"
        className="p-3 bg-transparent outline-none resize-none ring-1 ring-slate-600 focus:text-slate-300 placeholder:text-slate-600 focus:ring-green-500"
        onChange={({ target }) => setText(target.value)}
      />

      <button type="submit" className="p-3 text-base font-bold uppercase duration-500 bg-green-500 text-slate-900 hover:bg-green-700 hover:text-slate-200">
        kirim
      </button>
    </form>
  );
}
