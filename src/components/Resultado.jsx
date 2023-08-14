/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";
function Resultado() {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  const yearRef = useRef(year);

  const nombreMarca = useCallback(
    MARCAS.filter((m) => m.id === Number(marca)),
    [resultado]
  );
  const nombrePlan = useCallback(
    PLANES.filter((p) => p.id === Number(plan)),
    [resultado]
  );
  if (resultado === 0) return null;
  return (
    <div className=" bg-gray-100 text-center mt-5 p-5 shadow rounded">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca[0].nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan[0].nombre}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total: </span>$ {resultado}
      </p>
    </div>
  );
}

export default Resultado;
