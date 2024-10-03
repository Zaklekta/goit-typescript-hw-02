import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const INITIAL_VALUES = { searchQuery: "" };
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (values.searchQuery === "") {
      toast("❗You have to enter a search term to find some pictures.");
    } else {
      onSearch(values.searchQuery);
    }
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.submitBtn} type="submit">
            🔎 Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
