export interface ServiceItem {
  title: string;
  icon: string;
  description: string;
  image: string;
  topic: string; // key used by the Tasks service to load the details gallery
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Driveways',
    icon: 'directions_car',
    description:
      'Durable and precise driveways that enhance your property’s curb appeal. Built to withstand Calgary’s climate.',
    image: 'assets/images/concrete_1.jpeg',
    topic: 'concrete',
    features: ['Site prep & grading', 'Reinforced slabs', 'Broom & stamped finishes', 'Drainage ready'],
  },
  {
    title: 'Patios',
    icon: 'chair',
    description:
      'Custom patios for outdoor living and entertainment. Create a beautiful and functional space for your home.',
    image: 'assets/images/concrete_2.jpeg',
    topic: 'exterior',
    features: ['Custom shapes & borders', 'Stamped & exposed aggregate', 'Sitting walls', 'Low-maintenance sealing'],
  },
  {
    title: 'Sidewalks',
    icon: 'directions_walk',
    description:
      'Smooth, safe, and long-lasting sidewalks for residential and commercial properties.',
    image: 'assets/images/concrete_3.jpeg',
    topic: 'concrete',
    features: ['Accessibility compliant', 'Non-slip finishes', 'Clean control joints', 'Snow-ready slopes'],
  },
  {
    title: 'Garage Floors',
    icon: 'warehouse',
    description:
      'Strong and stylish garage floors built to handle daily use. Options for decorative finishes.',
    image: 'assets/images/concrete_1.3.jpeg',
    topic: 'basement',
    features: ['High-strength mix', 'Epoxy & sealed options', 'Apron & approach slabs', 'Crack control'],
  },
  {
    title: 'Foundations',
    icon: 'foundation',
    description:
      'Solid foundations for lasting structures. Engineered for precision and durability you can count on.',
    image: 'assets/images/concrete_1.7.jpeg',
    topic: 'concrete',
    features: ['Footings & grade beams', 'Formwork & rebar', 'Waterproofing', 'Inspected pours'],
  },
  {
    title: 'Custom Concrete',
    icon: 'construction',
    description:
      'From steps to retaining walls, we build custom concrete solutions to your exact spec.',
    image: 'assets/images/concrete_5.jpeg',
    topic: 'concrete',
    features: ['Steps & landings', 'Retaining walls', 'Post footings', 'Repairs & resurfacing'],
  },
];
