'use client';

import Image from 'next/image';
import { TypingText, TitleText } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import style from '../styles';

const World = () => (
  <section className={`${style.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${style.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyle="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyle="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0, 3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          width={100}
          height={100}
          priority
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            width={100}
            height={100}
            priority
            src="people-01.png"
            alt="people"
            className="h-full w-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            width={100}
            height={100}
            priority
            src="people-02.png"
            alt="people"
            className="h-full w-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            width={100}
            height={100}
            priority
            src="people-03.png"
            alt="people"
            className="h-full w-full"
          />
        </div>
        <div className="max-[1024px]:hidden absolute top-[calc(50%-50px)] left-[15%] w-[196px] h-[150px]  rounded-[24px] bg-[#5d6680]">
          <div className="absolute w-full h-full gradient-06 z-0" />
          <Image
            width={100}
            height={100}
            priority
            src="planet-10.png"
            alt="planet"
            className="absolute h-full w-full p-[6px] rounded-[24px] object-cover"
          />
          <div className="absolute w-full px-6 top-[60%]">
            <div className="relative flex items-center">
              <Image
                width={24}
                height={24}
                priority
                src="/people-04.png"
                alt="people"
                className="absolute left-6"
              />
              <Image
                width={24}
                height={24}
                priority
                src="/people-05.png"
                alt="people"
                className="absolute left-3"
              />
              <Image
                width={24}
                height={24}
                priority
                src="/people-06.png"
                alt="people"
                className="absolute left-0"
              />
              <p className="absolute left-[55px] font-normal text-[10px] leading-[10px] text-white">
                +264 has joined
              </p>
            </div>

            <p className="relative top-4 text-white text-[16px] font-bold">
              The Upside Down
            </p>
          </div>
        </div>
        <div className="max-[1024px]:hidden absolute top-[15%] right-[15%] w-[196px] h-[150px]  rounded-[24px] bg-[#5d6680]">
          <div className="absolute w-full h-full gradient-07 z-0" />
          <Image
            width={100}
            height={100}
            priority
            src="planet-11.png"
            alt="olanet"
            className="absolute h-full w-full p-[6px] rounded-[24px] object-cover"
          />
          <div className="absolute w-full px-6 top-[60%]">
            <div className="relative flex items-center">
              <Image
                width={24}
                height={24}
                priority
                src="/people-04.png"
                alt="people"
                className="absolute left-6"
              />
              <Image
                width={24}
                height={24}
                priority
                src="/people-05.png"
                alt="people"
                className="absolute left-3"
              />
              <Image
                width={24}
                height={24}
                priority
                src="/people-06.png"
                alt="people"
                className="absolute left-0"
              />
              <p className="absolute left-[55px] font-normal text-[10px] leading-[10px] text-white">
                +291 has joined
              </p>
            </div>

            <p className="relative top-4 text-white text-[16px] font-bold">
              Hawkins Labs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
