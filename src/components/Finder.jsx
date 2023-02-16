import { useFinderStore } from '@/store/finder'
import { useState } from 'react'
import { SearchIcon } from './icons'

const Finder = () => {
  const [search, setSearch] = useState('')
  const { setFinder } = useFinderStore((state) => state)

  const handleSearch = (e) => {
    e.preventDefault()
    setFinder(search)
  }

  return (
    <div className='w-full'>
      <h1 className='text-white md:text-2xl opacity-70 mb-6'>Buscador de sinónimos, antónimos y definición</h1>
      <form onSubmit={handleSearch}>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            id="table-search"
            className="w-full text-sm rounded-lg block pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Ingresar término a buscar"
            onChange={(e) => setSearch(e.target.value.replace(/\s/g, '').toLowerCase())}
            value={search}
          />
        </div>
      </form>
    </div>
  )
}

export default Finder
