import { Link } from "react-router-dom"

interface ProductCardProps {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export function ProductCard({ id, title, description, price, image }: ProductCardProps) {
  return (
    <div className="pixel-card p-6 flex flex-col h-full">
      <div className="aspect-video bg-retro-darkgray/50 mb-4 overflow-hidden rounded flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>
      <h3 className="text-retro-cyan text-lg font-pixel mb-2">{title}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <div className="mt-auto flex flex-col gap-4">
        <span className="text-2xl font-bold text-retro-green text-center">${price}</span>
        <Link to={`/tienda/${id}`} className="retro-btn w-full text-center">Ver Detalles</Link>
      </div>
    </div>
  )
} 