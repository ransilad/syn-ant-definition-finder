import { useFinderStore } from '@/store/finder'
import Loading from './Loading'

const Results = () => {
  const { synonyms, antonyms, definition, isSearching } = useFinderStore((state) => state)

  return synonyms || antonyms || definition || isSearching
    ? (
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-purple-500 rounded-lg shadow-lg">
          <div className="text-white px-6 pb-6 mt-6">
            <h2 className="font-semibold text-xl">Definición</h2>
            {definition ? <p className="block mt-2">{definition}</p> : <Loading /> }
          </div>
        </div>
        <div className="bg-orange-500 rounded-lg shadow-lg">
          <div className="text-white px-6 pb-6 mt-6">
            <h2 className="font-semibold text-xl">Sinónimos</h2>
            {synonyms
              ? (
                <p className="block mt-2">
                  {synonyms.split('\n').map((_s, index) => (
                    <span className="block" key={index}>{_s}</span>
                  ))}
                </p>
                )
              : <Loading /> }
          </div>
        </div>
        <div className="bg-teal-500 rounded-lg shadow-lg">
          <div className="text-white px-6 pb-6 mt-6">
            <h2 className="font-semibold text-xl">Antónimos</h2>
            {definition
              ? (
                <p className="block mt-2">
                  {antonyms.split('\n').map((_a, index) => (
                    <span className="block" key={index}>{_a}</span>
                  ))}
                </p>
                )
              : <Loading /> }
          </div>
        </div>
      </div>
      )
    : null
}

export default Results
