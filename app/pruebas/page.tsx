export default function PracticaPage(){
    return (

        <main className="min-h-screen bg-slate-950 p-8 text-white">
            <h1 className="mb-8 text-center text-3xl font-bold">
                Practica de Position
            </h1>

        <section className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-xl font-semibold">
                1. Relative y obsulute
            </h2>

        <div className="relative h-64 w-full rounded-xl border-2 border-blue-400 bg-slate-800 p-4">
        Caja Grande

            <div className="absolute top-0 right-0 h-8 w-8 rounded-full bg-cyan-400"></div>

        </div>
        </section>
        <section className="mx-auto mt-10 max-w-3xl">
  <h2 className="mb-4 text-xl font-semibold">
    2. Texto encima de una imagen
  </h2>

  <div className="relative overflow-hidden rounded-xl">
    <img
      className="block h-64 w-full object-cover"
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
      alt="Espacio de trabajo con computadora"
    />

    <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
      <h3 className="text-lg font-bold">
        Mi espacio tecnológico
      </h3>
      <p>Todo lo que necesitás para tu escritorio.</p>
    </div>
  </div>
</section>
        
        <section className="mx-auto mt-10 max-w-3xl">
         <h2 className="mb-4 text-xl font-semibold">
         3. Superposicion y z-index
         </h2>

        <div className="relative h-64 rounded-xl bg-slate-800">
            <div className="absolute left-10 top-8 z-20 h-32  w-40 rounded-lg bg-blue-600 p-4">
        </div> 
        
        <div className="absolute left-24 top-16 z-10 h-32 w-40 rounded-lg bg-cyan-400 p-4 text-slate-950">
        Caja B
        </div>
            </div>
             </section>
        
        <section className="mx-auto mt-10 max-w-3xl">
            <h2 className="mb-4 text-xl font-semibold">
            4. hover, focus y activa    
                </h2>    
            
        <div className="flex flex-col gap-4">
        <input type="text" placeholder="hace clic aca para escribir"
        className="w-full rounded-md border border-slate-500 bg-white p-3 text-slate-900 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400"
        />    
        
        <button type="button" 
        className="self-start rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
    Proba el boton
        
            </button>
            </div>
            </section>     
        
        </main>
    );
}