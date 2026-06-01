export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  lessonsCount: number;
  price: string;
  image: string;
  linkKiwify: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: '3x3-camadas',
    title: 'Domine o Cubo Mágico 3x3: Método de Camadas',
    description: 'Passo a passo do metódo por camadas, o mais popular entre os iniciantes. Aprenda a resolver o cubo de forma lógica e eficiente.',
    level: 'Iniciante',
    lessonsCount: 8,
    price: 'R$ 34,99',
    image: '/images/3x3.jpeg',
    linkKiwify: 'https://pay.kiwify.com.br/DTNe6CU', // Seu link real da Kiwify
    features: ['Metódo por camadas', 'Suporte a dúvidas', 'Aulas direto ao ponto', 'Material de apoio']
  },
  {
    id: '2x2-tutorial',
    title: 'Dominando o Cubo Pocket 2x2',
    description: 'Em breve. Descubra como aplicar a lógica do 3x3 em um cubo menor, mas extremamente desafiador e veloz.',
    level: 'Iniciante',
    lessonsCount: 6,
    price: 'Em breve',
    image: '/images/Soon.png',
    linkKiwify: '#',
    features: ['Método Simplificado', 'Finger tricks para o 2x2']
  }
];