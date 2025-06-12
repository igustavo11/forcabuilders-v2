export const categories = [
  { id: "all", label: "All" },
  { id: "luxury", label: "Luxury Homes" },
  { id: "modern", label: "Modern" },
  { id: "renovation", label: "Renovations" },
]

export const projects = [
  {
    id: 1,
    title: "Hillside House",
    location: "São Paulo, SP",
    category: "luxury",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Rio de Janeiro, RJ",
    category: "modern",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Historic Renovation",
    location: "Belo Horizonte, MG",
    category: "renovation",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Family Home",
    location: "Brasília, DF",
    category: "luxury",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Oceanfront House",
    location: "Florianópolis, SC",
    category: "modern",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Urban Residence",
    location: "Porto Alegre, RS",
    category: "modern",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472829-c7c0ca3abd1e?w=800&h=600&fit=crop",
    ],
  },
]

export type Category = typeof categories[0]
export type Project = typeof projects[0]