const App = () => (
  <div className="h-screen bg-dark-cyan bg-[url('/src/assets/bg-pattern-top.svg')]  bg-[right_bottom_26rem] bg-no-repeat text-very-dark-desaturated-blue">
    <div className="h-full bg-transparent bg-[url('/src/assets/bg-pattern-bottom.svg')] bg-[left_bottom_-47rem] bg-no-repeat flex justify-center items-center">
      <div className="bg-white rounded-2xl h-96 w-80">
        <div className="bg-[url('/src/assets/bg-pattern-card.svg')] h-1/3 rounded-t-2xl" />
        <div className="h-2/3 relative">
          <div className="flex justify-center">
            <img src="/src/assets/image-victor.jpg" alt="Victor Crest" className="bg-white rounded-full absolute bottom-52 p-1" />
          </div>
          <div>
            <div>
              <h1>Victor Crest</h1>
              <p>26</p>
            </div>
            <h2>London</h2>
          </div>
          <div>
            <div>
              <h3>80K</h3>
              <p>Followers</p>
            </div>
            <div>
              <h3>803K</h3>
              <p>Likes</p>
            </div>
            <div>
              <h3>1.4K</h3>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
