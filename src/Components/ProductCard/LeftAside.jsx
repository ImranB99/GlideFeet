const LeftAside = ({ colorFilter, setColorFilter = {} }) => {
  const colors = [
    { name: "black", display: "Black" },
    { name: "blue", display: "Blue" },
    { name: "brown", display: "Brown" },
    { name: "red", display: "Red" },
  ];

  return (
    <div className="p-4 w-11/12 sticky z-50 top-12">
      <h2 className="text-lg font-semibold mb-1">Filter By Color</h2>
      <div className="border mb-6"></div>
      <div className="grid md:grid-cols-1 grid-cols-2  gap-3">
        {colors.map(({ name, display }) => (
          <button
            key={name}
            onClick={() => setColorFilter(colorFilter === name ? "" : name)}
            className={`flex items-center gap-3 px-3 py-2 rounded font-semibold text-sm  transition w-full text-left ${
              colorFilter === name ? "btn btn-soft " : ""
            }`}
          >
            <span
              className={`inline-block w-5 h-5 rounded-full`}
              style={{ backgroundColor: name }}
            ></span>
            <span className=" flex-grow">{display}</span>
            <span className="text-xs text-gray-600"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
