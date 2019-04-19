// action types
export const UPDATE_CURRENT_WINDOW = "UPDATE_CURRENT_WINDOW";

// action creator
export const updateCurrentWindow = payload => ({
  type: UPDATE_CURRENT_WINDOW,
  payload
});

// initial state
export const initialState = {
  currentWindow: "daily"
};

// reducer
const baseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CURRENT_WINDOW:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default baseReducer;
