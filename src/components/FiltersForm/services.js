export  const handleSubmit = (e,dispatch,handleSubmit,formData) => {
    e.preventDefault();
    dispatch(handleSubmit(formData));
  };

export  const resetForm = (setFormData) => {
    setFormData({
      make: '',
      rentalPrice: '',
    });
  };