import star from "../images/star.png";
import emptystar from "../images/emptystar.png";

export const Card = (props) => {
  const { data: { bet, get, casinoName, image, backgroundColor } } = props;

  const renderBetButton = () => {
    return (
      <button
        className="p-3 bg-green-700 text-white rounded-md h-12 lg:w-[15%] w-full lg:mt-0 mt-5 text-xl font-bold"
        aria-label="Bet Now"
      >
        Bet Now
      </button>
    );
  };

  const renderDetailsSection = () => {
    return (
      <div className="lg:text-center md:text-start text-center w-full">
        <strong className="text-xl text-black">Bonus</strong>
        <div className="flex lg:flex-col flex-row md:justify-start justify-center">
          <p className="text-[28px] text-black">Bet £{bet} </p>
          <p className="text-[28px] text-black">Get £{get} </p>
        </div>
      </div>
    );
  };

  const renderRatings = () => {
    return(
        <div className="flex mt-5 mb-5" role="img" aria-label="Rating: 4 out of 5 stars">
        <img src={star} className="" alt="Filled star" />
        <img src={star} className="" alt="Filled star" />
        <img src={star} className="" alt="Filled star" />
        <img src={star} className="" alt="Filled star" />
        <img src={emptystar} className="" alt="Empty star" />
      </div>
    )
  }

  return (
    <div className="w-100 flex p-4 shadow-md rounded-md items-center mb-3 lg:flex-nowrap flex-wrap">
      <div className="flex md:w-[85%] w-full gap-3 md:flex-row flex-col">
        <div style={{backgroundColor: backgroundColor}} className="lg:w-[70%] h-[150px] w-full flex items-center justify-center">
          <img src={image} className="object-fit" alt={`Image of ${casinoName}`} />
        </div>
        <div className="flex w-full lg:items-center md:items-start items-center lg:flex-row flex-col">
          <div className="w-[70%] flex-col md:items-start items-center flex">
            <a href="#" className="text-black text-xl underline font-light">
              {casinoName}
            </a>
            {renderRatings()}
          </div>
          {renderDetailsSection()}
        </div>
      </div>
      {renderBetButton()}
    </div>
  );
};
