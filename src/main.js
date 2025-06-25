"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

(() => {
    document.addEventListener('DOMContentLoaded', () =>  {
        const select = document.getElementById('items');
        const img = document.getElementById('displayImage');
        const fotografo = document.getElementById('photographer');
        const description = document.getElementById('description');
        const valor = document.getElementById('score');
        const buttonUp = document.getElementById('increaseScore');
        const buttonDown = document.getElementById('decreaseScore');

        // Llenar select
        for (let key in itemData) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = itemData[key].name;
            select.appendChild(option);
        }

        // Mostrar datos
        function show(key) {
            const item = itemData[key];
            if (!item) return;
            img.src = item.image;
            fotografo.value = item.photographer;
            description.value = item.description;
            valor.value = item.score;
        }

        // Mostrar el primer item al cargar (simple y directo)
        select.selectedIndex = 1; // Selecciona el primer item real (índice 0 es "Seleccione un valor")
        show(select.value);

    // Al cambiar de item
        select.addEventListener('change', (e) => {
                show(select.value);
            });


        // Aumentar score
        buttonUp.addEventListener('click', () => {
            const key = select.value;
            if (itemData[key]) {
                itemData[key].score++;
                valor.value = itemData[key].score;
            }
        });

        // Disminuir score
        buttonDown.addEventListener('click', () => {
            const key = select.value;
            if (itemData[key]) {
                itemData[key].score--;
                valor.value = itemData[key].score;
            }
        });
    });
})();

