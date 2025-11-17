export default function CvDownload() {
  return (
    <div className="bg-gray-100 py-8 md:py-10 text-center">
      <div className="container mx-auto px-4">
        <a
          href="/assets/CV Yusuf_Yeni.pdf"
          download
          className="inline-block bg-[#0057b8] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}
