
import { Link } from 'react-router-dom'; // Assuming React Router is used for navigation
import { CATALOG_PATH } from '../routes';
import { defaultPhoto } from '../../redux/helpers';

const Home = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl font-semibold text-center my-8">Car Rental</h1>
        <p className="text-lg text-center mb-8">
          Welcome to our car rental website!
        </p>
      </div>

      <section className="flex justify-center items-center">
        <div className="w-full sm:w-1/2 p-4">
          <img
            className="w-full rounded-lg shadow-lg"
            src={defaultPhoto}
            alt="Car rental"
          />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Car</h2>
          <p className="mb-4">
            We offer a wide selection of cars for rent at competitive prices.
          </p>
          <Link
            to={CATALOG_PATH}
            className="rounded-lg flex items-center justify-center p-[12px 99px] w-[274px] h-[44px] bg-btn-color text-white-text-color mt-[28px] "
          >
            Go to Catalog
          </Link>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Our Advantages</h2>
        <ul className="list-disc pl-8">
          <li>Wide selection of cars</li>
          <li>Flexible rental conditions</li>
          <li>Competitive prices</li>
          <li>Quality service</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
