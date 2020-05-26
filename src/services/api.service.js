import axios from 'axios';
import { appStorage } from './storage.service';


const baseURL = "https://hungry-herceg.herokuapp.com";

const getHeader = () =>({headers:{Authorization:"Bearer " + appStorage.getToken()}}); // generise objekat header sa tokenom


//Users

export const logInUser = (username, password) => axios.post(baseURL+"/user/login", {username, password});
export const getUserById = (id) => axios.get (baseURL+"/user/"+id)
export const getUsersAll = () => axios.get(baseURL+"/user");
export const createUser = (username, password) => axios.post(baseURL+"/user", {username, password}, getHeader());
export const deleteUserById = (id) => axios.delete(baseURL+"/user/"+id, getHeader());


//Restaurants

export const getRestaurantsAll = () => axios.get(baseURL+"/restaurant");
export const getRestaurantByID = id => axios.get(baseURL+"/restaurant/"+id);
export const createRestaurant = (name, address, tags, meals) => axios.post(baseURL+"/restaurant", {name, address, tags, meals}, getHeader());
export const deleteRestaurantById = (id) => axios.delete(baseURL+"/restaurant/"+id, getHeader());
export const updateMealToRestaurant = (id, meals) => axios.put(baseURL+"/restaurant/"+id, {meals}, getHeader());


 //Polls

export const createPoll = (name, duration, restaurants) => axios.post(baseURL+"/poll", {name, duration:Number(duration), restaurants}, getHeader());
export const getAllPolls = () =>  axios.get(baseURL+"/poll");
export const getPollById = (id) => axios.get(baseURL+"/poll/"+id);
export const deletePollById = (id) =>  axios.delete(baseURL+"/poll/"+id, getHeader());
export const endPollById = (id) => axios.put(baseURL + "/poll/"+id, {status:false},getHeader());
export const updateVotesByPollId = (id, votes) => axios.post(baseURL + `/poll/${id}/vote`, {restaurantId:votes}, getHeader());

//Meals

export const createMeal = (name, price, tag) => axios.post(baseURL+"/meal", {name, price, tag}, getHeader()); 
