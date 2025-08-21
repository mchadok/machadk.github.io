import Image from "next/image"

const pizzasSalgadas = [
  {
    nome: "ALHO E ÓLEO",
    ingredientes: "Molho, Mussarela, Alho Granulado, Azeite de Oliva, e Orégano.",
    imagem: "/pizza-alho-e-oleo-dourada.png",
  },
  {
    nome: "MARGHERITA",
    ingredientes: "Molho de Tomate, Mussarela, Manjericão Fresco, Azeite de Oliva.",
    imagem: "/pizza-margherita-manjericao.png",
  },
  {
    nome: "CALABRESA",
    ingredientes: "Molho de Tomate, Mussarela, Calabresa, Cebola, Orégano.",
    imagem: "/calabresa-onion-pizza.png",
  },
  {
    nome: "PORTUGUESA",
    ingredientes: "Molho de Tomate, Mussarela, Presunto, Ovos, Cebola, Azeitona.",
    imagem: "/pizza-portuguesa-com-ovos.png",
  },
  {
    nome: "QUATRO QUEIJOS",
    ingredientes: "Molho Branco, Mussarela, Gorgonzola, Parmesão, Provolone.",
    imagem: "/pizza-quatro-queijos-cremosa.png",
  },
  {
    nome: "FRANGO CATUPIRY",
    ingredientes: "Molho de Tomate, Mussarela, Frango Desfiado, Catupiry, Milho.",
    imagem: "/pizza-frango-catupiry-milho.png",
  },
  {
    nome: "PEPPERONI",
    ingredientes: "Molho de Tomate, Mussarela, Pepperoni, Orégano.",
    imagem: "/classic-pepperoni-pizza.png",
  },
  {
    nome: "NAPOLITANA",
    ingredientes: "Molho de Tomate, Mussarela, Tomate, Manjericão, Orégano.",
    imagem: "/pizza-napoletana-tomate-fresco.png",
  },
]

const pizzasDoces = [
  {
    nome: "CHOCOLATE MORANGO",
    ingredientes: "Chocolate ao Leite, Morangos Frescos, Leite Condensado.",
    imagem: "/chocolate-strawberry-sweet-pizza.png",
  },
  {
    nome: "ROMEU E JULIETA",
    ingredientes: "Queijo Minas, Goiabada, Canela.",
    imagem: "/pizza-doce-romeu-e-julieta.png",
  },
  {
    nome: "BANANA CANELA",
    ingredientes: "Banana, Açúcar, Canela, Leite Condensado.",
    imagem: "/doce-banana-canela-pizza.png",
  },
  {
    nome: "PRESTÍGIO",
    ingredientes: "Chocolate, Coco Ralado, Leite Condensado.",
    imagem: "/pizza-doce-prestigio.png",
  },
  {
    nome: "BRIGADEIRO",
    ingredientes: "Chocolate, Granulado, Leite Condensado.",
    imagem: "/brigadeiro-pizza.png",
  },
  {
    nome: "NUTELLA MORANGO",
    ingredientes: "Nutella, Morangos Frescos, Açúcar de Confeiteiro.",
    imagem: "/nutella-strawberry-sweet-pizza.png",
  },
  {
    nome: "DOCE DE LEITE",
    ingredientes: "Doce de Leite, Coco Ralado, Canela.",
    imagem: "/pizza-doce-de-leite-com-coco.png",
  },
  {
    nome: "CHOCOLATE BRANCO",
    ingredientes: "Chocolate Branco, Coco Ralado, Leite Condensado.",
    imagem: "/white-chocolate-coconut-sweet-pizza.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-sm">📞 BUSCAR</div>
              <div className="text-sm">✉️ E-MAIL</div>
              <div className="text-sm">📘</div>
              <div className="text-sm">📷</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-white hover:text-red-400 cursor-pointer">SOBRE NÓS</div>
              <div className="text-white hover:text-red-400 cursor-pointer">NOSSAS UNIDADES</div>
              <div className="text-red-400 font-semibold border-b-2 border-red-400 pb-1">CARDÁPIO</div>
            </div>

            <div className="flex-shrink-0">
              <Image src="/logo-temperador.png" alt="O Temperador Pizzas" className="object-contain max-h-16 w-auto" />
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-white hover:text-red-400 cursor-pointer">PEDIR ONLINE</div>
              <div className="text-white hover:text-red-400 cursor-pointer">FALE CONOSCO ▼</div>
              <div className="bg-orange-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-orange-500">
                SEJA FRANQUEADO
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="relative h-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder-kmi6u.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="bg-gray-800/90 backdrop-blur-sm px-8 py-4 rounded-lg">
            <h1 className="text-3xl font-bold text-white">
              NOSSO <span className="text-red-400">CARDÁPIO</span>
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">PIZZAS SALGADAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pizzasSalgadas.map((pizza, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={pizza.imagem || "/placeholder.svg"} alt={pizza.nome} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{pizza.nome}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{pizza.ingredientes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">PIZZAS DOCES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pizzasDoces.map((pizza, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={pizza.imagem || "/placeholder.svg"} alt={pizza.nome} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{pizza.nome}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{pizza.ingredientes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div>📞 (11) 99999-9999</div>
            <div>📍 Rua das Pizzas, 123 - Centro</div>
            <div>🕒 Ter-Dom: 18h às 23h</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
