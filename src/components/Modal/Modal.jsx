import { defaultPhoto } from '../../redux/helpers';
import { selectDataModal } from '../../redux/modal/modal.selector';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.reducer';
import IconClose from '../ReUseComponents/IconClose/IconClose';
import {
  closeByBackDrop,
  mileageUpdate,
  sliceStringAddress,
} from '../../services/modalFunction';

const Modal = () => {
  const dataModal = useSelector(selectDataModal);
  const dispatch = useDispatch();

  if (!dataModal) return null;
  const {
    make,
    id,
    model,
    year,
    address,
    type,
    mileage,
    img,
    description,
    fuelConsumption,
    engineSize,
    functionalities,
    rentalConditions,
    rentalPrice,
  } = dataModal;

  return (
    <div
      className="bg-backDrop w-full h-full fixed top-0 left-0 z-[10000]"
      onClick={(e) => closeByBackDrop(e, dispatch, closeModal)}
    >
      <div className="fixed rounded-2xl bg-white-color top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[541px] pt-[40px] pl-[40px] pr-[40px] pb-[40px]">
        <button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="absolute  top-[16px] right-[16px]"
        >
          <IconClose />
        </button>
        <img
          src={img ? img : defaultPhoto}
          className="w-[469px] h-[314px] rounded-lg"
          alt={make}
        />
        <p className="text-primary-text-color font-medium text-base leading-6 mt-[14px]">
          {make} <span className="text-make-text-color">{model}</span>, {year}
        </p>

        <div
          className=" flex flex-wrap font-normal text-sm leading-6 text-secondary-text-color mt-[8px] w-[277px]"
          style={{ columnGap: '6px', rowGap: '4px' }}
        >
          <p>{sliceStringAddress(address).split(" ")[0]}</p>
          <div>|</div>
          <p>Ukraine</p>
          <div>|</div>
          <p>Id: {id}</p>
          <div>|</div>
          <p>Type: {type}</p>
          <div>|</div>
          <p>Fuel Consumption: {fuelConsumption}</p>
          <div>|</div>
          <p>Engine Size: {engineSize}</p>
        </div>
        <p className="font-normal text-base leading-5 mt-[14px]">
          {description}
        </p>
        <p className="mt-[24px] font-medium text-base leading-5 text-primary-text-color">
          Accessories and functionalities:
        </p>
        <div
          className="flex flex-wrap font-normal text-sm leading-6 text-secondary-text-color mt-[8px]"
          style={{ columnGap: '12px', rowGap: '4px' }}
        >
          {functionalities?.map((functional, index) => (
            <p className="" key={index}>
              {functional}
            </p>
          ))}
        </div>
        <p className="mt-[24px] mb-[8px] font-medium text-base leading-6">
          Rental Conditions:{' '}
        </p>
        <div
          className="flex items-center flex-wrap font-normal text-xs leading-6 tracking-tight text-third-text-color"
          style={{ columnGap: '22px', rowGap: '15px' }}
        >
          {rentalConditions.split('\n').map((rentalCondition, index) => (
            <p key={index}> {rentalCondition} </p>
          ))}
          <p>
            Mileage:{' '}
            <span className="font-semibold text-btn-color">
              {mileageUpdate(mileage)}
            </span>
          </p>
          <p>
            Price:{' '}
            <span className="font-semibold text-btn-color">
              {rentalPrice.slice(1) + rentalPrice[0]}
            </span>{' '}
          </p>
        </div>
        <a
          href="tel:+380730000000"
          className="mt-[24px] block w-[188px] rounded-lg pt-[12px] pb-[12px] pr-[50px] pl-[50px]  bg-btn-color text-white-color font-semibold text-base leading-5"
        >
          Rental car
        </a>
      </div>
    </div>
  );
};

export default Modal;
