import http from "../http-common";

const getAll = () => {
    return http.get("/axios/list");
  };
  
  const get = id => {
    return http.get(`/axios/${id}`);
  };
  
  const write = data => {
    return http.post(`/axios/write`, data);
  };
  
  const update = (id, data) => {
    return http.put(`/axios/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`/axios/${id}`);
  };
  
  const removeAll = () => {
    return http.delete(`/tutorials`);
  };
  
  const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
  };
  
  const getPagingList = ( path  = '/axios/list2', search = '') => {
    return http.get(path + search);
  };

  export default {
    getAll,
    get,
    write,
    update,
    remove,
    removeAll,
    findByTitle,
    getPagingList
  };