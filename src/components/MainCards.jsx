import Card from "./Card";


function MainCards() {
  return (
    <>
      {/* renderizar las cards en una grilla de 3 por 4 filas con tailwindcss */}
      <div className="grid grid-cols-3 gap-2 container w-[100%] ">
        <Card />
      </div>
    </>
  )
}

export default MainCards;