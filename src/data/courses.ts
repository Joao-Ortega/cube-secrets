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
  },
  {
    id: '4x4-tutorial',
    title: 'Dominando o Monstro 4x4',
    description: 'Em breve. Novos movimentos, novas estratégias e a emoção de resolver um cubo maior e mais complexo. Aprenda a lidar com as temidas paridades e prepare-se para o próximo nível!',
    level: 'Intermediário',
    lessonsCount: 8,
    price: 'Em breve',
    image: '/images/Soon.png',
    linkKiwify: '#',
    features: ['Método de Redução para 3x3', 'Identificação e Resolução de Paridades', 'Finger tricks avançados para o 4x4']
  },
  {
    id: '5x5-tutorial',
    title: 'Desvendando o Cubo 5x5 (Professor Cube)',
    description: 'Em breve. O desafio definitivo. Aprimore suas habilidades de redução, domine a construção de centros móveis e o pareamento de arestas triplas sem se perder no processo.',
    level: 'Avançado',
    lessonsCount: 10,
    price: 'Em breve',
    image: '/images/Soon.png',
    linkKiwify: '#',
    features: ['Construção lógica de centros', 'Pareamento de arestas complexas', 'Técnicas de look-ahead para cubos grandes']
  }
];