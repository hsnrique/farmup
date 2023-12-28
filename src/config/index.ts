export const PRODUCT_CATEGORIES = [
  {
    label: 'Insumos',
    value: 'insumos' as const,
    featured: [
      {
        name: 'Insumos biológicos',
        href: `/products?category=ib`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'Insumos mecânicos',
        href: '/products?category=ib&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Insumos químicos',
        href: '/products?category=ib',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Defensivos Agrícolas',
    value: 'defensivos' as const,
    featured: [
      {
        name: 'Fungicidas',
        href: `/products?category=defensivos`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Inseticidas',
        href: '/products?category=defensivos&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Herbicidas',
        href: '/products?category=defensivos',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Reguladores de crescimento',
        href: '/products?category=defensivos',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Produtos responsáveis por melhorar a calda',
        href: '/products?category=defensivos',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Fertilizantes',
    value: 'fertilizantes' as const,
    featured: [
      {
        name: 'Fungicidas',
        href: `/products?category=fertilizantes`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Fertilizantes orgânicos',
        href: '/products?category=fertilizantes&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Fertilizantes sintéticos',
        href: '/products?category=fertilizantes',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]
