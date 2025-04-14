export default function Contact() {
  return (
    <div id="contact" className="bg-white py-16 md:py-20 shadow-lg">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">Me Contacter</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Vous pouvez me contacter via e-mail ou consulter mon profil LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="mailto:yusufyeni69200@gmail.com"
              className="bg-[#0057b8] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-center">
              Envoyer un e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-yeni-7a3b63329/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0057b8] text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 text-center">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
