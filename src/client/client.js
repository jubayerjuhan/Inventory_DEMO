import axios from 'axios';

const client = axios.create({
  baseURL: "https://rocky-eyrie-75260.herokuapp.com/api/v1",
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWNlNTg4YzM5NDYxNTllN2FkZTQ5NiIsImlhdCI6MTY0NDk0MDc5MywiZXhwIjoxNjQ1MzcyNzkzfQ.yBHoRMb1mVGuyYB8KrX00u4on_T6bDMY_k3tuC469jM`,

  }
})

export default client;

