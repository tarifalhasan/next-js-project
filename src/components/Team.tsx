import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data';
import img1 from '../img/footer_vector_1.png';
import img2 from '../img/footer_vector.png';
const Team = () => {
  return (
    <section className="bg-[#001767] overflow-hidden  pt-10 pb-16 text-white">
      <div className="relative">
        <div className="container  space-y-7 justify-center">
          <div>
            {/* הנהלת העמותה */}
            <h2 className="text-center py-10 text-3xl  font-extrabold font-openSens">
              הנהלת העמותה
            </h2>
            <div className="flex gap-16 justify-center items-center">
              <div className="text-center">
                <div>
                  <Image
                    width={118}
                    height={118}
                    src={'/image/1.png'}
                    alt="Hello"
                  />
                  <div className="mt-2">
                    <h2 className="text-3xl leading-[21px]  font-inter font-extrabold">
                      דני ברן
                    </h2>
                    <p className="text-lg  font-inter font-medium">
                      נשיא העמותה
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div>
                  <Image
                    width={118}
                    height={118}
                    src={'/image/2.png'}
                    alt="Hello"
                  />
                  <div className="mt-2">
                    <h2 className="text-3xl leading-[21px]  font-inter font-extrabold">
                      דני ברן
                    </h2>
                    <p className="text-lg  font-inter font-medium">
                      נשיא העמותה
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div>
                  <Image
                    width={118}
                    height={118}
                    src={'/image/3.png'}
                    alt="Hello"
                  />
                  <div className="mt-2">
                    <h2 className="text-3xl leading-[21px]  font-inter font-extrabold">
                      דני ברן
                    </h2>
                    <p className="text-lg  font-inter font-medium">
                      נשיא העמותה
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="!z-20">
            {/* הנהלת העמותה */}
            <h2 className="text-center py-10 text-3xl  font-extrabold font-openSens">
              ועד מנהל
            </h2>
            <div className="flex gap-16 justify-center items-center">
              {teamMembers.map((data, i) => (
                <div key={i} className="text-center z-50">
                  <div>
                    <Image width={87} height={87} src={data.img} alt="Hello" />
                    <div className="mt-2">
                      <h2 className="text-lg leading-[21px]  font-inter font-bold">
                        {data.name}
                      </h2>
                      <p className="text-base  font-inter font-medium">
                        {data.job}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-12 z-20">
            {/* הנהלת העמותה */}
            <h2 className="text-center py-10 text-3xl  font-extrabold font-openSens">
              בעלי תפקידים
            </h2>
            <div className="flex gap-16 justify-center items-center">
              {teamMembers.map((data, i) => (
                <div key={i} className="text-center">
                  <div>
                    <Image width={87} height={87} src={data.img} alt="Hello" />
                    <div className="mt-2">
                      <h2 className="text-lg leading-[21px]  font-inter font-bold">
                        {data.name}
                      </h2>
                      <p className="text-base  font-inter font-medium">
                        {data.job}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0">
          <Image src={img1} width={300} alt="abal" />
        </div>
        <div className="absolute z-10 right-[43%] inset-0 transform translate-x-1/2 translate-y-1/2">
          <Image src={img2} alt="abal" />
        </div>
      </div>
    </section>
  );
};

export default Team;
