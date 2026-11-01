function GalleryItem({ image, alt, caption }) {
  return (
    <figure className="m-0 overflow-hidden rounded-2xl border border-[#e8e9f0] bg-white shadow-[0_20px_50px_rgba(40,35,90,0.1)] transition duration-300 hover:-translate-y-1.5">
      <img className="block h-auto max-h-[70vh] w-full bg-[#f6f6fb] object-contain transition duration-[400ms] hover:scale-[1.02] md:h-[50vh]" src={image} alt={alt} />
      <figcaption className="border-t border-[#e8e9f0] p-4 text-xl font-bold text-[#17182b]">{caption}</figcaption>
    </figure>
  );
}

export default GalleryItem;