import Image from "next/image";
import brandsData from "./brandsData";
const Accreditations = () => {
  return (
    <section className="p-10">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="overflow-x-auto bg-primary rounded-md py-8">
              <div className="flex w-max items-center gap-8 px-8 min-w-[700px]">
                {brandsData.map((brand) => (
                  <div
                    key={brand.id}
                    className="relative h-28 w-[135px] flex-shrink-0"
                  >
                    <Image
                      src={brand.image}
                      alt={`Accreditation ${brand.id}`}
                      fill
                      className="object-box"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
