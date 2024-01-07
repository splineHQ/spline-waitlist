import { formDataModel } from '@spline/types'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const postSubmisson = async (formData: formDataModel): Promise<AxiosResponse> => {
  const response: AxiosResponse = await api.post(`/${process.env.NEXT_PUBLIC_FORMCARRY_ID}`, formData)

  return response
}

export default { postSubmisson }
