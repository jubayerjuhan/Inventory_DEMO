import client from '../client/client.js'

export const allAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'ADMIN_ALL_PRODUCTS_REQ' })
    const { data } = await client.get('admin/allProducts')
    dispatch({ type: 'ADMIN_ALL_PRODUCTS_SUCCESS', payload: data.products })
  }
  catch (err) {
    // dispatch({
    //   type: 'ALL_PRODUCTS_FAIL',
    //   payload: err.message || err.response.data.message,
    // })
    console.log(err)
  }
}