const WhatsAppWidget = () => {
  const phone = "919838188288";
  const message = encodeURIComponent("Hi! I'm interested in getting solar installation. Can you share more details?");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.47 2.027 7.773L0 32l8.437-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.485-.29-5.008 1.194 1.27-4.88-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.355-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.62-3.202-1.977-1.184-1.056-1.983-2.36-2.215-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.898-2.165-1.23-2.963-.324-.778-.654-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.063.498-.366.398-1.396 1.362-1.396 3.32s1.43 3.852 1.629 4.117c.199.266 2.815 4.298 6.82 6.027.954.411 1.698.657 2.278.841.957.305 1.828.262 2.516.159.767-.114 2.355-.963 2.688-1.893.332-.93.332-1.728.232-1.893-.099-.166-.366-.266-.764-.465z" />
      </svg>
    </a>
  );
};

export default WhatsAppWidget;
