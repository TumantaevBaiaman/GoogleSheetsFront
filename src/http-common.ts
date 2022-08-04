import axios from "axios";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0MDc3Mzk5LCJqdGkiOiI3ZWU1MzFmYzQyOTE0YmVkYWZmYmM1ZjcyNjA1ODYyMiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoidEBnbWFpbC5jb20ifQ.OjIfSNTDmLvSon9L1hBorCNGu3Z2dF840-hxbEEOZ8M'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export default axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
     Authorization: `Bearer ${token}`
  }
  // headers: { Authorization: `Bearer ${token}` }
});