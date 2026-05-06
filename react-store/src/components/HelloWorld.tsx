function HelloWorld() {
    const nombreSitio = 'ReactStore'
    const descripcion = 'Tu tienda de productos favorita'
    const fechaActual = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    // Lógica para renderizado condicional y operaciones
    const estaAutenticado = false
    const stockActual = 15
    const productosVendidos = 4

    return (
        <>
            <header style={{ background: '#1a1a1a', color: 'white', padding: '1rem' }}>
                <h1>{nombreSitio}</h1>
            </header>
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <p>{descripcion}</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    {fechaActual}
                </p>

                {/* Renderizado condicional con estilos dinámicos */}
                <p style={{ marginTop: '1rem', color: estaAutenticado ? 'green' : '#555' }}>
                    {estaAutenticado ? 'Bienvenido de nuevo' : 'Inicia sesión para continuar'}
                </p>

                {/* Operación matemática simple */}
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    Productos disponibles en almacén: {stockActual - productosVendidos}
                </p>
            </main>
        </>
    )
}

export default HelloWorld