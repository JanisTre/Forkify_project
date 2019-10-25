import axios from 'axios';
export default class Search{
    constructor(){
        this.query = query;
    }
    

async getResults(query){
     const key = '754b8f3a4bda36c31db1b4502aa1c430';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    
    try {
        const res = await axios (`${proxy}https://www.food2fork.com/api/get?key=${key}&q=${this.query}`);
        this.recipes = res.data.recipes;
        console.log(recipes);
    }catch(Error){
        alert(Error);
    }
}

}