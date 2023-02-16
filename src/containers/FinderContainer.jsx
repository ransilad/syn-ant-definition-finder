import Finder from '@/components/Finder'
import Results from '@/components/Results'

const FinderContainer = () => {
  return (
    <main className='mx-auto w-10/12 md:w-3/4 py-10'>
      <Finder />
      <Results />
    </main>
  )
}

export default FinderContainer
