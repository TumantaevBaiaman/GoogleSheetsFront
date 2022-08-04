import http from "../http-common";
import ITutorialData from "../types/Tutorial";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0MDc3Mzk5LCJqdGkiOiI3ZWU1MzFmYzQyOTE0YmVkYWZmYmM1ZjcyNjA1ODYyMiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoidEBnbWFpbC5jb20ifQ.OjIfSNTDmLvSon9L1hBorCNGu3Z2dF840-hxbEEOZ8M'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const getAll = () => {
  return http.get("/list/", config);
};

const get = (id: any) => {
  return http.get<ITutorialData>(`/api/account/${id}/`, config);
};

const create = (data: ITutorialData) => {
  return http.post<ITutorialData>("/api/account/", data, config);
};

const update = (id: any, data: ITutorialData) => {
  return http.put<any>(`/api/account/${id}/`, data, config);
};

const remove = (id: any) => {
  return http.delete<any>(`/api/account/${id}/`, config);
};

const removeAll = () => {
  return http.delete<any>(`/api/account/`, config);
};

const findByTitle = (name: string) => {
  return http.get<Array<ITutorialData>>(`/tutorials?title=${name}`, config);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;



// import http from "../http-common";
// import ITutorialData from "../types/Tutorial";
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0MDc3Mzk5LCJqdGkiOiI3ZWU1MzFmYzQyOTE0YmVkYWZmYmM1ZjcyNjA1ODYyMiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoidEBnbWFpbC5jb20ifQ.OjIfSNTDmLvSon9L1hBorCNGu3Z2dF840-hxbEEOZ8M'

// const config = {
//   headers: { Authorization: `Bearer ${token}` }
// };

// const getAll = () => {
//   return http.get<Array<ITutorialData>>("/post/", config);
// };

// const get = (id: any) => {
//   return http.get<ITutorialData>(`/post/${id}/`, config);
// };

// const create = (data: ITutorialData) => {
//   return http.post<ITutorialData>("/post/", data, config);
// };

// const update = (id: any, data: ITutorialData) => {
//   return http.put<any>(`/post/${id}/`, data, config);
// };

// const remove = (id: any) => {
//   return http.delete<any>(`/post/${id}/`, config);
// };

// const removeAll = () => {
//   return http.delete<any>(`/post/`, config);
// };

// const findByTitle = (name: string) => {
//   return http.get<Array<ITutorialData>>(`/tutorials?title=${name}`, config);
// };

// const TutorialService = {
//   getAll,
//   get,
//   create,
//   update,
//   remove,
//   removeAll,
//   findByTitle,
// };

// export default TutorialService;
