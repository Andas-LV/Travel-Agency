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