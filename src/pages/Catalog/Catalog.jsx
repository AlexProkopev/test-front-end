import { useDispatch, useSelector } from 'react-redux';
import { selectCarsData } from '../../redux/car-data/carApi.selector';
import CatalogList from '../../components/Catalog/CatalogList';
import { fetchCarsList } from '../../redux/car-data/services';
import { useEffect } from 'react';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import { selectCarBrands } from '../../redux/filtres/filters.selector';
import { selectStatusModal } from '../../redux/modal/modal.selector';
import Modal from '../../components/Modal/Modal';

const Catalog = () => {
  const carsData = useSelector(selectCarsData);
  const filterToBrand = useSelector(selectCarBrands);
  const modalStatus = useSelector(selectStatusModal)
  const dispatch = useDispatch();


  const filterToMark = () => {
    if (
      filterToBrand.make !== undefined &&
      filterToBrand.make !== 'Enter the text' &&
      filterToBrand.rentalPrice !== 'To $' &&
      filterToBrand.rentalPrice !== undefined &&
      filterToBrand.make.length > 0 &&
      filterToBrand.rentalPrice.length > 0
    )
      return (
        carsData &&
        carsData.filter((item) => {
          return (
            item.make === filterToBrand.make &&
            item.rentalPrice <= filterToBrand.rentalPrice
          );
        })
      );

    return carsData;
  };
  const catalogByMark = filterToMark();

  useEffect(() => {
    dispatch(fetchCarsList());
  }, [dispatch]);

  return (
    <section className='container '>
      <FiltersForm />
      {carsData && <CatalogList dataCatalog={catalogByMark} />}
      {modalStatus && <Modal />}
    </section>
  );
};

export default Catalog;
