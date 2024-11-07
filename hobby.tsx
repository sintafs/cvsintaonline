import React from 'react';
import hobby1 from "./assets/02.jpg";
import hobby2 from "./assets/10.jpg";
import hobby3 from "./assets/14.jpg";
import hobby4 from "./assets/20.jpg";
import hobby5 from "./assets/04.jpg";
import hobby6 from "./assets/19.jpg";
import hobby8 from "./assets/17.jpg";

const Hobbies = [
  { id: 1, name: "Lv", image: hobby1 },
  { id: 2, name: "Family", image: hobby2 },
  { id: 3, name: "Friends", image: hobby3 },
  { id: 4, name: "Holiday", image: hobby4 },
  { id: 5, name: "Zoo Time", image: hobby5 },
  { id: 6, name: "Diner", image: hobby6 },
  { id: 8, name: "BasketBall", image: hobby8 },
];

export default function MyGallery() {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-gray-700 font-bold">MY GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className="border-2 border-blue-900/75 rounded-lg bg-blue-900 text-black p-4">
            <img src={hobby.image.src} alt={hobby.name} className="w-full h-auto rounded-md" />
            <div className="mt-2">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
