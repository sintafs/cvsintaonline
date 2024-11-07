import foto from "../sintapict2.jpg";

export default function Hero(){
return(
    <div className="container mx-auto p-4 text-center">
    <h1 className="text-grey-400 font-bold">CV Online</h1>
    <h1 className="text-Grey mb-4">Sinta Fauziah S</h1>
    <Profile />
    <p className="mt-4 mb-8 text-Grey">
     I am a Student currently pursuing undergraduate studies at the computer faculty of Ma'soem University, I have an interest in studying in the field of program design and manajement, the porpose of making this CV is so that those of u who see it can get to know me more.
    </p>
</div>
);

}
function Profile() {
    return <img src={foto.src} alt="CV Sinta" className="fotoku w-32 h-32 mx-auto rounded-full"/>;
  }