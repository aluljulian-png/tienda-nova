
export default function page() {
  return (
    
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8">
      
      <div className="max-w-md  mx-auto">
      <h1>Contacto</h1>
      <form className= "flex flex-col gap-4">
       
        <div className="flex flex-col gap-1">
          <label htmlFor="nombre">Nombre:</label>
          <input className="w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400" type="text" id="nombre" name="nombre" />
        </div>
       
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input className="w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400" type="email" id="email" name="email" placeholder={"escribi tu mail"} />
        </div>
       
        <div className="flex flex-col gap-1">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea className="w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400" id="mensaje" name="mensaje"></textarea>
        </div>
        <button className="self-end rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95" type="button">Enviar</button>
      </form>
    </div>
</div>
  )
}

