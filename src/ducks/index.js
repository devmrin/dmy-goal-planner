// action types
export const UPDATE_ANNOUNCEMENT_TOGGLE = "UPDATE_ANNOUNCEMENT_TOGGLE";

// action creator
export const updateAnnouncementToggle = payload => ({
  type: UPDATE_ANNOUNCEMENT_TOGGLE,
  payload
});

// initial state
export const initialState = {
  showAnnouncement: true,
  announcementHeight: 0,
  navbarHeight: 0,
  searchbarHeight: 0
};

// reducer
const baseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_ANNOUNCEMENT_TOGGLE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default baseReducer;
