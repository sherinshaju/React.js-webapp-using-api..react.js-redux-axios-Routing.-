let dataState = {
  count: "0",
  fullproduct: [
    {
      id: 1,
      name: "jgfjghjghj",
      price: "699",
      image: "image/1.jpg",
      image2: "image/2.jpg",
      fav: false,
      isCart: true
    },
    {
      id: 2,
      name: "dfsdyutryurfsd",
      price: "999",
      image: "image/3.jpg",
      image2: "image/4.jpg",
      fav: false,
      isCart: true
    },
    {
      id: 3,
      name: "rtysrturtydfsd",
      price: "788",
      image: "image/5.jpg",
      image2: "image/6.jpg",
      fav: false,
      isCart: true
    },
    {
      id: 4,
      name: "rtyrtygf",
      price: "899",
      image: "image/7.jpg",
      image2: "image/8.jpg",
      fav: true,
      isCart: true
    },
    {
      id: 5,
      name: "jghjghd",
      price: "100",
      image: "image/9.jpg",
      image2: "image/10.jpg",
      fav: false,
      isCart: true
    }
  ],
  NewCart: []
};

export default function Reducer(state = dataState, action) {
  switch (action.type) {
    case "Product":
      return {
        ...state,
        product: action.payload
      };
    case "cartProduct":
      return {
        ...state,
        cart: action.payload,
        count: action.NewCount
      };
    case "removeArry":
      let remove = action.payload;
      let cartNew = state.cart.splice(1, remove);
      return {
        ...state,
        cart: cartNew
      };
    case "AddCart":
      let NewValCart = action.product;
      var AddData = state.fullproduct.map(addCount =>
        addCount.id === action.id
          ? { ...addCount, isCart: action.isCart }
          : addCount
      );

      return {
        ...state,
        fullproduct: AddData,
        NewCart: [...state.NewCart, NewValCart]
      };
    case "RemoveBtn":
      var RemoveData = state.fullproduct.map(addCount =>
        addCount.id === action.id
          ? { ...addCount, isCart: action.isCart }
          : addCount
      );

      return {
        ...state,
        fullproduct: RemoveData,
        NewCart :  [...state.NewCart.filter(NewCart => NewCart.id !== action.id)]
      };

    default:
      return state;
  }
}
