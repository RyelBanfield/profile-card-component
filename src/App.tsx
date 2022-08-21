/* eslint-disable import/no-absolute-path */
import profilePic from '/src/assets/image-victor.jpg';

const App = () => (
  <div className="h-screen bg-dark-cyan bg-[url('/src/assets/bg-pattern-top.svg')] bg-[right_7rem_bottom_20rem] bg-no-repeat md:bg-[left_-15rem_top_-31rem]">
    <div className="flex h-full items-center justify-center bg-transparent bg-[url('/src/assets/bg-pattern-bottom.svg')] bg-[left_8rem_bottom_-38rem] bg-no-repeat md:bg-[right_-15rem_bottom_-35rem]">
      <div className="h-96 w-80 rounded-2xl bg-white md:w-96">
        <div className="h-1/3 rounded-t-2xl bg-[url('/src/assets/bg-pattern-card.svg')]" />
        <div className="relative flex h-2/3 flex-col">
          <div className="mb-16 flex justify-center">
            <img
              src={profilePic}
              alt="Victor Crest"
              className="absolute bottom-52 rounded-full bg-white p-1"
            />
          </div>
          <div className="mb-5">
            <div className="mb-1 flex justify-center text-lg">
              <h1 className="mx-1 font-bold text-very-dark-desaturated-blue">
                Victor Crest
              </h1>
              <p className="mx-1 text-dark-grayish-blue">26</p>
            </div>
            <h2 className="text-center text-dark-gray">London</h2>
          </div>
          <div className="border-t" />
          <div className="flex grow items-center justify-evenly text-center">
            <div>
              <h3 className="text-lg font-bold text-very-dark-desaturated-blue">
                80K
              </h3>
              <p className="text-dark-gray">Followers</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-very-dark-desaturated-blue">
                803K
              </h3>
              <p className="text-dark-gray">Likes</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-very-dark-desaturated-blue">
                1.4K
              </h3>
              <p className="text-dark-gray">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
