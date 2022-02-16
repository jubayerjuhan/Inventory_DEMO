export const productreducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ADD_PRODUCT_FULFILLED':
      return {
        ...state,
        loading: false,
        success: action.payload,
      }
    case "RESET_SUCCESS":
      return {
        ...state,
        success: null,
      }
    case 'ADD_PRODUCT_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state;
  }
}

// get all products
export const allProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ALL_PRODUCTS_FULFILLED':
      return {
        ...state,
        loading: false,
        success: true,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
      }
    case "RESET_SUCCESS":
      return {
        ...state,
        success: null,
      }
    case 'ALL_PRODUCTS_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state;
  }
}

// get single product
export const getSingleProduct = (state = {}, action) => {
  switch (action.type) {
    case 'SINGLE_PRODUCT_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'SINGLE_PRODUCT_FULFILLED':
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      }
    case "RESET_SUCCESS":
      return {
        ...state,
        success: null,
      }
    case 'SINGLE_PRODUCT_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state;
  }
}


export const adminProductReducer = (state = { allProducts: [] }, action) => {
  switch (action.type) {
    case "ADMIN_ALL_PRODUCTS_REQ":
      return {
        ...state,
        loading: true,
        products: []
      }
    case
      "ADMIN_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      }
    case 'ADMIN_ALL_PRODUCT_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}