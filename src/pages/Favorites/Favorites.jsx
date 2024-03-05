import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/facorites.selecotr";
import CatalogList from "../../components/Catalog/CatalogList";
import { selectStatusModal } from "../../redux/modal/modal.selector";
import Modal from "../../components/Modal/Modal";


const Favorites = () => {
  const favoritesData = useSelector(selectFavorites);
  const modalStatus = useSelector(selectStatusModal)
  return (
    <section className="container mx-auto mt-[40px]">
      <CatalogList dataCatalog={favoritesData}/>
      {modalStatus && <Modal />}
    </section>
  )
}

export default Favorites