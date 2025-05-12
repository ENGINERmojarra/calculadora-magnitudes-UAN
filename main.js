// funciones investigadas y consultadas conb el compañero jhosua 
function validar(...valores) {
  return valores.every(v => !isNaN(v) && v !== 0);
}

function calcularVelocidad() {
  const d = parseFloat(document.getElementById('distancia').value);
  const t = parseFloat(document.getElementById('tiempo').value);
  const r = document.getElementById('resultadoVelocidad');
  r.textContent = validar(d, t) ? `Velocidad: ${(d / t).toFixed(2)} m/s` : 'Datos inválidos';
}

function calcularAceleracion() {
  const dv = parseFloat(document.getElementById('deltaV').value);
  const dt = parseFloat(document.getElementById('deltaT').value);
  const r = document.getElementById('resultadoAceleracion');
  r.textContent = validar(dv, dt) ? `Aceleración: ${(dv / dt).toFixed(2)} m/s²` : 'Datos inválidos';
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById('masaFuerza').value);
  const a = parseFloat(document.getElementById('aceleracionFuerza').value);
  const r = document.getElementById('resultadoFuerza');
  r.textContent = validar(m, a) ? `Fuerza: ${(m * a).toFixed(2)} N` : 'Datos inválidos';
}

function calcularTrabajo() {
  const F = parseFloat(document.getElementById('fuerzaTrabajo').value);
  const d = parseFloat(document.getElementById('distanciaTrabajo').value);
  const ang = parseFloat(document.getElementById('anguloTrabajo').value);
  const r = document.getElementById('resultadoTrabajo');
  r.textContent = validar(F, d, ang) ? `Trabajo: ${(F * d * Math.cos(ang * Math.PI / 180)).toFixed(2)} J` : 'Datos inválidos';
}

function calcularEnergiaCinetica() {
  const m = parseFloat(document.getElementById('masaCinetica').value);
  const v = parseFloat(document.getElementById('velocidadCinetica').value);
  const r = document.getElementById('resultadoEnergiaCinetica');
  r.textContent = validar(m, v) ? `Energía Cinética: ${(0.5 * m * v ** 2).toFixed(2)} J` : 'Datos inválidos';
}

function calcularEnergiaPotencial() {
  const m = parseFloat(document.getElementById('masaPotencial').value);
  const h = parseFloat(document.getElementById('alturaPotencial').value);
  const g = 9.81;
  const r = document.getElementById('resultadoEnergiaPotencial');
  r.textContent = validar(m, h) ? `Energía Potencial: ${(m * g * h).toFixed(2)} J` : 'Datos inválidos';
}

function calcularDensidad() {
  const m = parseFloat(document.getElementById('masaDensidad').value);
  const V = parseFloat(document.getElementById('volumenDensidad').value);
  const r = document.getElementById('resultadoDensidad');
  r.textContent = validar(m, V) ? `Densidad: ${(m / V).toFixed(2)} kg/m³` : 'Datos inválidos';
}

function calcularPresion() {
  const F = parseFloat(document.getElementById('fuerzaPresion').value);
  const A = parseFloat(document.getElementById('areaPresion').value);
  const r = document.getElementById('resultadoPresion');
  r.textContent = validar(F, A) ? `Presión: ${(F / A).toFixed(2)} Pa` : 'Datos inválidos';
}

function calcularCarga() {
  const I = parseFloat(document.getElementById('corrienteCarga').value);
  const t = parseFloat(document.getElementById('tiempoCarga').value);
  const r = document.getElementById('resultadoCarga');
  r.textContent = validar(I, t) ? `Carga: ${(I * t).toFixed(2)} C` : 'Datos inválidos';
}

function calcularOhm() {
  const I = parseFloat(document.getElementById('corrienteOhm').value);
  const R = parseFloat(document.getElementById('resistenciaOhm').value);
  const r = document.getElementById('resultadoOhm');
  r.textContent = validar(I, R) ? `Voltaje: ${(I * R).toFixed(2)} V` : 'Datos inválidos';
}
