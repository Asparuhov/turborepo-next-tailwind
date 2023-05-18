/* eslint-disable @next/next/no-img-element */
import data from "./gamesData.json";

interface Lobby {
  imageClass: string;
  loadingImages: any;
}

export const Lobby = (props: Lobby) => {
  const handleLoadMore = () => {
    props.loadingImages.setCount(props.loadingImages.count + 32);
  };

  const visibleData = data.slice(0, props.loadingImages.count);

  return (
    <>
      <div className="grid grid-cols-3 pt-20 sm:px-4 md:px-5 aspect-square md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center">
        {visibleData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center m-2 md:m-3 pt-2 sm:pt-5"
          >
            <img
              className={`${props.imageClass}`}
              src={item.image}
              alt={item.string}
            />
            <p className="mt-2 font-medium text-center text-white">
              {item.string}
            </p>
          </div>
        ))}
      </div>
      {props.loadingImages.count < data.length && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};