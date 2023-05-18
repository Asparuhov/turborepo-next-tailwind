interface HomeProps{
    brand: string;
}
export const Home = (props: HomeProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {`Welcome to ${props.brand}`}
        </h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
