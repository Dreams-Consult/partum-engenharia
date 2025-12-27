export interface CarouselSlide {
  id: string
  className: string
  welcome: string
  title: string
  subtitle: string
}

export interface Project {
  id: number
  name: string
  logo?: string
  location: string
  image: string
  images?: string[]
  description: string
  details: {
    area: string
    year: string
    category: string
    services: string[]
  }
}

export interface NavItem {
  id: string
  label: string
}

export interface CarouselResponsiveConfig {
  desktop: {
    breakpoint: { max: number; min: number }
    items: number
    slidesToSlide?: number
  }
  tablet?: {
    breakpoint: { max: number; min: number }
    items: number
    slidesToSlide?: number
  }
  mobile: {
    breakpoint: { max: number; min: number }
    items: number
    slidesToSlide?: number
  }
}
