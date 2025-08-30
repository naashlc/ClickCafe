import { useMemo, useState } from 'react'
import { CATEGORIES, products } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductTabs({ onAdd }){
  const [category, setCategory] = useState('Bebidas')
  const filtered = useMemo(()=> products.filter(p=>p.category===category), [category])

  return (
    <section id="recomendados" className="py-16 bg-gradient-to-b from-white to-cafe-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="titulo-seccion">Productos más recomendados</h2>
        <p className="text-center mt-2 parrafo-suave">Contamos con la disposición de diferentes productos a un accesible precio.</p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={()=>setCategory(c)}
              className={`px-4 py-1.5 rounded-full border ${category===c? 'bg-cafe-500 text-white border-cafe-500':'border-cafe-300 text-cafe-700 hover:bg-cafe-100'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
