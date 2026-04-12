import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Métricas personalizadas
const healthDuration = new Trend('health_duration');
const productsDuration = new Trend('products_duration');
const errorRate = new Rate('error_rate');

// Configuración de la prueba
export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Subir a 10 usuarios en 30s
    { duration: '1m',  target: 10 },  // Mantener 10 usuarios por 1 minuto
    { duration: '30s', target: 0  },  // Bajar a 0 usuarios
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% de requests < 500ms
    error_rate: ['rate<0.1'],          // Menos del 10% de errores
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export default function () {

  // --- Vista 1: Health Check ---
  const healthRes = http.get(`${BASE_URL}/health`);
  
  healthDuration.add(healthRes.timings.duration);
  errorRate.add(healthRes.status !== 200);

  check(healthRes, {
    '[Health] status 200':        (r) => r.status === 200,
    '[Health] body tiene status': (r) => JSON.parse(r.body).status === 'OK',
    '[Health] respuesta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);

  // --- Vista 2: Products ---
  const productsRes = http.get(`${BASE_URL}/products`);

  productsDuration.add(productsRes.timings.duration);
  errorRate.add(productsRes.status !== 200);

  check(productsRes, {
    '[Products] status 200':         (r) => r.status === 200,
    '[Products] retorna array':      (r) => Array.isArray(JSON.parse(r.body)),
    '[Products] tiene productos':    (r) => JSON.parse(r.body).length > 0,
    '[Products] respuesta < 500ms':  (r) => r.timings.duration < 500,
  });

  sleep(1);

  // --- Vista 3: Users ---
  const usersRes = http.get(`${BASE_URL}/users`);

  errorRate.add(usersRes.status !== 200);

  check(usersRes, {
    '[Users] status 200':        (r) => r.status === 200,
    '[Users] respuesta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
