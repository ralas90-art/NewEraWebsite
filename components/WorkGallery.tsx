'use client';

import React, { useState, useEffect } from 'react';
import { Maximize2, ShieldCheck, Star, X, Sun, Sparkles, TrendingUp, Calendar, Wrench, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

type StateFilter = 'All' | 'Florida' | 'Massachusetts' | 'Connecticut';
type SizeFilter = 'All' | 'Small' | 'Medium' | 'Large';
type ServiceFilter = 'All' | 'Solar' | 'Roofing' | 'Combo';

interface Project {
  id: string;
  coverImage: string;      // shown in grid — loaded eagerly
  images: string[];        // all images — loaded lazily when modal opens
  locationEn: string;
  locationEs: string;
  state: 'Florida' | 'Massachusetts' | 'Connecticut';
  size: string;
  sizeCategory: 'Small' | 'Medium' | 'Large';
  panels: number;
  savingsEn: string;
  savingsEs: string;
  year: number;
  co2OffsetEn: string;
  co2OffsetEs: string;
  serviceEn: string;
  serviceEs: string;
  serviceType: 'Solar' | 'Roofing' | 'Combo';
  reviewerName: string;
  reviewTextEn: string;
  reviewTextEs: string;
  reviewLink?: string;
  rating: number;
}

const PROJECTS: Project[] = [
  {
    "id": "fl-haines-city-01",
    "coverImage": "/images/gallery/fl-haines-city-01/1.webp",
    "images": [
      "/images/gallery/fl-haines-city-01/1.webp",
      "/images/gallery/fl-haines-city-01/2.webp",
      "/images/gallery/fl-haines-city-01/3.webp",
      "/images/gallery/fl-haines-city-01/4.webp"
    ],
    "locationEn": "Haines City, FL",
    "locationEs": "Haines City, FL",
    "state": "Florida",
    "size": "10.4 kW",
    "sizeCategory": "Medium",
    "panels": 26,
    "savingsEn": "$2,100 / yr",
    "savingsEs": "$2,100 / al año",
    "year": 2026,
    "co2OffsetEn": "6.4 Tons / yr",
    "co2OffsetEs": "6.4 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Anny V.",
    "reviewTextEn": "Outstanding solar project installation completed with great attention to detail. Fast approval and zero delays.",
    "reviewTextEs": "Excelente instalación del proyecto solar completada con gran atención al detalle. Aprobación rápida y sin retrasos.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "ma-topsfield-01",
    "coverImage": "/images/gallery/ma-topsfield-01/1.webp",
    "images": [
      "/images/gallery/ma-topsfield-01/1.webp",
      "/images/gallery/ma-topsfield-01/2.webp",
      "/images/gallery/ma-topsfield-01/3.webp",
      "/images/gallery/ma-topsfield-01/4.webp"
    ],
    "locationEn": "Topsfield, MA",
    "locationEs": "Topsfield, MA",
    "state": "Massachusetts",
    "size": "11.2 kW",
    "sizeCategory": "Medium",
    "panels": 28,
    "savingsEn": "$2,850 / yr",
    "savingsEs": "$2,850 / al año",
    "year": 2025,
    "co2OffsetEn": "7.2 Tons / yr",
    "co2OffsetEs": "7.2 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Emily F.",
    "reviewTextEn": "Great experience setting up solar in Massachusetts. The crew handled the winter roof preparation perfectly and installation was incredibly clean.",
    "reviewTextEs": "Excelente experiencia configurando energía solar en Massachusetts. El equipo manejó la preparación del techo de invierno perfectamente y la instalación fue increíblemente limpia.",
    "reviewLink": "https://www.google.com/maps/contrib/109664566418764018914/reviews",
    "rating": 5
  },
  {
    "id": "fl-ocala-01",
    "coverImage": "/images/gallery/fl-ocala-01/1.webp",
    "images": [
      "/images/gallery/fl-ocala-01/1.webp",
      "/images/gallery/fl-ocala-01/2.webp",
      "/images/gallery/fl-ocala-01/3.webp",
      "/images/gallery/fl-ocala-01/4.webp",
      "/images/gallery/fl-ocala-01/5.webp"
    ],
    "locationEn": "Ocala, FL",
    "locationEs": "Ocala, FL",
    "state": "Florida",
    "size": "9.6 kW",
    "sizeCategory": "Medium",
    "panels": 24,
    "savingsEn": "$1,920 / yr",
    "savingsEs": "$1,920 / al año",
    "year": 2026,
    "co2OffsetEn": "5.8 Tons / yr",
    "co2OffsetEs": "5.8 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Fabiola N.",
    "reviewTextEn": "Very professional installation team. Complete cleanup and fast inspection turnaround.",
    "reviewTextEs": "Equipo de instalación muy profesional. Limpieza completa y rápido proceso de inspección.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-port-charlotte-01",
    "coverImage": "/images/gallery/fl-port-charlotte-01/1.webp",
    "images": [
      "/images/gallery/fl-port-charlotte-01/1.webp",
      "/images/gallery/fl-port-charlotte-01/2.webp",
      "/images/gallery/fl-port-charlotte-01/3.webp",
      "/images/gallery/fl-port-charlotte-01/4.webp"
    ],
    "locationEn": "Port Charlotte, FL",
    "locationEs": "Port Charlotte, FL",
    "state": "Florida",
    "size": "12.0 kW",
    "sizeCategory": "Medium",
    "panels": 30,
    "savingsEn": "$2,380 / yr",
    "savingsEs": "$2,380 / al año",
    "year": 2025,
    "co2OffsetEn": "7.6 Tons / yr",
    "co2OffsetEs": "7.6 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Gail R.",
    "reviewTextEn": "Smooth process from start to finish. The team answered all questions and panels look very neat.",
    "reviewTextEs": "Proceso sin problemas de principio a fin. El equipo respondió a todas las preguntas y los paneles se ven muy ordenados.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-haines-city-02",
    "coverImage": "/images/gallery/fl-haines-city-02/1.webp",
    "images": [
      "/images/gallery/fl-haines-city-02/1.webp",
      "/images/gallery/fl-haines-city-02/2.webp",
      "/images/gallery/fl-haines-city-02/3.webp",
      "/images/gallery/fl-haines-city-02/4.webp",
      "/images/gallery/fl-haines-city-02/5.webp"
    ],
    "locationEn": "Haines City, FL",
    "locationEs": "Haines City, FL",
    "state": "Florida",
    "size": "8.8 kW",
    "sizeCategory": "Medium",
    "panels": 22,
    "savingsEn": "$1,750 / yr",
    "savingsEs": "$1,750 / al año",
    "year": 2025,
    "co2OffsetEn": "5.4 Tons / yr",
    "co2OffsetEs": "5.4 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Iris V.",
    "reviewTextEn": "Incredible solar upgrade. Punctual crew and transparent contract with no hidden fees.",
    "reviewTextEs": "Increíble actualización solar. Equipo puntual y contrato transparente sin tarifas ocultas.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-fort-myers-01",
    "coverImage": "/images/gallery/fl-fort-myers-01/1.webp",
    "images": [
      "/images/gallery/fl-fort-myers-01/1.webp",
      "/images/gallery/fl-fort-myers-01/2.webp",
      "/images/gallery/fl-fort-myers-01/3.webp",
      "/images/gallery/fl-fort-myers-01/4.webp",
      "/images/gallery/fl-fort-myers-01/5.webp"
    ],
    "locationEn": "Fort Myers, FL",
    "locationEs": "Fort Myers, FL",
    "state": "Florida",
    "size": "12.8 kW",
    "sizeCategory": "Large",
    "panels": 32,
    "savingsEn": "$2,490 / yr",
    "savingsEs": "$2,490 / al año",
    "year": 2025,
    "co2OffsetEn": "8.1 Tons / yr",
    "co2OffsetEs": "8.1 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Karen S.",
    "reviewTextEn": "Professional crew. Highly recommend for home energy upgrades. Zero pressure to buy and unbeatable rates.",
    "reviewTextEs": "Equipo profesional. Muy recomendado para mejoras de energía en el hogar. Cero presión para comprar y tarifas insuperables.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-estero-01",
    "coverImage": "/images/gallery/fl-estero-01/1.webp",
    "images": [
      "/images/gallery/fl-estero-01/1.webp",
      "/images/gallery/fl-estero-01/2.webp",
      "/images/gallery/fl-estero-01/3.webp",
      "/images/gallery/fl-estero-01/4.webp",
      "/images/gallery/fl-estero-01/5.webp"
    ],
    "locationEn": "Estero, FL",
    "locationEs": "Estero, FL",
    "state": "Florida",
    "size": "8.0 kW",
    "sizeCategory": "Medium",
    "panels": 20,
    "savingsEn": "$1,620 / yr",
    "savingsEs": "$1,620 / al año",
    "year": 2025,
    "co2OffsetEn": "5.0 Tons / yr",
    "co2OffsetEs": "5.0 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Kripali P.",
    "reviewTextEn": "Great solar design and efficient installation. Beautiful layout on the roof and immediate savings.",
    "reviewTextEs": "Excelente diseño solar e instalación eficiente. Hermosa distribución en el techo y ahorros inmediatos.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-ocala-02",
    "coverImage": "/images/gallery/fl-ocala-02/1.webp",
    "images": [
      "/images/gallery/fl-ocala-02/1.webp",
      "/images/gallery/fl-ocala-02/2.webp",
      "/images/gallery/fl-ocala-02/3.webp",
      "/images/gallery/fl-ocala-02/4.webp"
    ],
    "locationEn": "Ocala, FL",
    "locationEs": "Ocala, FL",
    "state": "Florida",
    "size": "10.4 kW",
    "sizeCategory": "Medium",
    "panels": 26,
    "savingsEn": "$2,050 / yr",
    "savingsEs": "$2,050 / al año",
    "year": 2026,
    "co2OffsetEn": "6.4 Tons / yr",
    "co2OffsetEs": "6.4 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Nitza R.",
    "reviewTextEn": "Fast installation timeline and clean cleanup. The project managers were extremely helpful.",
    "reviewTextEs": "Cronograma de instalación rápido y limpieza ordenada. Los gerentes de proyecto fueron de gran ayuda.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-safety-harbor-01",
    "coverImage": "/images/gallery/fl-safety-harbor-01/1.webp",
    "images": [
      "/images/gallery/fl-safety-harbor-01/1.webp",
      "/images/gallery/fl-safety-harbor-01/2.webp",
      "/images/gallery/fl-safety-harbor-01/3.webp",
      "/images/gallery/fl-safety-harbor-01/4.webp",
      "/images/gallery/fl-safety-harbor-01/5.webp"
    ],
    "locationEn": "Safety Harbor, FL",
    "locationEs": "Safety Harbor, FL",
    "state": "Florida",
    "size": "11.2 kW",
    "sizeCategory": "Medium",
    "panels": 28,
    "savingsEn": "$2,200 / yr",
    "savingsEs": "$2,200 / al año",
    "year": 2026,
    "co2OffsetEn": "7.0 Tons / yr",
    "co2OffsetEs": "7.0 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Patrick G.",
    "reviewTextEn": "Ruben was very knowledgeable. Affordable and straightforward pricing with zero hidden fees.",
    "reviewTextEs": "Rubén fue muy servicial. Precios accesibles y claros, sin cargos ocultos.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-port-charlotte-02",
    "coverImage": "/images/gallery/fl-port-charlotte-02/1.webp",
    "images": [
      "/images/gallery/fl-port-charlotte-02/1.webp",
      "/images/gallery/fl-port-charlotte-02/2.webp",
      "/images/gallery/fl-port-charlotte-02/3.webp",
      "/images/gallery/fl-port-charlotte-02/4.webp",
      "/images/gallery/fl-port-charlotte-02/5.webp"
    ],
    "locationEn": "Port Charlotte, FL",
    "locationEs": "Port Charlotte, FL",
    "state": "Florida",
    "size": "10.4 kW",
    "sizeCategory": "Medium",
    "panels": 26,
    "savingsEn": "$2,080 / yr",
    "savingsEs": "$2,080 / al año",
    "year": 2026,
    "co2OffsetEn": "6.4 Tons / yr",
    "co2OffsetEs": "6.4 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Ralph G.",
    "reviewTextEn": "The techs were very good installing and tested the solar panels which showed they were working perfectly.",
    "reviewTextEs": "Los técnicos fueron muy buenos instalando y probaron los paneles solares, que mostraron estar funcionando a la perfección.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-north-fort-myers-01",
    "coverImage": "/images/gallery/fl-north-fort-myers-01/1.webp",
    "images": [
      "/images/gallery/fl-north-fort-myers-01/1.webp",
      "/images/gallery/fl-north-fort-myers-01/2.webp",
      "/images/gallery/fl-north-fort-myers-01/3.webp",
      "/images/gallery/fl-north-fort-myers-01/4.webp",
      "/images/gallery/fl-north-fort-myers-01/5.webp",
      "/images/gallery/fl-north-fort-myers-01/6.webp"
    ],
    "locationEn": "North Fort Myers, FL",
    "locationEs": "North Fort Myers, FL",
    "state": "Florida",
    "size": "14.4 kW",
    "sizeCategory": "Large",
    "panels": 36,
    "savingsEn": "$2,980 / yr",
    "savingsEs": "$2,980 / al año",
    "year": 2026,
    "co2OffsetEn": "9.2 Tons / yr",
    "co2OffsetEs": "9.2 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Tyler N.",
    "reviewTextEn": "Highly professional installers. Clean conduit runs, neat panel placement, and great communication.",
    "reviewTextEs": "Instaladores altamente profesionales. Tubos de cables limpios, colocación ordenada de paneles y gran comunicación.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-palm-harbor-01",
    "coverImage": "/images/gallery/fl-palm-harbor-01/1.webp",
    "images": [
      "/images/gallery/fl-palm-harbor-01/1.webp",
      "/images/gallery/fl-palm-harbor-01/2.webp",
      "/images/gallery/fl-palm-harbor-01/3.webp",
      "/images/gallery/fl-palm-harbor-01/4.webp"
    ],
    "locationEn": "Palm Harbor, FL",
    "locationEs": "Palm Harbor, FL",
    "state": "Florida",
    "size": "12.0 kW",
    "sizeCategory": "Medium",
    "panels": 30,
    "savingsEn": "$2,350 / yr",
    "savingsEs": "$2,350 / al año",
    "year": 2026,
    "co2OffsetEn": "7.6 Tons / yr",
    "co2OffsetEs": "7.6 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Vincent D.",
    "reviewTextEn": "Fantastic solar integration. The crew worked efficiently and the system is producing optimal clean energy.",
    "reviewTextEs": "Fantástica integración solar. El equipo trabajó de manera eficiente y el sistema está produciendo energía limpia de forma óptima.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-the-villages-01",
    "coverImage": "/images/gallery/fl-the-villages-01/1.webp",
    "images": [
      "/images/gallery/fl-the-villages-01/1.webp",
      "/images/gallery/fl-the-villages-01/2.webp",
      "/images/gallery/fl-the-villages-01/3.webp",
      "/images/gallery/fl-the-villages-01/4.webp",
      "/images/gallery/fl-the-villages-01/5.webp"
    ],
    "locationEn": "The Villages, FL",
    "locationEs": "The Villages, FL",
    "state": "Florida",
    "size": "13.6 kW",
    "sizeCategory": "Large",
    "panels": 34,
    "savingsEn": "$3,150 / yr",
    "savingsEs": "$3,150 / al año",
    "year": 2025,
    "co2OffsetEn": "8.8 Tons / yr",
    "co2OffsetEs": "8.8 Toneladas / al año",
    "serviceEn": "Solar + Roofing Upgrade",
    "serviceEs": "Mejora de Techo y Solar",
    "serviceType": "Combo",
    "reviewerName": "William N.",
    "reviewTextEn": "Complete new roof install along with a premium 34-panel solar system. Exceptional coordination and cleanup.",
    "reviewTextEs": "Instalación completa de techo nuevo junto con un sistema solar premium de 34 paneles. Coordinación y limpieza excepcionales.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-ormond-beach-01",
    "coverImage": "/images/gallery/fl-ormond-beach-01/1.webp",
    "images": [
      "/images/gallery/fl-ormond-beach-01/1.webp",
      "/images/gallery/fl-ormond-beach-01/2.webp",
      "/images/gallery/fl-ormond-beach-01/3.webp",
      "/images/gallery/fl-ormond-beach-01/4.webp",
      "/images/gallery/fl-ormond-beach-01/5.webp"
    ],
    "locationEn": "Ormond Beach, FL",
    "locationEs": "Ormond Beach, FL",
    "state": "Florida",
    "size": "11.2 kW",
    "sizeCategory": "Medium",
    "panels": 28,
    "savingsEn": "$2,180 / yr",
    "savingsEs": "$2,180 / al año",
    "year": 2026,
    "co2OffsetEn": "6.9 Tons / yr",
    "co2OffsetEs": "6.9 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Kevin F.",
    "reviewTextEn": "Great cleanup, polite workers, and fast execution. We had an excellent experience with the sales representative Steve.",
    "reviewTextEs": "Gran limpieza, trabajadores amables y rápida ejecución. Tuvimos una excelente experiencia con el representante de ventas Steve.",
    "reviewLink": "https://www.google.com/maps/place/New+Era+Solar+Energy/@33.641543,-78.7468785,5z/data=!4m8!3m7!1s0x44617ac98459f235:0x5284b404371bfa64!8m2!3d33.641543!4d-78.7468785!9m1!1b1!16s%2Fg%2F11rcpx4l6j",
    "rating": 5
  },
  {
    "id": "fl-st-petersburg-01",
    "coverImage": "/videos/st-petersburg.mp4",
    "images": [
      "/videos/st-petersburg.mp4"
    ],
    "locationEn": "St. Petersburg, FL",
    "locationEs": "St. Petersburg, FL",
    "state": "Florida",
    "size": "9.6 kW",
    "sizeCategory": "Medium",
    "panels": 24,
    "savingsEn": "$1,900 / yr",
    "savingsEs": "$1,900 / al año",
    "year": 2026,
    "co2OffsetEn": "5.9 Tons / yr",
    "co2OffsetEs": "5.9 Toneladas / al año",
    "serviceEn": "Solar Installation",
    "serviceEs": "Instalación Solar",
    "serviceType": "Solar",
    "reviewerName": "Virginia G.",
    "reviewTextEn": "Great presentation of product. Very well explained. Carmen and Steve were wonderful to work with.",
    "reviewTextEs": "Excelente presentación del producto. Muy bien explicado. Carmen y Steve fueron maravillosos para trabajar.",
    "reviewLink": "https://www.google.com/maps/contrib/115408279625487296078/reviews?hl=en",
    "rating": 5
  }
];

const PlaceholderCard = ({ isSpanish }: { isSpanish: boolean }) => (
  <div className="w-full h-full bg-gradient-to-br from-[#FAF9F6] to-[#F1F6FA] flex flex-col items-center justify-center p-6 text-center select-none">
    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#F1F5F9] mb-3">
      <Sun className="w-7 h-7 text-[#ff5722] stroke-[1.5]" />
    </div>
    <span className="font-poppins font-bold text-xs md:text-sm text-[#14324b] tracking-tight mb-1">
      {isSpanish ? 'Foto del proyecto próximamente' : 'Project photo coming soon'}
    </span>
    <span className="font-sans text-[10px] md:text-xs text-[#5F6F75] opacity-90 max-w-[200px] leading-snug">
      {isSpanish ? 'Instalación completada por New Era Solar Energy' : 'Completed installation by New Era Solar Energy'}
    </span>
  </div>
);

function GalleryMedia({
  src,
  alt,
  className,
  isSpanish,
  failedImages,
  setFailedImages,
  controls = false,
  autoPlay = false
}: {
  src: string;
  alt: string;
  className?: string;
  isSpanish: boolean;
  failedImages: Record<string, boolean>;
  setFailedImages: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  controls?: boolean;
  autoPlay?: boolean;
}) {
  const isVideo = src.endsWith('.mp4');
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isVideo) return;
    const img = imgRef.current;
    if (img) {
      if (img.complete && img.naturalWidth === 0) {
        setFailedImages((prev) => ({ ...prev, [src]: true }));
      }
    }
  }, [src, isVideo, setFailedImages]);

  if (failedImages[src]) {
    return <PlaceholderCard isSpanish={isSpanish} />;
  }

  if (isVideo) {
    return (
      <video
        src={src}
        className={className}
        controls={controls}
        autoPlay={autoPlay}
        muted={!controls}
        playsInline
        preload="metadata"
        onError={() => setFailedImages((prev) => ({ ...prev, [src]: true }))}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailedImages((prev) => ({ ...prev, [src]: true }))}
    />
  );
}

