import Image from "next/image";

interface HomeCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

export default function HomeCards() {

  const valueCards: HomeCardProps[] = [
    {
      image: "/img/cards-home/card1.jpg",
      title: "Quality",
      description: "Within our highest levels of craft",
      alt: "Quality",
    },
    {
      image: "/img/cards-home/card2.jpg",
      title: "Care",
      description: "For the unique needs of our client",
      alt: "Care",
    },
    {
      image: "/img/cards-home/card3.jpg",
      title: "Commitment",
      description: "To doing the job the right way - always",
      alt: "Commitment",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {valueCards.map(({ image, title, description, alt }, index) => (
        <div key={index} className="group">
          <div className="overflow-hidden mb-6">
            <Image
              src={image}
              alt={alt}
              width={500}
              height={400}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="border-l-4 border-colorprimary pl-4">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 font-medium">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
