interface City {
    value: string;
    label: string;
}

export const cities: City[] = [
  { value: 'london', label: 'Лондон' },
  { value: 'paris', label: 'Париж' },
  { value: 'tokyo', label: 'Токио' },
  { value: 'new york', label: 'Нью-Йорк' },
  { value: 'los angeles', label: 'Лос-Анджелес' },
  { value: 'berlin', label: 'Берлин' },
  { value: 'rome', label: 'Рим' },
  { value: 'amsterdam', label: 'Амстердам' },
  { value: 'barcelona', label: 'Барселона' },
  { value: 'dubai', label: 'Дубай' },
  { value: 'singapore', label: 'Сингапур' },
  { value: 'sydney', label: 'Сидней' },
  { value: 'hong kong', label: 'Гонконг' },
  { value: 'istanbul', label: 'Стамбул' },
  { value: 'mexico city', label: 'Мехико' }
];

interface Quantity {
  value: number;
  label: string;
}

export const quantity: Quantity[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
];

export const destination = [
    {
      img: '/cities/orange.png',
      cityName: 'orange',
      destination: 'some text',
    },
    {
      img: '/cities/blogImg.jpg',
      cityName: 'blogImg',
        destination: 'destination text',
    },
    {
      img: '/cities/bridge2.png',
      cityName: 'bridge2',
        destination: 'Millennium Bridge',
    },
    {
      img: '/cities/lisbon.png',
      cityName: 'lisbon',
        destination: 'destination text',
    },
    {
      img: '/cities/Image_container.png',
      cityName: 'Image_container',
        destination: 'destination text',
    },
    {
      img: '/cities/Image_container-1.png',
      cityName: 'Image_container-1',
        destination: 'destination text',
    },
    {
      img: '/cities/Image_container-2.png',
      cityName: 'Image_container-2',
        destination: 'destination',
    },
    {
      img: '/cities/Image_container-3.png',
      cityName: 'Image_container-3',
        destination: 'destination',
    },
];

export const offers = [
    {
        img: '/cities/Col-block-2.png',
        cityName: 'Col-block-2',
        description: 'The quick brown fox jumps over the lazy dog in the serene meadow.',
        price: 500,
        stars: 5,
    },
    {
        img: '/cities/athens.png',
        cityName: 'athens',
        description: 'The quick brown fox jumps over the lazy dog in the serene meadow.',
        price: 500,
        stars: 5,
    },
    {
        img: '/cities/berlin.png',
        cityName: 'berlin',
        description: 'The quick brown fox jumps over the lazy dog in the serene meadow.',
        price: 500,
        stars: 4,
    },
    {
        img: '/cities/bridge.png',
        cityName: 'bri',
        description: 'The quick brown fox jumps over the lazy dog in the serene meadow.',
        price: 500,
        stars: 5,
    },
    {
        img: '/cities/lisbon.png',
        cityName: 'lisbon',
        description: 'The quick brown fox jumps over the lazy dog in the serene meadow.',
        price: 500,
        stars: 4,
    },
    {
        img: '/cities/rome.png',
        cityName: 'rome',
        description: 'The quick brown fox jumps over the lazy dog in the serene meadow.',
        price: 500,
        stars: 5,
    },
]

export const blog = [
    {
        img: '/cities/lisbon.png',
        tourName: 'lisbon tour',
        pricePerDay: '€95/Day',
        length: '7 Days',
        stars: 5,
    },
    {
        img: '/cities/orange.png',
        tourName: 'orange tour',
        pricePerDay: '€95/Day',
        length: '7 Days',
        stars: 4,
    },
    {
        img: '/cities/Image_container-3.png',
        tourName: 'berlin tour',
        pricePerDay: '€95/Day',
        length: '7 Days',
        stars: 5,
    },
]