import api from "./api";

export default function fetchUsers(number){
  return api.get(`https://randomuser.me/api/?results=${number}`);
}