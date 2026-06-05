export const ROUTES_MAPPING: Record<string, string> = {
  '/': '/es',
  '/solar': '/es/solar',
  '/roofing': '/es/roofing',
  '/water-purification': '/es/water-purification',
  '/process': '/es/process',
  '/referral': '/es/referral',
  '/dealer': '/es/dealer',
  '/contact': '/es/contact',
  '/referral-terms': '/es/referral-terms',
  '/service-areas': '/es/service-areas',
  '/service-areas/florida': '/es/service-areas/florida',
  '/service-areas/massachusetts': '/es/service-areas/massachusetts',
  '/service-areas/connecticut': '/es/service-areas/connecticut',
  '/cost-savings': '/es/cost-savings',
  '/reviews': '/es/reviews',
  '/careers': '/es/careers',
  '/calculate-savings': '/es/calculate-savings',
};

// Create a reverse mapping for Spanish back to English
export const REVERSE_ROUTES_MAPPING: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTES_MAPPING).map(([enPath, esPath]) => [esPath, enPath])
);
