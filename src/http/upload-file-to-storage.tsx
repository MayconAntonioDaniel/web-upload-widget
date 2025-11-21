import axios from 'axios'

interface UplaodFileToStorageParams {
  file: File
}

interface UplaodFileToStorageOptions {
  signal?: AbortSignal
}

export async function uploadFileToStorage(
  { file }: UplaodFileToStorageParams,
  options?: UplaodFileToStorageOptions
) {
  const data = new FormData()

  data.append('file', file)

  throw new Error()

  const reponse = await axios.post<{ url: string }>('http://localhost:3333/uploads', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    signal: options?.signal,
  })

  return { url: reponse.data.url }
}