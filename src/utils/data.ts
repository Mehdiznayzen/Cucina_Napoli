import { HeaderItem } from '@/app/types/menu'
import { FeaturesType, Restaurant } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

export const HeaderData: HeaderItem[] = [
  { label: 'Commander', href: '/#' },
  { label: 'Menu', href: '/#' },
  { label: 'Offres', href: '/#' },
  { label: 'Restaurants', href: '#' },
  { label: 'Suivi de commande', href: '#' },
]

export const FeaturesData : Restaurant[] = [
  {
    name: "CUCINA NAPOLI - Ain Diab",
    address: "N, Lot mestouna, 56 Rue 28, Casablanca 20230",
    phone: "0664-685275",
    image:
      "/images/Features/cucina-napoli-Ain-Diab.jpg",
  },
  {
    name: "CUCINA NAPOLI - Ain Sebaa",
    address: "Residence les iris, 3 All. des Mimosas, Casablanca 20590",
    phone: "0664-685275",
    image:
      "/images/Features/cucina-napoli-Ain-Sebaa.jpg",
  },
  {
    name: "CUCINA NAPOLI - ANOUAL",
    address: "4 Bd Anoual, Casablanca 20250",
    phone: "0520-338350",
    image:
      "/images/Features/cucina-napoli-anoual.jpg",
  },
  {
    name: "CUCINA NAPOLI - OASIS",
    address: "Angle de la rue Imam Mouslim, Rte de l'Oasis, Casablanca 20410",
    phone: "0664-269141",
    image:
      "/images/Features/cucina-napoli-oasis.jpg",
  },
  {
    name: "CUCINA NAPOLI - OULFA",
    address: "immeuble N° 15, RDC de l, lotissement Essafa, Casablanca 20220",
    phone: "0664-265612",
    image:
      "/images/Features/cucina-napoli-oulfa.jpg",
  },
  {
    name: "CUCINA NAPOLI - PALMIER",
    address: "13 rue Ahmed Naciri, Angle Rue Saria Ibnou Zounaim، Casablanca 20000",
    phone: "0520-572434",
    image:
      "/images/Features/cucina-napoli-palmier.jpg",
  },
  {
    name: "CUCINA NAPOLI - ZIRAOUI",
    address: "267 Bd Ziraoui, Casablanca 20250",
    phone: "0520-823222",
    image:
      "/images/Features/cucina-napoli-ziraoui.jpg",
  },
]

export const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

export const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/foodone.webp',
    name: 'Caesar Salad(187 Kcal)',
    price: 35,
  },
  {
    src: '/images/Gallery/foodtwo.webp',
    name: 'Christmas salad(118 Kcal)',
    price: 17,
  },
  {
    src: '/images/Gallery/foodthree.webp',
    name: 'Sauteed mushrooms with pumpkin bowl(238 kcal)',
    price: 45,
  },
  {
    src: '/images/Gallery/foodfour.webp',
    name: 'BBQ Chicken Feast Pizza(272 kcal)',
    price: 27,
  },
]

export const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
  },
]

export const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Commander', href: '/#' },
      { label: 'Menu', href: '/#' },
      { label: 'Offres', href: '/#' },
      { label: 'Restaurants', href: '#' },
      { label: 'Suivi de commande', href: '#' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]