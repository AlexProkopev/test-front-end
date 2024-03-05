// import { createSelector } from '@reduxjs/toolkit';

export const selectCarsData = store => store.carsApi.cars;
export const selectLoading = store => store.carsApi.isLoading;
export const selectPaginationCars = store => store.carsApi.paginationCars;

export const selectError = store => store.carsApi.isError;






// export const selectFilteredContacts = createSelector(
//   [selectfilter, selectcontatcs],
//   (filter, contatcs) =>
//     contatcs.filter((({name,number}) =>
//     name.toLowerCase().includes(filter.toLowerCase().trim()) ||
//     number.toString().includes(filter.toLowerCase().trim())
//   )
//     )
// );