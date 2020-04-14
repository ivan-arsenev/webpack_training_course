import Post from './Post'
import './styles/styles.css'
import json from './assets/jsonData.json'
import  fireLogo from './assets/fireimage.png'


const post = new Post('Webpack post titile',fireLogo)


console.log("Post to string" , post.toString())
console.log('JSON:' , json)