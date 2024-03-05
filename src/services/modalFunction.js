export const mileageUpdate = (mileage) => {
    let mileageUpdate = String(mileage);
    if (mileageUpdate.length > 3) mileageUpdate = mileageUpdate.slice(0, 1) + "," + mileageUpdate.slice(1);
    return mileageUpdate;
  }

  export  const closeByBackDrop = (e,dispatch,handleFunk) => {
    if (e.target === e.currentTarget) dispatch(handleFunk());
  }

  export const sliceStringAddress = (string) => {
    const commaIndex = string.indexOf(',');
    if (commaIndex === -1)return string; 
    return string.slice(commaIndex + 1).trim().split(',').join(' ');
    
  }
