import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
}

const WaveText = ({ text, className = "", letterClassName = "" }: WaveTextProps) => {
  return (
    <span className={`inline-flex cursor-pointer ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block ${letterClassName}`}
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          whileHover={{
            y: -12,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{
            delay: index * 0.03,
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default WaveText;
