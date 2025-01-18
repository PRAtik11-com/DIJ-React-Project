const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    cards:[],
    details:[],
    info:[]
  };
  
  export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false} ;

      case "SET_SUCCESS":
        return { ...state, isLoading: false, isError: false, data: payload };

      case "CARDS_DATA_SUCCESS":
        return { ...state, isLoading: false, isError: false, cards: payload };  

      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };

      default:
        return state;
    }
  };

  export const reducers = (state = initialState, {type,payload}) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false} ;

      case "SET_SUCCESSES":
        return { ...state, isLoading: false, isError: false, details: payload };

      case "SET_Infos":
        return { ...state, isLoading: false, isError: false, info: payload };    

      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };

      default:
        return state;
    }
  };

  export const reducersof = (state = initialState, {type,payload}) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false} ;

      case "SET_SUCCESS":
        return { ...state, isLoading: false, isError: false, data: payload };  

      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };

      default:
        return state;
    }
  };