interface WorkGalleryProps {
  locale: Locale;
}

export function WorkGallery({ locale }: WorkGalleryProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? reviewsPageTranslations.es : reviewsPageTranslations.en;

  const [stateFilter, setStateFilter] = useState<StateFilter>('All');
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>('All');
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  // modalImages is only populated when the modal opens — lazy loading
  const [modalImages, setModalImages] = useState<string[]>([]);

  const lastActiveElementRef = React.useRef<HTMLElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const openProject = (project: Project) => {
    setCurrentImageIndex(0);
    setSelectedProject(project);
    // Lazy-load carousel images only when modal opens
    setModalImages(project.images);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImages([]);
  };

  // Keyboard navigation listener and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && selectedProject && modalImages.length > 1) {
        setCurrentImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight' && selectedProject && modalImages.length > 1) {
        setCurrentImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      // Save last active element and focus the modal
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
        lastActiveElementRef.current = null;
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject, modalImages]);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchState = stateFilter === 'All' || project.state === stateFilter;
    const matchSize = sizeFilter === 'All' || project.sizeCategory === sizeFilter;
    const matchService = serviceFilter === 'All' || project.serviceType === serviceFilter;
    return matchState && matchSize && matchService;
  });

  return (
    <div className="w-full">
      {/* Gallery Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold uppercase text-[#ff5722] tracking-widest mb-3 block">
          {t.galleryTag}
        </span>
        <h2 className="font-poppins font-bold text-2xl md:text-4xl text-[#14324b] mb-4">
          {t.galleryTitle}
        </h2>
        <p className="text-[#4e5257] font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {t.galleryDesc}
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-[#E2E8F0] rounded-3xl p-5 md:p-6 shadow-sm mb-10 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
        <div className="flex flex-wrap gap-5 w-full lg:w-auto">
          {/* State Filter */}
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <span className="text-xs font-bold text-[#14324b]/70 font-sans tracking-wide uppercase">
              {t.filterState}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Florida', 'Massachusetts', 'Connecticut'] as StateFilter[]).map((state) => (
                <button
                  key={state}
                  onClick={() => setStateFilter(state)}
                  aria-pressed={stateFilter === state}
                  className={`px-3.5 py-1.5 rounded-xl font-poppins font-bold text-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none ${
                    stateFilter === state
                      ? 'bg-[#14324b] text-white shadow-sm'
                      : 'bg-[#F9FAFB] border border-[#E2E8F0] text-[#5F6F75] hover:bg-[#14324b]/5'
                  }`}
                >
                  {state === 'All' ? t.all : state}
                </button>
              ))}
            </div>
          </div>

          {/* Service Filter */}
          <div className="flex flex-col gap-2 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-[#E2E8F0] pt-4 sm:pt-0 sm:pl-5">
            <span className="text-xs font-bold text-[#14324b]/70 font-sans tracking-wide uppercase">
              {t.filterService}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Solar', 'Combo'] as ServiceFilter[]).map((serv) => (
                <button
                  key={serv}
                  onClick={() => setServiceFilter(serv)}
                  aria-pressed={serviceFilter === serv}
                  className={`px-3.5 py-1.5 rounded-xl font-poppins font-bold text-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none ${
                    serviceFilter === serv
                      ? 'bg-[#14324b] text-white shadow-sm'
                      : 'bg-[#F9FAFB] border border-[#E2E8F0] text-[#5F6F75] hover:bg-[#14324b]/5'
                  }`}
                >
                  {serv === 'All' ? t.all : serv === 'Combo' ? (isSpanish ? 'Solar + Techo' : 'Solar + Roof') : serv}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="flex flex-col gap-2 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-[#E2E8F0] pt-4 sm:pt-0 sm:pl-5">
            <span className="text-xs font-bold text-[#14324b]/70 font-sans tracking-wide uppercase">
              {t.filterSize}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Small', 'Medium', 'Large'] as SizeFilter[]).map((size) => (
                <button
                  key={size}
                  onClick={() => setSizeFilter(size)}
                  aria-pressed={sizeFilter === size}
                  className={`px-3.5 py-1.5 rounded-xl font-poppins font-bold text-xs transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none ${
                    sizeFilter === size
                      ? 'bg-[#14324b] text-white shadow-sm'
                      : 'bg-[#F9FAFB] border border-[#E2E8F0] text-[#5F6F75] hover:bg-[#14324b]/5'
                  }`}
                >
                  {size === 'All' ? t.all : size === 'Small' ? '< 8 kW' : size === 'Medium' ? '8-12 kW' : '> 12 kW'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs font-bold text-[#5F6F75] font-poppins bg-[#F9FAFB] px-4 py-2 border border-[#E2E8F0] rounded-2xl w-full lg:w-auto text-center mt-4 lg:mt-0">
          {filteredProjects.length} {isSpanish ? 'Proyectos Encontrados' : 'Projects Found'}
        </div>
      </div>

      {/* Grid Layout */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none min-w-0"
              tabIndex={0}
              role="button"
              aria-label={isSpanish ? `Ver proyecto en ${project.locationEs}` : `View project in ${project.locationEn}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(project);
                }
              }}
            >
              {/* Image Container — only cover image loaded here */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 flex items-center justify-center">
                <GalleryMedia
                  src={project.coverImage}
                  alt={isSpanish ? `Foto de instalación en ${project.locationEs}` : `Installation photo in ${project.locationEn}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                  isSpanish={isSpanish}
                  failedImages={failedImages}
                  setFailedImages={setFailedImages}
                />
                {project.coverImage.endsWith('.mp4') && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg">
                      <Play className="w-5 h-5 text-[#ff5722] fill-[#ff5722] ml-0.5" />
                    </div>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#14324b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm p-3.5 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-all">
                    <Maximize2 className="w-5 h-5 text-[#14324b]" />
                  </div>
                </div>

                {/* State Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#14324b] px-3 py-1 rounded-xl text-[10px] font-extrabold uppercase tracking-wide border border-[#E2E8F0]">
                  {project.state}
                </span>

                {/* Service Tag */}
                <span className="absolute top-4 right-4 bg-[#ff5722] text-white px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider">
                  {isSpanish ? project.serviceEs : project.serviceEn}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Spec row */}
                <div className="flex items-center gap-1 text-[#ff5722] mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest font-sans">
                    {project.size} System
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-2">
                  {isSpanish ? project.locationEs : project.locationEn} Installation
                </h3>

                <p className="text-[#5F6F75] font-sans text-xs line-clamp-2 leading-relaxed mb-4 italic flex-grow">
                  &ldquo;{isSpanish ? project.reviewTextEs : project.reviewTextEn}&rdquo;
                </p>

                {/* Spec Badges Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E2E8F0] mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#6B7280] font-sans uppercase font-semibold">{isSpanish ? 'Paneles' : 'Panels'}</span>
                    <span className="text-xs font-bold text-[#14324b] font-poppins">{project.panels}</span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8F0] pl-2">
                    <span className="text-[10px] text-[#6B7280] font-sans uppercase font-semibold">{isSpanish ? 'Ahorro' : 'Savings'}</span>
                    <span className="text-xs font-bold text-green-600 font-poppins">{isSpanish ? project.savingsEs.split(' ')[0] : project.savingsEn.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col border-l border-[#E2E8F0] pl-2">
                    <span className="text-[10px] text-[#6B7280] font-sans uppercase font-semibold">{isSpanish ? 'Año' : 'Year'}</span>
                    <span className="text-xs font-bold text-[#14324b] font-poppins">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm">
          <Wrench className="w-12 h-12 text-[#5F6F75] opacity-50 mx-auto mb-4" />
          <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-2">
            {isSpanish ? 'No se encontraron proyectos' : 'No projects matched filters'}
          </h3>
          <p className="text-[#5F6F75] font-sans text-sm mb-6">
            {isSpanish
              ? 'Intente ajustar sus criterios de filtrado para encontrar instalaciones de energía solar correspondientes.'
              : 'Try adjusting your filter criteria to find matching clean energy installation projects.'}
          </p>
          <button
            onClick={() => {
              setStateFilter('All');
              setSizeFilter('All');
              setServiceFilter('All');
            }}
            className="bg-[#14324b] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase transition-all focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none"
          >
            {isSpanish ? 'Restablecer Filtros' : 'Reset All Filters'}
          </button>
        </div>
      )}

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label={isSpanish ? 'Cerrar ventana de detalles' : 'Close details dialog'}
              className="absolute top-4 right-4 md:top-5 md:right-5 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full border border-[#E2E8F0] hover:bg-[#ff5722] hover:text-white focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none transition-all shadow-md cursor-pointer text-[#14324b]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image / Video Carousel — uses modalImages (lazy loaded) */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[480px] bg-slate-950 flex-shrink-0 flex items-center justify-center group/carousel select-none">
              {modalImages.length > 0 && (
                <GalleryMedia
                  src={modalImages[currentImageIndex]}
                  alt={isSpanish
                    ? `Foto del proyecto en ${selectedProject.locationEs} - Imagen ${currentImageIndex + 1} de ${modalImages.length}`
                    : `Project photo in ${selectedProject.locationEn} - Image ${currentImageIndex + 1} of ${modalImages.length}`}
                  className="object-cover w-full h-full max-h-[40vh] md:max-h-[600px] md:h-full"
                  isSpanish={isSpanish}
                  failedImages={failedImages}
                  setFailedImages={setFailedImages}
                  controls={modalImages[currentImageIndex]?.endsWith('.mp4')}
                  autoPlay={modalImages[currentImageIndex]?.endsWith('.mp4')}
                />
              )}

              {/* Navigation Arrows */}
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
                    }}
                    aria-label={isSpanish ? 'Imagen anterior' : 'Previous image'}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#14324b] hover:text-[#ff5722] p-2 rounded-full shadow-md border border-[#E2E8F0] transition-all focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
                    }}
                    aria-label={isSpanish ? 'Siguiente imagen' : 'Next image'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#14324b] hover:text-[#ff5722] p-2 rounded-full shadow-md border border-[#E2E8F0] transition-all focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none cursor-pointer opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Navigation Dots */}
              {modalImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm z-10">
                  {modalImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      aria-label={isSpanish ? `Ir a imagen ${idx + 1} de ${modalImages.length}` : `Go to image ${idx + 1} of ${modalImages.length}`}
                      aria-current={currentImageIndex === idx ? 'true' : 'false'}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        currentImageIndex === idx ? 'bg-[#ff5722] scale-110' : 'bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Counter tag */}
              {modalImages.length > 1 && (
                <span className="absolute top-4 left-4 bg-black/60 text-white px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider backdrop-blur-sm select-none z-10">
                  {currentImageIndex + 1} / {modalImages.length}
                </span>
              )}
            </div>

            {/* Right Column: Spec Sheet & Customer Quote */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#ff5722]/10 text-[#ff5722] px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide">
                    {selectedProject.state}
                  </span>
                  <span className="bg-[#14324b]/10 text-[#14324b] px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide">
                    {t.btnGoogle}
                  </span>
                </div>

                <h3 id="modal-title" className="font-poppins font-bold text-2xl text-[#14324b] mb-1">
                  {isSpanish ? selectedProject.locationEs : selectedProject.locationEn} Project
                </h3>
                <span className="text-xs text-[#5F6F75] font-sans font-medium block mb-6">
                  {isSpanish ? selectedProject.serviceEs : selectedProject.serviceEn} • Completed {selectedProject.year}
                </span>

                {/* Specs Table */}
                <h4 className="text-xs font-extrabold text-[#14324b] uppercase tracking-wider mb-3 font-sans border-b border-[#E2E8F0] pb-1.5">
                  {t.projectDetails}
                </h4>
                <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-[#ff5722]" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#6B7280] font-sans font-semibold">{isSpanish ? 'Tamaño del Sistema' : 'System Size'}</span>
                      <span className="text-xs font-bold text-[#14324b]">{selectedProject.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#082fa3]" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#6B7280] font-sans font-semibold">{isSpanish ? 'Cantidad de Paneles' : 'Panel Count'}</span>
                      <span className="text-xs font-bold text-[#14324b]">{selectedProject.panels}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#6B7280] font-sans font-semibold">{isSpanish ? 'Ahorro Estimado' : 'Est. Annual Savings'}</span>
                      <span className="text-xs font-bold text-green-600">{isSpanish ? selectedProject.savingsEs : selectedProject.savingsEn}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#14324b]" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#6B7280] font-sans font-semibold">{isSpanish ? 'Compensación de CO2' : 'Carbon Offset'}</span>
                      <span className="text-xs font-bold text-[#14324b]">{isSpanish ? selectedProject.co2OffsetEs : selectedProject.co2OffsetEn}</span>
                    </div>
                  </div>
                </div>

                {/* Specs disclaimer */}
                <p className="text-[9px] text-[#6B7280] font-sans leading-normal italic mb-6">
                  {isSpanish
                    ? 'Los ahorros estimados y el impacto ambiental pueden variar según el hogar, el consumo, las tarifas eléctricas, el diseño del sistema y la aprobación final.'
                    : 'Estimated savings and environmental impact vary by home, usage, utility rates, system design, and final approval.'}
                </p>

                {/* Linked Review */}
                <h4 className="text-xs font-extrabold text-[#14324b] uppercase tracking-wider mb-3 font-sans border-b border-[#E2E8F0] pb-1.5">
                  {isSpanish ? 'Reseña de Propietario' : 'Customer Review'}
                </h4>
                <div className="bg-[#F9FAFB] border border-[#E2E8F0] rounded-2xl p-4 mb-4">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(selectedProject.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#4e5257] font-sans leading-relaxed italic mb-3">
                    &ldquo;{isSpanish ? selectedProject.reviewTextEs : selectedProject.reviewTextEn}&rdquo;
                  </p>
                  <span className="text-xs font-bold text-[#14324b] block font-poppins">
                    — {selectedProject.reviewerName}
                  </span>
                </div>
              </div>

              {/* View Review Link */}
              {selectedProject.reviewLink && (
                <a
                  href={selectedProject.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isSpanish ? `Ver reseña verificada de este proyecto en Google Maps` : `View verified Google review for this project`}
                  className="bg-[#14324b] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#14324b]/95 focus-visible:ring-2 focus-visible:ring-[#ff5722] focus-visible:outline-none transition-all text-center w-full flex items-center justify-center gap-2 mt-4 font-sans cursor-pointer"
                >
                  <Star className="w-4 h-4 fill-white text-white" />
                  {t.btnVerify}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
