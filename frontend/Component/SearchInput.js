import React, { useState } from "react";
import * as yup from "yup";
import { Box, Button, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
  search: yup.string().required("This field cannot be empty"),
});

const SearchInput = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // setSearchQuery(search);
      navigate(`/search/${search}`);
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    try {
      validationSchema.validateSync({ search: search }, { abortEarly: false });
      return {};
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      return errors;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap:"4px",
          alignItems: "center",
        }}>
        <InputBase
          sx={{ bgcolor: "white", padding: "5px",borderRadius:"5px" }}
          fullWidth={true}
          id="search"
          name="search"
          label="search"
          placeholder="What are you looking for?"
          value={search}
          onChange={handleChange}
          error={Boolean(errors.search)}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={!search.trim()}>
          Search
        </Button>
      </Box>
      <Box component="span" sx={{ color: "red" }}>
        {errors.search}
      </Box>
    </form>
  );
};

export default SearchInput;
