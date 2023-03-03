import { Vino } from './src/models/Vino';
import { VinosService } from './src/services/VinosService';

const vinosService = new VinosService();

// Mostrar la lista de vinos
const vinos: Vino[] = vinosService.listarVinos();
console.log('Lista de vinos:', vinos);

// Crear un nuevo vino
const nuevoVino: Vino = {
    id: 5,
    nombre: 'Chardonnay',
    puntaje: 87
};
vinosService.crearVino(nuevoVino);
console.log('Nuevo vino creado:', nuevoVino);
console.log('Lista de vinos actualizada:', vinosService.listarVinos());
