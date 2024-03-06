import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarsData,
  selectError,
  selectLoading,
} from '../../redux/car-data/carApi.selector';
import CatalogList from '../../components/Catalog/CatalogList';
import { fetchCarsList } from '../../redux/car-data/services';
import { useEffect } from 'react';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import { selectCarBrands } from '../../redux/filtres/filters.selector';
import { selectStatusModal } from '../../redux/modal/modal.selector';
import Modal from '../../components/Modal/Modal';
import { Notify } from 'notiflix';

const Catalog = () => {
  const carsData = useSelector(selectCarsData);
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filterToBrand = useSelector(selectCarBrands);
  const modalStatus = useSelector(selectStatusModal);
  const dispatch = useDispatch();

  const filterToMark = () => {
    if (
      filterToBrand.make !== undefined &&
      filterToBrand.make !== 'Enter the text' &&
      filterToBrand.rentalPrice !== 'To $' &&
      filterToBrand.rentalPrice !== undefined &&
      filterToBrand.make.length > 0 &&
      filterToBrand.rentalPrice.length > 0
    ) {
      Notify.success('Car Brand Filtered Successfully');
      return (
        carsData &&
        carsData.filter((item) => {
          return (
            item.make === filterToBrand.make &&
            item.rentalPrice <= filterToBrand.rentalPrice
          );
        })
      );
    }

    return carsData;
  };
  const catalogByMark = filterToMark();

  useEffect(() => {
    dispatch(fetchCarsList());
  }, [dispatch]);

  return (
    <section className="container ">
      <FiltersForm />
      {loader && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {carsData && <CatalogList dataCatalog={catalogByMark} />}
      {modalStatus && <Modal />}
    </section>
  );
};

export default Catalog;
