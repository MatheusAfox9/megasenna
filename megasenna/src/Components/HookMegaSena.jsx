import React, { useState } from 'react';

const HookMegaSena = () => {
    const [numeroSorteado, setNumeroSorteado] = useState('');
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    const sortearNumero = () => {
        if (numerosSorteados.length >= 6) {
            alert('Já temos 6 números sorteados!');
            return;
        }

        let sorteado;
        do {
            sorteado = Math.floor(Math.random() * 60) + 1;
        } while (numerosSorteados.includes(sorteado));

        setNumeroSorteado(sorteado);
        setNumerosSorteados(prevArray => [...prevArray, sorteado]);
    };

    return (
        <div>
            <h2>Número sorteado: {numeroSorteado}</h2>
            <button onClick={sortearNumero}>Sortear Número</button>
            <h2>Números sorteados: {numerosSorteados.join(', ')}</h2>
        </div>
    );
};

export default HookMegaSena;