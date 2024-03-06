import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/favorites/favorites.reduser';
import { selectFavorites } from '../../redux/favorites/facorites.selecotr';
import ButtonToggleFavorite from '../ReUseComponents/ButtonToggleFavorite';
import IconHeartFull from '../ReUseComponents/IconFavorite/IconHeartFull';
import IconHeartEmpty from '../ReUseComponents/IconFavorite/IconHeartEmpty';
import { addToDataModal } from '../../redux/modal/modal.reducer';
import { sliceStringAddress } from '../../services/modalFunction';
import { defaultPhoto } from '../../redux/helpers';

import { Notify } from 'notiflix';

const CatalogList = ({ dataCatalog }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const itemsPerPage = 12;


  useEffect(() => {
    if (dataCatalog) {
      const initialItems = dataCatalog.slice(0, itemsPerPage);
      setCurrentItems(initialItems);
    } //Режит массив на 12 элементов.
  }, [dataCatalog]);

  //Пагинация на данные.

  const loadMoreItems = () => {
    if (dataCatalog) {
      const nextItems = dataCatalog.slice(
        currentItems.length,
        currentItems.length + itemsPerPage
      );
      setCurrentItems((prevItems) => [...prevItems, ...nextItems]);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Функция добавляет данные в фавориты.

  const handleAddToFavorite = (id) => {

    const currentItems = dataCatalog.filter((item) => item.id === id);
    dispatch(addToFavorites(...currentItems));
    Notify.success("Car added to favorites");
  };

  // Функция удаляет данные из фаворитов.

  const handleDeleteFromFavorites = (id) => {
    dispatch(deleteFromFavorites(id));
    Notify.success("Car deleted from favorites");
  };

  // Функция добавляет данные в модальное окно.

  const addToModal = (modalData) => {
    dispatch(addToDataModal(modalData));
  }

  return (
    <>
      <ul className=" flex flex-wrap gap-[29px] mx-auto">

        {currentItems.map(
          ({
            id,
            year,
            make,
            model,
            type,
            img,
            description,
            fuelConsumption,
            engineSize,
            accessories,
            functionalities,
            rentalPrice,
            rentalCompany,
            address,
            rentalConditions,
            mileage,
          }) => {

          const myId = nanoid();
          const dataForModal = {type,rentalPrice,mileage,rentalCompany,address,make,id,model,year,img,description,fuelConsumption,engineSize,accessories,functionalities,rentalConditions}

            return (
              <li key={myId} className="w-[274px]  relative ">
                {favorites.some((item) => item?.id === id) ? (
                  <ButtonToggleFavorite
                    handleClick={handleDeleteFromFavorites}
                    id={id}
                  >
                    <IconHeartFull />
                  </ButtonToggleFavorite>
                ) : (
                  <ButtonToggleFavorite
                    handleClick={handleAddToFavorite}
                    id={id}
                  >
                    <IconHeartEmpty />
                  </ButtonToggleFavorite>
                )}

                <img
                  src={img ? img : defaultPhoto}
                  className="rounded-lg  h-[268px]"
                  alt={make}
                />
                <div className="flex justify-between  items-center mt-[14px] font-manrope font-medium text-base leading-6" >
                  <p className="text-primary-text-color truncate w-[20ch]">
                    {make} <span className="text-make-text-color">{model}</span>
                    , {year}
                  </p>
                  <span>{rentalPrice}</span>
                </div>
                <div
                  className=" flex flex-wrap font-normal text-xs leading-5 text-secondary-text-color mt-[8px] font-manrope"
                  style={{ columnGap: '6px', rowGap: '4px' }}
                >
                  <p>{sliceStringAddress(address).split(" ")[0]}</p>
                  <div>|</div>
                  <p>{sliceStringAddress(address).split(" ")[2]}</p>
                  <div>|</div>
                  <p>{rentalCompany}</p>
                  <div>|</div>
                  <p >{model}</p>
                  <p>{type}</p>
                  <div>|</div>
                  <p>{mileage}</p>
                  <div>|</div>
                  <p className="truncate w-[11ch]">
                    {
                      accessories[
                        Math.floor(Math.random() * accessories.length)
                      ]
                    }
                  </p>
                </div>

                <button
                  type="button"
                  className=" font-manrope rounded-lg p-[12px 99px] w-[274px] h-[44px] bg-btn-color text-white-text-color mt-[28px] "
                  onClick={()=>addToModal(dataForModal)}
                >
                  Learn more
                </button>
              </li>
            );
          }
        )}
      </ul>
      {dataCatalog && currentItems.length < dataCatalog.length && (
        <button
          type="button"
          className=" font-manrope text-base leading-[24px] text-btn-color underline antialiased not-skip-ink-[none] text-center flex mx-auto mt-[100px] p-[5px]"
          onClick={()=> loadMoreItems({dataCatalog,currentItems,itemsPerPage,setCurrentItems,setCurrentPage})}
        >
          {`Load More page ${currentPage + 1}`}
        </button>
      )}
    </>
  );
};

export default CatalogList;
