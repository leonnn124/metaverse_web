"use client";

import { TypingText, InsightCard, TitleText } from "../components";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";
import style from "../styles";

const Insights = () => (
  <section className={`${style.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${style.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyle="text-center" />
      <TitleText title="Insight about metaverse" textStyle="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
