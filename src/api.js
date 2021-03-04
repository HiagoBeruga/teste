import axios from 'axios';

const api = axios.create({
    
    baseURL: 'http://api.tvmaze.com/search/shows?q=star%20wars'
    //aqui a api vai retornar um json com a lista de encomendas, esse link é só pra eu ir aprendendo como funciona antes de fazer a api

});

export default api;