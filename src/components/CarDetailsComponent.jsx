import styles from "./CarDetailsComponent.module.css";

const CarDetailsComponent = () => {
  return (
    <div className = {styles.cars}>
      <div className= {styles.car}>
        <img src="https://purepng.com/public/uploads/large/purepng.com-red-porsche-911-gt3-rs-4-carcarvehicletransportporsche-961524661235vbivb.png" alt="" />
        <h3>Nome: Porsche 911 GT3 RS</h3>
        <p><strong>Descrição: </strong>Supercarro híbrido com desempenho extremo, design futurista e tecnologia de ponta.</p>
      </div>
      <div className= {styles.car}>
        <img src="https://www.pngplay.com/wp-content/uploads/13/Ferrari-SF90-Transparent-PNG.png" alt="" />
        <h3>Nome: Ferrari SF90</h3>
        <p><strong>Descrição: </strong>Supercarro híbrido com desempenho extremo, design futurista e tecnologia de ponta.</p>
      </div>
        <div className= {styles.car}>
        <img src="https://www.pngmart.com/files/22/Tesla-Roadster-PNG-HD.png" alt="" />
      <h3>Nome: Tesla Roadster</h3>
      <p><strong>Descrição: </strong>Supercarro híbrido com desempenho extremo, design futurista e tecnologia de ponta.</p>
      </div>
    </div>
  );
};

export default CarDetailsComponent;