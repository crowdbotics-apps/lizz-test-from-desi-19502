import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED:
    default:
      return state
  }
}
