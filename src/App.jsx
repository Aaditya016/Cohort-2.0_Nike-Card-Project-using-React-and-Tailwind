import Card from '../components/Card';


const App = () => {
  const nikeShoes = [
  {
    name: "Jordan 1 Retro High OG",
    description: "Iconic basketball shoe with premium leather construction.",
    price: 17000,
    image: "https://marketplace.mainstreet.co.in/cdn/shop/files/Artboard2_636d6d67-cec4-4bac-985f-aee6f9c03088.png?v=1761542749"
  },
  {
    name: "Jordan 3 Retro Fire Red",
    description: "Classic design with elephant print pattern.",
    price: 18000,
    image: "https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found.jpg?v=1755097035&width=2048"
  },
  {
    name: "Jordan 4 Retro Bred",
    description: "Bold red and black colorway with air support.",
    price: 19000,
    image: "https://www.superkicks.in/cdn/shop/files/1_675361ea-f321-4a48-a143-81a1d2800a71.jpg?v=1734518674&width=1946"
  },
  {
    name: "Jordan 5 Retro Black Metallic",
    description: "Sleek design with metallic accents and wing details.",
    price: 18500,
    image: "https://crepdogcrew.com/cdn/shop/products/AirJordan1High_85BlackWhite.jpg?v=1755096919&width=2048"
  },
  {
    name: "Jordan 6 Retro Carmine",
    description: "Premium silhouette with iconic jump-man branding.",
    price: 17500,
    image: "https://cdn-images.farfetch-contents.com/23/78/92/31/23789231_55071312_600.jpg"
  },
  {
    name: "Jordan 11 Retro Bred",
    description: "Elegant design with patent leather upper.",
    price: 20000,
    image: "https://holygrails.in/cdn/shop/files/NikeAirJordan1RetroHighOG_UniversityBlue_Sneakers-Front.jpg?v=1717074950"
  },
  {
    name: "Jordan 12 Retro Black Varsity Red",
    description: "Distinctive silhouette with Egyptian hieroglyphics.",
    price: 19500,
    image: "https://thelastape.in/cdn/shop/files/53.jpg?v=1714140246"
  },
  {
    name: "Jordan 13 Retro Bred",
    description: "Soaring design inspired by the flight of birds.",
    price: 18000,
    image: "https://limitededt.in/cdn/shop/files/HF0410-001_1.jpg?v=1754568212&width=2048"
  },
  {
    name: "Jordan AJ1 Low OG",
    description: "Versatile low-top with classic Jordan legacy.",
    price: 15000,
    image: "https://hustleculture.co.in/cdn/shop/files/5_1.jpg?v=1718177076"
  },
  {
    name: "Jordan XXXVII Low",
    description: "Modern Jordan with cutting-edge performance tech.",
    price: 21000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWNySfkyzeT-K1FgmnSh9VAlTSLe97knqiA&s"
  }
];

  return (
    <div className='bg-black w-full min-h-screen flex flex-wrap gap-10 justify-center items-center p-10'>
      {nikeShoes.map(function(elem){
        return <Card   
          title={elem.name}
          description={elem.description}
          price={elem.price}
          image={elem.image}
          subtitle="Own the Court"
        />;
      })}
    </div>
  );
};

export default App;