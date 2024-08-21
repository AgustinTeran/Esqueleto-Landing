import { Form, Field } from "react-final-form";
import TextInput from "../forms/textInput";
export default function ContactForm() {
  function onSubmit(values, functions) {
    console.log(values);
    functions.restart()
  }
  return (
    <Form onSubmit={onSubmit} render={({ handleSubmit, submitting, pristine }) => {
      return (
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 w-full justify-center items-center">
        <Field name="nameAndLastName" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Nombre y apellido"}  component={TextInput}/>
        <Field name="number" type="number" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Número de celular"}  component={TextInput}/>
        <Field name="email" type="email"  className="flex-1 basis-full" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Email del trabajo"}  component={TextInput}/>
        <Field name="company" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Empresa a la que perteneces"}  component={TextInput}/>
        <Field name="chargeAtCompany" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Cargo en la empresa"}  component={TextInput}/>
        <Field name="message" className="flex-1 basis-[calc(50%-8px)] min-w-[200px]" inputClass={"border border-gray-500 rounded-xl py-3 px-5"} placeholder={"Mensaje"}  component={TextInput}/>
        <div className="flex-1 basis-full w-full flex justify-end">
          <button type="submit" className="bg-primary text-pirmary-contrast py-2 px-7 rounded-xl hover:opacity-50 font-semibold">Enviar</button>
        </div>
      </form>);
    }}/>
  );
}