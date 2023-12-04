import axios from 'axios'

const getDogs = async () => {
  const res = await axios.get('http://localhost:8000/dogs')
  return res.data
}

const getDogProfile = async (id: number) => {
  const res = await axios.get(`http://localhost:8000/profile/${id}`)
  return res.data
}

const DogsAPIs = {
  getDogs,
  getDogProfile
}

export default DogsAPIs