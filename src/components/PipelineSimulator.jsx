import React, { useState } from 'react';
import { 
  Play, 
  DownloadCloud, 
  Flame, 
  CheckCircle2, 
  Database, 
  Cpu, 
  Activity 
} from 'lucide-react';
import { pipelineNodes } from '../data/portfolioData';

export default function PipelineSimulator({ onNotify }) {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [nodeStatuses, setNodeStatuses] = useState(
    pipelineNodes.map(n => n.initialStatus)
  );

  const selectedNode = pipelineNodes[selectedNodeIndex];

  const handleSelectNode = (index) => {
    setSelectedNodeIndex(index);
  };

  const handleSimulateDAG = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const updatedStatuses = [...nodeStatuses];
    let currentStep = 0;

    const interval = setInterval(() => {
      setSelectedNodeIndex(currentStep);
      updatedStatuses[currentStep] = "SUCCESS ✓";
      setNodeStatuses([...updatedStatuses]);

      currentStep++;
      if (currentStep >= pipelineNodes.length) {
        clearInterval(interval);
        setIsSimulating(false);
        onNotify("Airflow DAG Run Complete: All 4 Pipeline Stages Succeeded with 98.5% Pytest Coverage!");
      }
    }, 700);
  };

  const getNodeIcon = (id) => {
    switch (id) {
      case 0: return <DownloadCloud className="w-5 h-5 text-cyan-400" />;
      case 1: return <Flame className="w-5 h-5 text-amber-400" />;
      case 2: return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 3: return <Database className="w-5 h-5 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-cyan-500/25 space-y-8 shadow-2xl relative overflow-hidden">
      
      {/* Simulator Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-2">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold uppercase tracking-wider">
              INTERACTIVE ARCHITECTURE SIMULATION
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold dark:text-white text-slate-900 tracking-tight">
            Configurable Airflow DAG &amp; GCP Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Click any pipeline stage below to inspect Shyamaprasad's hands-on engineering contribution, or simulate an end-to-end Airflow DAG run.
          </p>
        </div>

        <button
          onClick={handleSimulateDAG}
          disabled={isSimulating}
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all shrink-0 self-start sm:self-auto shadow-lg ${
            isSimulating
              ? "bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700"
              : "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 shadow-emerald-500/20 hover:brightness-110 hover:scale-[1.02]"
          }`}
        >
          <Play className={`w-4 h-4 fill-current ${isSimulating ? "animate-spin" : ""}`} />
          <span>{isSimulating ? "Executing Airflow DAG..." : "Simulate DAG Run"}</span>
        </button>
      </div>

      {/* Interactive 4 Pipeline Nodes Flow with Generous Gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {pipelineNodes.map((node, index) => {
          const isSelected = selectedNodeIndex === index;
          return (
            <button
              key={node.id}
              onClick={() => handleSelectNode(index)}
              className={`text-left p-5 rounded-2xl transition-all duration-300 focus:outline-none flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? "node-active bg-slate-900/90 border-2 border-cyan-500 shadow-xl shadow-cyan-500/10 scale-[1.02]"
                  : "bg-slate-900/60 border-2 border-slate-800/90 hover:border-cyan-500/50 hover:scale-[1.01]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-800 text-cyan-300 border border-slate-700">
                    {node.stage}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/60 group-hover:scale-110 transition-transform">
                    {getNodeIcon(node.id)}
                  </div>
                </div>

                <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-cyan-400 transition-colors">
                  {node.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {node.subtext}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono">
                <span className={`w-2 h-2 rounded-full ${
                  nodeStatuses[index].includes("SUCCESS") ? "bg-emerald-400 animate-pulse" : "bg-cyan-400"
                }`}></span>
                <span className={nodeStatuses[index].includes("SUCCESS") ? "text-emerald-400 font-semibold" : "text-slate-400"}>
                  {nodeStatuses[index]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Inspector Panel with Ample Padding */}
      <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {selectedNode.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {selectedNode.tech}
            </span>
          </div>

          <h4 className="text-lg sm:text-xl font-bold text-white">
            {selectedNode.title}
          </h4>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {selectedNode.desc}
          </p>
        </div>

        {/* Telemetry Output Box */}
        <div className="lg:col-span-5 bg-slate-900 rounded-xl p-5 border border-slate-800 font-mono text-xs text-emerald-300 space-y-2 shadow-inner">
          <div className="text-slate-500 flex justify-between pb-2 border-b border-slate-800">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>// DAG Task Telemetry</span>
            </span>
            <span className="text-cyan-400 font-semibold">
              {isSimulating ? "STATUS: RUNNING" : "STATUS: HEALTHY"}
            </span>
          </div>
          <div className="text-slate-300">{selectedNode.line1}</div>
          <div className="text-cyan-300">{selectedNode.line2}</div>
          <div className="text-emerald-400">{selectedNode.line3}</div>
        </div>
      </div>

    </div>
  );
}
