import React from "react";

function Deeper() {
  return (
    <div>
      <section className="py-20 px-6 md:px-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-14">
          Stories and History
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-blue-700/30 transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Solaris-3
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium sed rerum ea facilis ullam, enim mollitia, sit
              consequatur quis quo illo a voluptatum exercitationem molestias
              consectetur numquam iure expedita inventore totam quibusdam
              eveniet reiciendis? Reiciendis dolorum quaerat voluptatum
              cupiditate nisi ipsam iste minus velit ipsum id optio quod,
              incidunt ex!
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-yellow-600/30 transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Lore
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              reiciendis iusto numquam? Facere, nostrum? Vel rerum, ipsum aut
              quas dolore eveniet impedit quibusdam ipsam aspernatur maiores in
              architecto earum labore sint dolor repellat rem reprehenderit
              voluptates ex quaerat. Sapiente quisquam perspiciatis recusandae
              ut dignissimos debitis non in. Nemo, unde eaque?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Deeper;
