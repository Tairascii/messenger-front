interface GetApiPathParams {
  version: string
  service: string
  path: string
}

export const getApiPath = ({
  version,
  service,
  path,
}: GetApiPathParams): string => {
  //TODO add service
  const finalPath = `${process.env.NEXT_PUBLIC_API_URL}/api/${version}/${path}`

  return finalPath
}
