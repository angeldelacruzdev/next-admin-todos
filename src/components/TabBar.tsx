const tabOptons = [1, 2, 3, 4, 5];

export const TabBar = () => {
  return (
    <div className={`grid grid-cols-${tabOptons.length}  space-x-2 rounded-xl bg-gray-200 p-2`}>
      {tabOptons.map((tab) => (
        <div key={tab}>
          <input type="radio" id="1" className="peer hidden" />
          <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
