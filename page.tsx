// Tambahkan ini di bagian atas file
"use client";

import Hero from "./components/hero";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import Skill from "./components/skill";
import Myinfo from "./components/myinfo"
import FavColor from "./components/favColor";
import Hobby from "./components/hobby";
import Bintang from "./components/bintang";
import "./din-style.css";
import { useState } from "react";

export default function MyApp() {
  const [bgColor, setBgColor] = useState("bg-blue-300");

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  return (
    <section className={`min-h-screen ${bgColor}`}>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skill />
      <Myinfo />
      <Hobby />
      <Bintang />
      <FavColor onColorChange={handleColorChange} />
    </section>
  );
}
