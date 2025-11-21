import axios from 'axios'

interface UplaodFileToStorageParams {
  file: File
  onProgress: (sizeInBytes: number) => void
}

interface UplaodFileToStorageOptions {
  signal?: AbortSignal
}

export async function uploadFileToStorage(
  { file, onProgress }: UplaodFileToStorageParams,
  options?: UplaodFileToStorageOptions
) {
  const data = new FormData()

  data.append('file', file)

  // throw new Error()

  const reponse = await axios.post<{ url: string }>('http://localhost:3333/uploads', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    signal: options?.signal,
    onUploadProgress(progressEvent) {
      onProgress(progressEvent.loaded)
    }
  })

  return { url: reponse.data.url }
}