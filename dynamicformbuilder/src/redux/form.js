export const ADD_CUSTOM_FORM = 'ADD_CUSTOM_FORM';
export const REMOVE_CUSTOM_FIELD = 'REMOVE_CUSTOM_FIELD';
export const CLEAR_CUSTOM_FIELD = 'CLEAR_CUSTOM_FIELD';

export const addCustomField = (field) => ({
  type: ADD_CUSTOM_FORM,
  payload: {
    field,
  },
});

export const removeCustomField = (id) => {
  return {type: REMOVE_CUSTOM_FIELD, payload: {id}};
};

export const clearCustomField = () => {
  return {type: CLEAR_CUSTOM_FIELD};
};

const initialState = {
  customField: [],
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOM_FORM:
      return {
        ...state,
        customField: [...state.customField, action.payload.field],
      };
    case REMOVE_CUSTOM_FIELD:
      return {
        ...state,
        customField: state.customField.filter(
          (element) => element.fieldName !== action.payload.id,
        ),
      };
    case CLEAR_CUSTOM_FIELD:
      return {
        ...state,
        customField: [],
      };

    default:
      return state;
  }
}
