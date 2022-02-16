import client from "../client/client.js"

export const createOrder = (orderData) => async (dispatch) => {
  console.log('Order Data', orderData)
  try {
    dispatch({ type: 'ORDER_REQ' })
    const { data } = await client.post('/order/new', orderData)
    console.log(data)
    dispatch({ type: 'ORDER_SUCCESS', payload: data })

  } catch (error) {
    dispatch({ type: 'ORDER_FAILED', payload: error.response.data.message })
  }
}

/**
 * get order to show on profile
 */
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ORDER_REQ' })
    const { data } = await client.get('/my-orders')
    dispatch({ type: 'GET_ORDER_SUCCESS', payload: data.orders })
  } catch (error) {
    dispatch({ type: 'GET_ORDER_FAILED', payload: error || error.response.data.message })
  }
}

/**
 * get single order by id
 */
export const getSingleOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'SINGLE_ORDER_REQ' })
    const { data } = await client.get(`/order/${id}`)
    dispatch({ type: 'SINGLE_ORDER_SUCCESS', payload: data.order })
  } catch (error) {
    console.log(error)
    dispatch({ type: 'SINGLE_ORDER_FAILED', payload: error })

  }
}

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: 'ADMIN_ALL_ORDERS_REQ' })
    const { data } = await client.get(`/admin/orders`)
    dispatch({ type: 'ADMIN_ALL_ORDERS_SUCCESS', payload: data.orders })
  } catch (err) {
    dispatch({ type: 'ADMIN_ALL_ORDERS_FAILED', payload: err })
  }
}
export const updateOrder = (id, status) => async (dispatch) => {
  try {
    console.log('status', { status })
    dispatch({ type: 'UPDATE_ORDER_REQ' })
    const { data } = await client.put(`api/v1/admin/order/${id}`, { status })
    console.log('ddff', data)
    dispatch({ type: 'UPDATE_ORDER_SUCCESS', payload: data.success })
  } catch (err) {
    dispatch({ type: 'UPDATE_ORDER_FAILED', payload: err })
  }
}

export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_ORDER_REQ' })
    const { data } = await client.delete(`/admin/order/${id}`)
    dispatch({ type: 'DELETE_ORDER_SUCCESS', payload: data.success })
  } catch (err) {
    dispatch({ type: 'DELETE_ORDER_REQ', payload: err.response.data.message })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: 'CLEAR_ERRORS' })
}

