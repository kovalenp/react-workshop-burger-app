import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  }
}

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIETNS_FAILED,
  }
}

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://burger-builder-8c306.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  }
}