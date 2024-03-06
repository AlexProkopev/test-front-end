export const loadMoreItems = (myFunction) => {

    const {dataCatalog,currentItems,itemsPerPage,setCurrentItems,setCurrentPage} = myFunction;
    if (dataCatalog) {
      const nextItems = dataCatalog.slice(
        currentItems.length,
        currentItems.length + itemsPerPage
      );
      setCurrentItems((prevItems) => [...prevItems, ...nextItems]);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };