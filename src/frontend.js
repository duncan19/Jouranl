import { simonArray, colorChoice} from './backend.js';
import './styles.css';



$(document).ready(function(){

$("#start").click(function(){
  colorChoice();
  console.log(simonArray);
})

});
