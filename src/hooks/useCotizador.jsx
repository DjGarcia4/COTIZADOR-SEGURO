import { useContext } from "react";
import CotizadorContext from "../context/CreateContext";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
