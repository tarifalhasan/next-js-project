import React from 'react';
import r1 from '../img/regtengle.png';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className=" py-16 relative bg-white">
      <div className="container  flex text-right  justify-end">
        <div className="lg:pl-28 space-y-5">
          <h1 className=" text-5xl font-openSens font-bold">
            עמותת בוגרי מערך ההגנה בסייבר
          </h1>
          <p className="text-xl font-normal font-openSens">
            עמותת בוגרי ההגנה בסייבר (ע"ר 580680007) נוסדה מתוך הרצון לסייע
            ולחבר את בוגרי המערך לדורותיו, בנוסף להנגשת הידע העשיר שצברו בוגריה
            לטובת החברה הישראלית. העמותה פועלת לקידום מטרות אלו באמצעות שלל
            פעילויות ציבוריות אשר נעשות על ידי מתנדבי העמותה, במקביל לכנסי
            נטוורקינג וקידום יזמות בקרב הבוגרים, פעילויות הדרכה והעשרה במגזרים
            שונים ופעילויות סיוע מקצועי לגופים ועמותות ציבוריות
            בנושא ההגנה בסייבר
          </p>
          <button className="btn_primary">בוגרים? הצטרפו בחינם</button>
        </div>
      </div>

      <div className=" absolute  bottom-0 left-0">
        <Image width={120} src={r1} alt="r1" />
      </div>
      <div className=" absolute  top-0 right-0">
        <Image width={120} src={r1} alt="r1" />
      </div>
    </section>
  );
};

export default Hero;
