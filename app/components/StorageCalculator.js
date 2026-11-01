
"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

function StorageCalculator() {
  const [usedStorage, setUsedStorage] = useState(128);
  const [removablePercentage, setRemovablePercentage] = useState(18);

  const normalizedStorage = Math.max(0, Number(usedStorage) || 0);

  const normalizedPercentage = Math.min(
    100,
    Math.max(0, Number(removablePercentage) || 0),
  );

  const recoverableSpace = Math.round(
    normalizedStorage * (normalizedPercentage / 100),
  );

  return (
    <section id="simulador" className="bg-white px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        eyebrow="Simule agora"
        title="Quanto espaço você poderia recuperar?"
        description="Informe seu armazenamento ocupado e estime a quantidade de arquivos que não são mais necessários."
      />

      <div className="grid grid-cols-1 gap-12 rounded-2xl border border-[#e8e9f0] bg-[#f8f9fc] p-8 md:grid-cols-2 md:p-12">
        <div className="grid gap-8">
          <label className="grid gap-2 font-semibold text-[#17182b]">
            Armazenamento ocupado em GB
            <input
              className="w-full rounded-xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] outline-none focus:border-[#0059ff]"
              type="number"
              min="0"
              value={usedStorage}
              onChange={(event) => setUsedStorage(event.target.value)}
            />
          </label>

          <label className="grid gap-2 font-semibold text-[#17182b]">
            Percentual estimado de arquivos dispensáveis
            <input
              className="w-full rounded-xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] outline-none focus:border-[#0059ff]"
              type="number"
              min="0"
              max="100"
              value={removablePercentage}
              onChange={(event) =>
                setRemovablePercentage(event.target.value)
              }
            />
          </label>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[#0059ff] to-[#021133] p-8 text-white" aria-live="polite">
          <span className="text-white/75">Espaço potencialmente recuperável</span>
          <strong className="my-4 text-5xl">{recoverableSpace} GB</strong>
          <p className="m-0 text-white/80">
            Esta é uma estimativa. A Focus sempre apresenta os arquivos para
            revisão antes de qualquer exclusão.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorageCalculator;