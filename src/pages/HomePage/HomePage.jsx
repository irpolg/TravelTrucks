import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClickViewNow = () => {
    navigate('/catalog');
  };

  return (
    <>
      <div className={css.heroContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.title2}>
          You can find everything you want in our catalog
        </p>
        <button onClick={handleClickViewNow} className={css.buttonViewNow}>
          View Now
        </button>
      </div>
      {/* <Link to="/catalog" className={css.link}>
        View Now
      </Link> */}
    </>
  );
};

export default HomePage;

// import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx';
// import HomeHero from '../../components/HomeHero/HomeHero.jsx';

// const HomePage = () => {
//   return (
//     <div>
//       <HomeHeader />
//       <HomeHero />
//     </div>
//   );
// };

// export default HomePage;
