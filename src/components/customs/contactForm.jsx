import { Form, Field } from "react-final-form";
import TextInput from "../forms/textInput";
export default function ContactForm() {
  function onSubmit(values, functions) {
    // console.log(values);
    alert("✅ Esto es una simulación. En un caso real, los datos se enviarían a un backend.");
    functions.restart()
  }
  return (
    <Form onSubmit={onSubmit} render={({ handleSubmit, submitting, pristine }) => {
      return (
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 w-full justify-center items-center">
        <p className="text-sm text-gray-500 mb-4">
        ⚠️ <strong>DEMO:</strong> Este formulario es una simulación. No se guardan datos reales.
      </p>
        <Field name="demoName" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Nombre y apellido (demo)"}  component={TextInput}/>
        <Field name="demoNumber" type="number" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Número de celular (demo)"}  component={TextInput}/>
        <Field name="demoEmail" type="email"  className="flex-1 basis-full" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Email del trabajo (demo)"}  component={TextInput}/>
        <Field name="demoCompany" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Tu empresa (demo)"}  component={TextInput}/>
        <Field name="demoChargeAtCompany" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Cargo en la empresa (demo)"}  component={TextInput}/>
        <Field name="demoMessage" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Mensaje (demo)"}  component={TextInput}/>
        <div className="flex-1 basis-full w-full flex justify-end">
          <button type="submit" className="bg-primary text-pirmary-contrast py-2 px-7 rounded-xl hover:opacity-50 font-semibold">Enviar</button>
        </div>
      </form>);
    }}/>
  );
}