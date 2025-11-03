import { FaHandSparkles } from "react-icons/fa";

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

      <div className=" rounded-2xl   mt-15 hidden sm:inline-block">
        <div className="flex items-center gap-2 mb-3">
          {/* <Sparkles className="text-yellow-400" size={22} /> */}
          <FaHandSparkles className="text-yellow-600" size={22} />
          <h2 className="text-lg font-semibold">Shoe Care Tips</h2>
        </div>
        <div className="border mb-6"></div>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Keep your shoes clean and dry after every use.</li>
          <li>Use a soft brush to remove dirt and dust gently.</li>
          <li>Store in a cool, dry place away from sunlight.</li>
          <li>Apply leather conditioner or polish when needed.</li>
          <li>Never machine wash your shoes — hand clean only.</li>
        </ul>

        <p className="mt-4 text-xs opacity-80">
          💡 Regular care increases the life and comfort of your favorite pairs.
        </p>
      </div>
    </div>
  );
};

export default LeftAside;
