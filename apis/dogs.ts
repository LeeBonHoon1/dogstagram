import axios from 'axios'

const getDogs = async () => {
  const res = await axios.get('http://localhost:8080/dogs')
  return res.data
}

const DogsAPIs = {
  getDogs
}

export default DogsAPIs