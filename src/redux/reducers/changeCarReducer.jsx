

const stateDefault ="./img/products/black-car.jpg"


export const imgCar = (state = stateDefault, action) => {
    switch (action.type) {
      case "CHANGE_COLOR": {
        state = action.imgCar;
        return state;
      }
      default:
        return state;
    }
  }