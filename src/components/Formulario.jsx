import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import toast, { Toaster } from "react-hot-toast";

function Formulario() {
  const { datos, handleChange, cotizarSeguro } = useCotizador();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    cotizarSeguro();

    toast.promise(saveSettings(settings), {
      loading: "Saving...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });
  };
  return (
    <>
      <Toaster />

      <form action="" onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-500 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full p-3 bg-white border border-gray-300 rounded"
            onChange={(e) => handleChange(e)}
            value={datos.marca}
          >
            <option value="">--Selecciona Marca--</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-500 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            id="year"
            className="w-full p-3 bg-white border border-gray-300 rounded"
            onChange={(e) => handleChange(e)}
            value={datos.year}
          >
            <option value="">--Selecciona Año--</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-500 uppercase"
          >
            Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="plan">{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  id="plan"
                  value={plan.id}
                  onChange={(e) => handleChange(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition-colors text-white  cursor-pointer p-3 uppercase font-bold rounded"
        />
      </form>
    </>
  );
}

export default Formulario;
