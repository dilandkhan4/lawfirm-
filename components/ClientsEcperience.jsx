import Image from "next/image";
import React from "react";

const ClientsExperience = () => {
  return (
    <section className="bg-[#EFF5F5] py-14">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between">
          <div className="">
            {/* Slider Part */}
            <div className="carousel w-full">
              <div id="s1" className="carousel-item relative w-full">
                <div className="pt-20 pb-8">
                  <div className="">
                    <Image
                      className="mt-0 lg:-mt-20"
                      src="/clientSliderImage3.jpeg"
                      height={552}
                      width={463}
                      alt="Blog Icon"
                    />
                  </div>
                  <div className="relative bg-white max-w-[481px] h-[290px] pt-2 px-12 rounded-md -mt-60 ml-20">
                    <div>
                      <h3 className="text-black text-2xl font-medium mt-10 lato">
                        “The best team of movers”
                      </h3>
                      <p className="text-black text-[16px] font-normal mt-3 lato">
                        We’re here to serve you with passion, integrity, and
                        care. Let’s build something meaningful—together
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center ">
                      <div className="mt-8 flex gap-2 items-center">
                        {" "}
                        <div>
                          <p className="text-xl lato">Modesta kesi</p>
                          <p className="text-[14px] lato">CEO and Founder</p>
                        </div>
                      </div>
                      <div>
                        <div className=" flex gap-4 mt-10">
                          <a
                            href="#s3"
                            className="py-2 px-3 rounded-md bg-white text-[#B68C5A]"
                          >
                            ❮
                          </a>
                          <a
                            href="#s2"
                            className="py-2 px-3 rounded-md bg-white text-[#B68C5A]"
                          >
                            ❯
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="s2" className="carousel-item relative w-full">
                <div className="pt-20 pb-8">
                  <div className="">
                    <Image
                      className="mt-0 lg:-mt-20"
                      src="/clientSliderImage3.jpeg"
                      height={552}
                      width={463}
                      alt="Blog Icon"
                    />
                  </div>
                  <div className="relative bg-white max-w-[481px] h-[290px] pt-2 px-12 rounded-md -mt-60 ml-20">
                    <div>
                      <h3 className="text-black text-2xl font-medium mt-10 lato">
                        “The best team of movers”
                      </h3>
                      <p className="text-black text-[16px] font-normal mt-3 lato">
                        We’re here to serve you with passion, integrity, and
                        care. Let’s build something meaningful—together.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center ">
                      <div className="mt-8 flex gap-2 items-center">
                        {" "}
                        <div>
                          <p className="text-xl lato">MODESTA KESI</p>
                          <p className="text-[14px] lato">CEO and Founder</p>
                        </div>
                      </div>
                      <div>
                        <div className=" flex gap-4 mt-10">
                          <a
                            href="#s1"
                            className="py-2 px-3 rounded-md bg-white text-[#B68C5A]"
                          >
                            ❮
                          </a>
                          <a
                            href="#s3"
                            className="py-2 px-3 rounded-md bg-white text-[#B68C5A]"
                          >
                            ❯
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="s3" className="carousel-item relative w-full">
                <div className="pt-20 pb-8">
                  <div className="">
                    <Image
                      className="mt-0 lg:-mt-20"
                      src="/clientSliderImage4.jpeg"
                      height={552}
                      width={463}
                      alt="Blog Icon"
                    />
                  </div>
                  <div className="relative bg-white max-w-[481px] h-[290px] pt-2 px-12 rounded-md -mt-60 ml-20">
                    <div>
                      <h3 className="text-black text-2xl font-medium mt-10 lato">
                        “The best team of movers”
                      </h3>
                      <p className="text-black text-[16px] font-normal mt-3 lato">
                      justice,integrity and correctness
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center ">
                      <div className="mt-8 flex gap-2 items-center">
                        {" "}
                        <div>
                          <p className="text-xl lato">MODESTER KESI</p>
                          <p className="text-[14px] lato">CEO and Founder</p>
                        </div>
                      </div>
                      <div>
                        <div className=" flex gap-4 mt-10">
                          <a
                            href="#s2"
                            className="py-2 px-3 rounded-md bg-white text-[#B68C5A]"
                          >
                            ❮
                          </a>
                          <a
                            href="#s1"
                            className="py-2 px-3 rounded-md bg-white text-[#B68C5A]"
                          >
                            ❯
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="section-heading2">client’s experience</h4>
            <h1 className="mt-6 section-title2">
              some good word from <br className="hidden lg:flex" />
              our client’s
            </h1>
            <p className="mt-10 section-description2 ">
              We’re here to serve you with passion, integrity, and care.
 Let’s build something meaningful—together
            </p>
            <div className="mt-12 flex gap-6">
              <button className="hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8 text-[18px] lato">
                Read More
              </button>
              <button className="hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8 text-[18px] lato">
                Brows all services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsExperience;
