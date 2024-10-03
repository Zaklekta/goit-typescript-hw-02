import "./App.css";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { Toaster, toast } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getPictures } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [modalState, setModalState] = useState({ src: "", alt: "" });
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchValue === null) return;
    async function fetchPictures() {
      setError(null);
      setShowBtn(false);
      setIsLoading(true);
      try {
        const data = await getPictures(searchValue, page);
        console.log(data);
        if (data.results.length === 0) {
          toast("😞 Sorry, nothing was found for your search term.");
        }
        setPictures((prevData) => [...prevData, ...data.results]);
        if (data.total_pages > page) {
          setShowBtn(true);
        }
      } catch (err) {
        setError(err.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPictures();
  }, [searchValue, page]);

  const onSearch = (searchQuery) => {
    console.log("Search query: ", searchQuery);
    setSearchValue(searchQuery);
    setPictures([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const handlePictureClick = (modalPictureSrc, modalPictureDesc) => {
    setModalState({ src: modalPictureSrc, alt: modalPictureDesc });
    setIsOpen(true);
  };
  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            background: "#FFC300 ",
            fontSize: "20px",
            width: "500px",
          },
        }}
      />
      <SearchBar onSearch={onSearch} />
      <ImageModal
        modalState={modalState}
        modalIsOpen={modalIsOpen}
        onModalClose={handleCloseModal}
      />
      <ImageGallery pictures={pictures} onPictureClick={handlePictureClick} />
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn handleClick={handleClick} />}
      {error !== null && <ErrorMessage />}
    </>
  );
}

export default App;
