import { getApiPath } from '@/utils/getAPIPath'
import { ApiVersionEnum } from "@/enums/apiVersion"
import axiosConfig from "../config"

export const getChats = async () => {
    const response = await axiosConfig({
    url: getApiPath({
      version: ApiVersionEnum.V1,
      service: '', //todo
      path: '/chats/',
    }),
    method: 'GET',
  })

  return response.data
}
