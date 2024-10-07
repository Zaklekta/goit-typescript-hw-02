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
import { UnsplashResponse } from "./App.types";
import { ImageData } from "./App.types";
import { AxiosError } from "axios";
import axios from "axios";
import { MouseEvent } from "react";

function App() {
  const [pictures, setPictures] = useState<ImageData[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalState, setModalState] = useState<{ src: string; alt: string }>({
    src: "",
    alt: "",
  });
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchValue === null) return;
    async function fetchPictures() {
      setError(null);
      setShowBtn(false);
      setIsLoading(true);
      try {
        const data: UnsplashResponse = await getPictures(
          searchValue as string,
          page
        );
        console.log(data);
        if (data.results.length === 0) {
          toast("😞 Sorry, nothing was found for your search term.");
        }
        setPictures((prevData) => [...prevData, ...data.results]);
        if (data.total_pages > page) {
          setShowBtn(true);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          setError(new AxiosError("Unexpected error occurred"));
        }
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPictures();
  }, [searchValue, page]);

  const onSearch = (searchQuery: string) => {
    console.log("Search query: ", searchQuery);
    setSearchValue(searchQuery);
    setPictures([]);
    setPage(1);
  };

  const handleClick = (): void => {
    setPage(page + 1);
  };

  const handlePictureClick = (
    modalPictureSrc: string,
    modalPictureDesc: string
  ): void => {
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
