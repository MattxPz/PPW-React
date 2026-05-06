#  Proyecto React – CRUD con Consumo de API

##  Objetivo
Desarrollar una aplicación en **React** que implemente operaciones CRUD completas consumiendo una API externa, con manejo de estados de carga, errores y arquitectura modular.

---

##  Características
-  Aplicación creada con React
-  Servicio API separado
-  Operaciones CRUD completas (GET, POST, PUT, DELETE)
-  Manejo de estado con hooks
-  Spinner de carga
-  Manejo visual de errores
-  Actualización dinámica del DOM

---

##  Creación del Proyecto
```
npm create vite@latest nombre-proyecto -- --template react
cd nombre-proyecto
npm install
npm run dev
```
---

##  Estructura del Proyecto
```
src/
  components/
  services/
    api.js
  App.jsx
  main.jsx
  styles.css
```
---

##  Servicio API

Archivo:
src/services/api.js

Ejemplo:
```
export const API_URL = 'https://api.example.com/items';

export async function getItems() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error GET');
  return res.json();
}

export async function createItem(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error POST');
  return res.json();
}

export async function updateItem(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error PUT');
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error DELETE');
}
```
---

##  Uso en App.jsx

Ejemplo básico:
```
import { useEffect, useState } from 'react';
import { getItems, createItem, updateItem, deleteItem } from './services/api';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getItems();
      setItems(data);
    } catch (err) {
      setError('Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>CRUD React</h1>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.nombre}
            <button onClick={() => deleteItem(item.id).then(loadItems)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
---

##  Operaciones CRUD

| Operación | Método | Descripción |
|----------|--------|------------|
| GET | Obtener datos | Carga inicial |
| POST | Crear | Agrega elementos |
| PUT | Actualizar | Modifica registros |
| DELETE | Eliminar | Borra elementos |

---

##  Manejo de Estados

- **Loading:** muestra spinner o mensaje mientras carga
- **Error:** muestra mensaje si falla la petición
- **Data:** renderiza lista dinámica

---

##  Validación
-  Datos cargan correctamente desde la API
-  CRUD funcional
-  UI responde a cambios sin recargar
-  Manejo de errores implementado

---

##  Buenas Prácticas
- Separar lógica en `/services`
- Usar hooks (`useState`, `useEffect`)
- Manejar errores con try/catch
- No mezclar lógica de red con UI

---

##  Notas Técnicas
- React + Vite
- Fetch API
- Componentes funcionales
- Hooks

---

##  Autor -- Mateo Paez
Proyecto práctico de consumo de API con React