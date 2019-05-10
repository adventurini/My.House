import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL, NEXT_PAGE_FETCH, NEXT_PAGE_SUCCESS, NEXT_PAGE_FAIL } from '../actions/index';

const initialState = {
  searchResults: [],
  currentSearch: '',
  nextPage: [],
  newSearch: ''
};

export const designStudioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESIGNS_SUCCESS:
      return { ...state, searchResults: action.payload.data, currentSearch: action.payload.term };
    case NEXT_PAGE_SUCCESS:
      // return { ...state, nextPage: action.payload.data };
      return { ...state, searchResults: [...state.searchResults, ...action.payload.data], newSearch: action.payload.newSearch };
    default:
      return state;
  }
};
