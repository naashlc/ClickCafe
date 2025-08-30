import { useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ProductsPage({ onAdd }) {
  const [query, setQuery] = useState("")
  const filtered = useMemo(
    ()=> products.filter(p=> p.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  return (
    <section className="py-14 max-w-7xl mx-auto px-6">
      <h1 className="titulo-seccion">Catálogo de productos</h1>
      <input
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Buscar..."
        className="mt-6 w-full md:w-96 border rounded-full px-5 py-2"
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
