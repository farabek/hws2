const initState = {
  themeId: 1,
};

type ChangeThemeIdAction = {
  type: 'SET_THEME_ID';
  id: number;
};

type ThemeState = typeof initState;

// export const themeReducer = (state = initState, action: any): any => {
export const themeReducer = (
  state: ThemeState = initState,
  action: ChangeThemeIdAction,
): ThemeState => {
  // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID':
      return {
        ...state,
        themeId: action.id,
      };

    default:
      return state;
  }
};

export const changeThemeId = (id: number): ChangeThemeIdAction => ({ type: 'SET_THEME_ID', id }); // fix any

//
