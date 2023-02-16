const Results = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      <div className="bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <div className="text-white px-6 pb-6 mt-6">
          <h2 className="font-semibold text-xl">Sinónimos</h2>
          <p className="block mt-2">Bueno</p>
        </div>
      </div>
      <div className="bg-teal-500 rounded-lg max-w-xs shadow-lg">
      <div className="text-white px-6 pb-6 mt-6">
          <h2 className="font-semibold text-xl">Antónimos</h2>
          <p className="block mt-2">Malo</p>
        </div>
      </div>
      <div className="bg-purple-500 rounded-lg max-w-xs shadow-lg">
      <div className="text-white px-6 pb-6 mt-6">
          <h2 className="font-semibold text-xl">Definición</h2>
          <p className="block mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolorum quia labore? Consectetur unde ea sit expedita, soluta alias voluptas ipsa recusandae rerum velit, illo minus, consequuntur accusamus veniam fuga?</p>
        </div>
      </div>
    </div>
  )
}

export default Results
