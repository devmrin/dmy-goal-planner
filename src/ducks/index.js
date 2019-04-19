// action types
export const UPDATE_GOALS_ARRAY = "UPDATE_GOALS_ARRAY";

// action creator
export const updateGoalsArray = payload => ({
  type: UPDATE_GOALS_ARRAY,
  payload
});

// initial state
export const initialState = {
  goalsArray: []
};

// reducer
const baseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_GOALS_ARRAY:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default baseReducer;
