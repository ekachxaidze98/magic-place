const initState = {
  products: [],
  sortedProducts: [],
  searchedProducts: [],
  isLoading: true,
  productModal: 0,
  errorMessage: "",
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        sortedProducts: action.payload.sorted,
        isLoading: false,
      };

    case "SEARCH_PRODUCTS":
      const filtered = [...state.sortedProducts].filter(
        (item) => item.title.toUpperCase().indexOf(action.payload.value) !== -1
      );
      return {
        ...state,
        products: filtered,
        searchedProducts: filtered,
      };

    case "LOADING_DETAIL":
      return { ...state, isLoading: true };

    default:
      return { ...state };
  }
};

export default productsReducer;