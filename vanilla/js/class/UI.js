import { activeAlert, divResult } from "../selectors.js";
import { allPokemons } from "../functions.js";

class UI {

    cleanHTML() {
        // Clean HTML
        while(divResult.firstChild) {
            divResult.removeChild(divResult.firstChild);
        }
    }

    showFirstEight() {
        
        this.cleanHTML();
    
        for (let i = 0; i < 8; i++) {

            fetch(allPokemons[0][i].url)
                .then( res => res.json() )
                .then( data => {
    
                    this.showPokemon(data);
                });
        }
    }
    
    showAlert(mensaje) {
        const activeAlert = document.querySelector('.bg-red-100');
    
        if(!activeAlert) {
            const alert = document.createElement('p');
            alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

            // Add data-cy
            alert.dataset.cy = 'alert';
    
            // ========== (2 ways are proposed) ==========
            // 1) More secure but less legible and more extensive
            const strong = document.createElement('strong');
            strong.classList.add('font-bold');
            strong.textContent = 'Error: ';

            const span = document.createElement('span');
            span.classList.add('block', 'sm:inline');
            span.textContent = mensaje;

            alert.appendChild(strong);
            alert.appendChild(span);

            // 2) Clearer but a little less reliable so it has no validations and we can inadvertently enter broken HTML code
            // alert.innerHTML = `
            //         <strong class="font-bold">Error: </strong>
            //         <span class="block sm:inline">${mensaje}</span>
            //     `;     

            form.appendChild(alert);
    
            setTimeout(() => {
                alert.remove();
            }, 3000);
        }
    }
    
    showPokemon(pokemon) {
    
        const id = pokemon.id;
        const name = pokemon.name;
        const img = pokemon.sprites.other.dream_world.front_default;
        const imgAlt = pokemon.sprites.front_default;
        const hp = pokemon.stats[0].base_stat;
        const attak = pokemon.stats[1].base_stat;
        const defense = pokemon.stats[2].base_stat;
    
        // ========== Show Pokemons (2 ways are proposed) ==========
            // 1) More secure but less legible and more extensive
        const pNumberHP = document.createElement('p');
        pNumberHP.textContent = hp;
        const pDescHP = document.createElement('p');
        pDescHP.classList.add('font-light');
        pDescHP.textContent = 'Vida';
    
        const pNumberAttak = document.createElement('p');
        pNumberAttak.textContent = attak;
        const pDescAttak = document.createElement('p');
        pDescAttak.classList.add('font-light');
        pDescAttak.textContent = 'Ataque';
    
        const pNumberDefense = document.createElement('p');
        pNumberDefense.textContent = defense;
        const pDescDefense = document.createElement('p');
        pDescDefense.classList.add('font-light');
        pDescDefense.textContent = 'Defensa';
        
        const divStatHP = document.createElement('div');
        divStatHP.appendChild(pNumberHP);
        divStatHP.appendChild(pDescHP);
        
        const divStatAttak = document.createElement('div');
        divStatAttak.appendChild(pNumberAttak);
        divStatAttak.appendChild(pDescAttak);
        
        const divStatDefense = document.createElement('div');
        divStatDefense.appendChild(pNumberDefense);
        divStatDefense.appendChild(pDescDefense);
        
        const divStats = document.createElement('div');
        divStats.classList.add('flex', 'justify-around', 'mt-5');
        divStats.appendChild(divStatHP);
        divStats.appendChild(divStatAttak);
        divStats.appendChild(divStatDefense);
        
        const spanId = document.createElement('span');
        spanId.classList.add('font-light');
        spanId.textContent = `#${id} `;
        
        const pName = document.createElement('p');
        pName.classList.add('font-bold', 'uppercase');
        pName.appendChild(spanId);
        pName.textContent = name;
        
        const divData = document.createElement('div');
        divData.classList.add('pb-4', 'text-center', 'font-bold');
        divData.appendChild(pName);
        divData.appendChild(divStats);
        
        const imgImg = document.createElement('img');
        imgImg.classList.add('w-full', 'p-5', 'img-pokeon');
        imgImg.src = img ? img : imgAlt;
    
        const divCard = document.createElement('div');
        divCard.classList.add('bg-white', 'bg-opacity-50', 'rounded-lg', 'overflow-hidden', 'shadow-md', 'hover:bg-gray-100', 'transition', 'duration-300', 'ease-in');
        divCard.appendChild(imgImg);
        divCard.appendChild(divData);
    
        const divContainer = document.createElement('div');
        divContainer.classList.add('w-1/2', 'md:w-1/3', 'lg:w-1/4', 'p-3', 'mb-4');
        divContainer.appendChild(divCard);
    
        divResult.appendChild(divContainer);
    
        // 2) Clearer but a little less reliable so it has no validations and we can inadvertently enter broken HTML code
        // result.innerHTML += `
            // <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            //     <div class="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 transition duration-300 ease-in">
    
            //         <img class="w-full p-5 img-pokeon" src="${img ? img : imgAlt}">
    
            //         <div class="pb-4 text-center font-bold">
            //             <p class=" uppercase"><span class="font-light">#${id} </span>${name}</p>
    
            //             <div class="flex justify-around mt-5">
            //                 <div>
            //                     <p>${hp}K </p>
            //                     <p class="font-light">Vida</p>
            //                 </div>
            //                 <div>
            //                     <p>${attak}K </p>
            //                     <p class="font-light">Ataque</p>
            //                 </div>
            //                 <div>
            //                     <p>${defense}K </p>
            //                     <p class="font-light">Defensa</p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        // `
    }
}

export default UI;