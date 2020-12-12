import './style.css'
import { clickFunction } from "./button.js";
let body = document.querySelector('body');
body.innerHTML += `<input type="button" id="justButton" value="just Кнопка">`;
clickFunction();
