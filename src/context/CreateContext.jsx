import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";
const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({ marca: "", year: "", plan: "" });
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const cotizarSeguro = () => {
    //*Base
    let resultado = 2000;
    //*Obtener diferencia de año
    const diferencia = obtenerDiferenciaYear(datos.year);
    //*Hay que restar 3% por cada año
    resultado -= (diferencia * 3 * 2000) / 100;
    //*Americano 15%
    //*Europeo 30%
    //*Asiatico 5%
    resultado *= calcularMarca(datos.marca);
    //*Basico 20%
    //*Basico 50%
    resultado *= calcularPlan(datos.plan);
    resultado = resultado.toFixed(2);

    //*Formatear dinero
    resultado = formatearDinero(resultado);
    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 2000);
  };
  return (
    <CotizadorContext.Provider
      value={{ datos, handleChange, cotizarSeguro, resultado, cargando }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
