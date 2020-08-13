import * as types from "./constants"
export const dogapi_get_breeds_image_random_read = () => ({
  type: types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ
})

export const dogapi_get_breeds_image_random_readSucceeded = response => ({
  type: types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED,
  response
})

export const dogapi_get_breeds_image_random_readFailed = error => ({
  type: types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED,
  error
})
