import { ui } from "../index.js";
// import { form } from "../selectors.js";
import { allPokemons, validateForm } from "../functions.js";
import { form } from "../selectors.js";

class App {
    constructor() {
        this.url = `https://pokeapi.co/api/v2/pokemon/?limit=10000`;
        this.initApp();
    }

    initApp() {
        window.onload = () => {
            try {
                fetch(this.url)
                    .then( res => res.json() )
                    .then( res => {
                        allPokemons.push(res.results);
                        
                        ui.showFirstEight();
                        form.addEventListener('submit', validateForm);
                    });
                
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default App;