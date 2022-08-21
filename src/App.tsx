const App = () => (
  <div className="h-screen bg-dark-cyan bg-[url('/src/assets/bg-pattern-top.svg')] bg-[right_7rem_bottom_20rem] md:bg-[left_-15rem_top_-31rem] bg-no-repeat">
    <div className="h-full bg-transparent bg-[url('/src/assets/bg-pattern-bottom.svg')] bg-[left_8rem_bottom_-38rem] md:bg-[right_-15rem_bottom_-35rem] bg-no-repeat flex justify-center items-center">
      <div className="bg-white rounded-2xl h-96 w-80 md:w-96">
        <div className="bg-[url('/src/assets/bg-pattern-card.svg')] h-1/3 rounded-t-2xl" />
        <div className="h-2/3 relative flex flex-col">
          <div className="flex justify-center mb-16">
            <img src="/src/assets/image-victor.jpg" alt="Victor Crest" className="bg-white rounded-full absolute bottom-52 p-1" />
          </div>
          <div className="mb-5">
            <div className="flex justify-center mb-1 text-lg">
              <h1 className="font-bold text-very-dark-desaturated-blue mx-1">Victor Crest</h1>
              <p className="text-dark-grayish-blue mx-1">26</p>
            </div>
            <h2 className="text-dark-gray text-center">London</h2>
          </div>
          <div className="border-t" />
          <div className="grow flex justify-evenly items-center text-center">
            <div>
              <h3 className="font-bold text-very-dark-desaturated-blue text-lg">80K</h3>
              <p className="text-dark-gray">Followers</p>
            </div>
            <div>
              <h3 className="font-bold text-very-dark-desaturated-blue text-lg">803K</h3>
              <p className="text-dark-gray">Likes</p>
            </div>
            <div>
              <h3 className="font-bold text-very-dark-desaturated-blue text-lg">1.4K</h3>
              <p className="text-dark-gray">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
