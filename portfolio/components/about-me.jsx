export default function AboutMe() {
  return (
    <div id="propos" className="bg-[#191919] py-16 md:py-24 shadow-lg mt-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl text-center text-amber-50 mb-8 md:mb-12">
          Développeur Web <br className="md:hidden" /> Passionné
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3
              className="text-2xl md:text-4xl text-center md:text-left text-amber-50 mb-4">
              Aucune limite à mon art
            </h3>
            <p className="text-lg md:text-2xl text-amber-50">
              Le développement web, pour moi, c'est avant tout un moyen d'expression. Chaque projet est une nouvelle
              opportunité d'expérimenter, d'innover et de repousser les limites de ce qui peut être créé. J'aime
              transformer des idées en expériences digitales uniques, alliant esthétique et fonctionnalité. Il n'y a pas
              de frontières dans le web, juste un terrain de jeu infini où je peux laisser libre cours à ma créativité.
            </p>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="assets/batiment.jpeg"
              alt="batimentcode"
              className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
