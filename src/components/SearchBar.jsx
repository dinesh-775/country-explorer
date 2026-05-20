import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <div className="flex justify-center mb-8 px-4">
      <div className="w-full max-w-md relative">

        <input
          ref={inputRef}
          type="text"
          placeholder="Search country..."
          onChange={handleChange}
          className="w-full p-4 pl-5 rounded-2xl border border-gray-200 bg-white shadow-md 
          focus:outline-none focus:ring-4 focus:ring-blue-200 
          transition duration-300 hover:shadow-xl"
        />

      </div>
    </div>
  );
}

export default SearchBar;