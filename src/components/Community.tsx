import React from 'react';
import vector from '../img/Vector.png';
import Image from 'next/image';
import { communityData } from '@/data';

import bg from '../img/bg.png';

import s1 from '../image/sponsars/layer1.png';
import s2 from '../image/sponsars/layer2.png';
import s3 from '../image/sponsars/layer3.png';
import s4 from '../image/sponsars/layer4.png';

const s = s2;

interface CardProps {
  name: string;

  png: any;
}

const Card: React.FC<CardProps> = ({ name, png }) => (
  <div className="w-full min-w-[280px] shadow_sm overflow-hidden px-2 py-2 bg-white rounded-3xl flex items-center gap-2 ">
    <h2 className="text-xl w-[90%]  font-inter font-bold">{name}</h2>
    <Image src={png} alt={name} className="block" />
  </div>
);

const Community = () => {
  return (
    <section
      id="why_us"
      className="relative hidden lg:flex  flex-col gap-10 overflow-hidden   "
    >
      <div className="absolute  lg:top-[6%] 2xl:top-[10%] w-full">
        <div className=" flex gap-y-6  items-center flex-col  container ">
          <div className="flex items-center gap-6">
            <Card name="מרכז מודיעין להגנה" png={s1} />
            <Card name="חטיבת ההגנה בסייבר" png={s2} />
            <Card name="מרכז צופן ובטחון (מצו”ב)" png={s3} />
          </div>
          <div className="flex justify-center items-center gap-6">
            <Card name="מרכז מבצעים להגנה" png={s1} />
            <Card name="מרכז לוחמה אלקטרונית" png={s4} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="relative">
        <div className="  container place-items-center gap-6 mt-auto lg:mt-[28%] xl:mt-[25%] 2xl:mt-[20%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {communityData.map((img, i) => (
            <div className="relative z-50" key={i}>
              <Image width={280} height={280} src={img} alt="img" />{' '}
              {/* Update src to img.url */}
            </div>
          ))}
          <div className="absolute z-10">
            <Image src={bg} alt="bg" />
          </div>
        </div>
      </div>
      <div className="flex mt-auto pb-2  flex-col lg:flex-row  items-end  text-white  justify-center ">
        <div className="bg-[#001767] relative px-16 flex flex-col justify-center items-end h-[474px] basis-[35%]">
          <h2 className="text-4xl  font-openSens font-bold">עבור המערך</h2>
          <p className="text-lg pt-2 w-full 2xl:w-[70%]]  font-normal font-openSens text-right">
            אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
            במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן עובדת עם
            מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה את פעילותיה.
          </p>
          <div className="absolute left-0 ">
            <Image src={vector} alt="f" />
          </div>
        </div>
        <div className="bg-[#001354] flex px-6 flex-col justify-center items-start  basis-[30%] h-[474px] ">
          <h2 className="text-4xl text-right  font-openSens font-bold">
            עבור המערך
          </h2>
          <p className="text-lg pt-2  w-full 2xl:w-[70%] font-normal font-openSens">
            אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
            במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן עובדת עם
            מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה את פעילותיה.
          </p>
        </div>
        <div className="bg_2 flex px-6 flex-col justify-center items-start  basis-[35%] h-[474px]">
          <h2 className="text-4xl  font-openSens font-bold">עבור המערך</h2>
          <p className="text-lg pt-2  w-full 2xl:w-[70%]]  font-normal font-openSens">
            אין זה ראוי העמותה תשמר ותטפח את המורשת ואת הערכים אשר מושרשים
            במערך. העמותה מעודדת ומעודדת פעילויות מילואים שונות, כמו כן עובדת עם
            מערכי החינוך והמורשת ביחידות על מנת להנגיש לכלל החברה את פעילותיה.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
