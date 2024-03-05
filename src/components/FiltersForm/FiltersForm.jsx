import { useState } from 'react';
import { MARK_CAR, PRICE_HOUR } from '../../redux/helpers';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addToCarBrand } from '../../redux/filtres/filtres.reduser';
import { ReactComponent as ArrowSvg } from '../../icons/vector.svg';
import { FilterFormStyled } from './FilterFormStyled.js';
import { handleSubmit, resetForm } from './services.js';

const FiltersForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    make: '',
    rentalPrice: '',
  });
  const [brandFocus, setBrandFocus] = useState(null);
  const [priceFocus, setPriceFocus] = useState(null);

  const handleChange = (e, setFocusState) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFocusState(false);
  };
 
  return (
    <FilterFormStyled
      $priceFocus={priceFocus}
      $brandFocus={brandFocus}
      onSubmit={(e)=> handleSubmit(e,dispatch,addToCarBrand,formData)}
    >
      <div className="label-container brand-container">
        <label htmlFor="make">Car brand</label>
        <select
          onFocus={() => setBrandFocus(true)}
          onBlur={() => setBrandFocus(false)}
          onChange={(e) => handleChange(e, setBrandFocus)}
          name="make"
          id="brand"
          value={formData.make}
          required
        >
          <option
            value="defaultPrice"
            key="default"
            defaultValue
            className="first-option"
          >
            Enter the text
          </option>
          {MARK_CAR.map((brand) => {
            const id = nanoid();
            return (
              <option value={brand} key={id}>
                {brand}
              </option>
            );
          })}
        </select>

        <ArrowSvg className="arrow-svg brand-svg" />
      </div>

      <div className="label-container price-container">
        <label htmlFor="rentPrice" className="">
          Price/ 1hour
        </label>

        <select
          onFocus={() => setPriceFocus(true)}
          onBlur={() => setPriceFocus(false)}
          name="rentalPrice"
          onChange={(e) => handleChange(e, setPriceFocus)}
          id="price"
          value={formData.rentalPrice}
          required
        >
          <option value="defaultPrice" defaultValue className="first-option ">
            To $
          </option>
          {PRICE_HOUR.map((value) => {
            const id = nanoid();
            return (
              <option key={id} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <div className="arrow-container">
          <ArrowSvg className="arrow-svg price-svg" />
        </div>
      </div>

      <div className="btn-container">
        <button className="accept-btn" type="submit">
          Search
        </button>
        <button className="reset-btn" onClick={()=> resetForm(setFormData)} type="button">
          Reset
        </button>
      </div>
    </FilterFormStyled>
  );
};

export default FiltersForm;
