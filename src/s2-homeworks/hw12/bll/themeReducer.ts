// const initState = {
//   themeId: 1,
// };

// export const themeReducer = (state = initState, action: any): any => {
//   // fix any
//   switch (action.type) {
//     // дописать

//     default:
//       return state;
//   }
// };

// export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }); // fix any

// //

//////////////////////////////////////////////

const initState = {
  themeId: 1,
};

type InitStateType = typeof initState;

export const themeReducer = (
  // state = initState, action: any): any => {
  state: InitStateType = initState,
  action: ThemeActions,
): InitStateType => {
  // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID':
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

type ThemeActions = ReturnType<typeof changeThemeId>;

// export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }); // fix any
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const);
//
