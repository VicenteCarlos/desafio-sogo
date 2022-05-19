import { StyledMain } from "../PrestadoresServico/style";
import { People } from "../../components";
import { useFormContext } from "../../providers/FormProvider";
import { motion } from "framer-motion";

const PrestadoresServico = () => {
  const { peopleRegistered } = useFormContext();
  console.log(peopleRegistered);

  return (
    <StyledMain>
      <section className="container-info">
        <img
          src="https://cdn.discordapp.com/attachments/971859006173896744/976306416728047646/Screenshot_31.png"
          alt="logoSogo"
        />
        <motion.div 
          initial={{x: -1000}}
          animate={{x: 0}}
          transition={{type: "tween", duration: 1}}
          className="container"
        >
          {peopleRegistered.map((item, i) => (
            <People key={i} item={item} />
          ))}
        </motion.div>
      </section>
    </StyledMain>
  );
};

export { PrestadoresServico };
