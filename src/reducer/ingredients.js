import * as actions from './actions';
import prices from '../components/BurgerBuilder/IngredientPrices';

const initIngredients = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  burgerPrice: 5, // Default burger price
}

const reducer = (state = initIngredients, action) => {

  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        burgerPrice: state.burgerPrice + prices[action.ingredient],
      }
    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        burgerPrice: state.burgerPrice - prices[action.ingredient],
      }
    default:
      return state
  }
}

export default reducer;
