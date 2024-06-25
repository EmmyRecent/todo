const Home = () => {
  return (
    <div className="container">
      <div className="mb-4 flex items-center justify-center">
        <h1 className="heading md:text-3xl">To-Do List</h1>
      </div>

      <div>
        <input
          type="text"
          name="text"
          className="font-architects text-inputColor mb-[20px] text-lg md:text-2xl"
        />
        <button className="button">
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          <li className="relative p-2 text-left text-lg md:text-xl">
            List item
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
