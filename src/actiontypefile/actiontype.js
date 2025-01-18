export const setLoading = () => ({
    type: "SET_LOADING",
    payload: true,
  });

  export const setProducts = (data) => ({
    type: "SET_SUCCESS",
    payload: data,
  });
  export const setdetails = (details) => ({
    type: "SET_SUCCESSES",
    payload: details,
  });

  export const setCards = (cards) => ({
    type: "CARDS_DATA_SUCCESS",
    payload: cards,
  });

  export const setinfo = (info) => ({
    type: "SET_Infos",
    payload: info,
  });
  
  export const setError = (error) => ({
    type: "SET_ERROR",
    payload: error,
  });