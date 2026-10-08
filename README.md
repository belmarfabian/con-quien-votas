# ¿Con quién votas?

Juego de educación cívica del Centro de Estudios Públicos (CEP). Votas cinco proyectos de ley que pasaron por la Cámara de Diputadas y Diputados entre 2020 y 2026. Al final ves con qué partido coincides más, según cómo votaron de verdad sus diputados.

**Jugar:** https://belmarfabian.github.io/con-quien-votas/

## Cómo funciona

- El banco tiene 20 proyectos. Cada partida sortea cinco y al final puedes responder cinco más.
- La posición de un partido es el saldo de sus diputados en la votación de la Sala: votos a favor menos votos en contra, dividido por todos los que votaron.
- Incluye los 15 partidos constituidos ante el Servel.

## Datos

Al ver el resultado, el juego envía de forma anónima los votos y la afinidad con cada partido a una planilla privada. Lo recibe el script de `registro/Codigo.gs`, desplegado con Google Apps Script. No se guarda nombre, correo ni IP. Para probar sin mezclar datos reales, agrega `?prueba=1` al final de la dirección.

## Fuentes

- Votaciones y militancias: datos abiertos de la Cámara de Diputadas y Diputados (opendata.camara.cl).
- Partidos constituidos: Servel.
- Logos de los partidos: Wikimedia Commons y Registro de Partidos del Servel. Las licencias están en «Cómo se calcula», dentro del juego.

Prototipo. El resultado no es una recomendación de voto.
