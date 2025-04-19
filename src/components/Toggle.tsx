const Toggle = () => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="
        relative w-[39px] h-[23px] bg-[#000000] rounded-2xl shadow-[1px 1px 10px 1px #000000]
        after:absolute after:block after:w-[13px] after:aspect-square after:rounded-full after:left-1 after:top-[50%] after:transform-[translateY(-50%)] after:bg-[#f9f4ec] after:transition-all
        peer-checked:after:left-auto peer-checked:after:right-1
      "
      ></div>
    </label>
  );
};

export default Toggle;
