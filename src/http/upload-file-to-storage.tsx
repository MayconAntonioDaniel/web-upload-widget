import axios from 'axios'

interface UplaodFileToStorageParams {
  file: File
}

export async function uploadFileToStorage({ file }: UplaodFileToStorageParams) {
  const data = new FormData()

  data.append('file', file)

  const reponse = await axios.post<{ url: string }>('http://localhost:3333/uploads', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })

  return { url: reponse.data.url }
}