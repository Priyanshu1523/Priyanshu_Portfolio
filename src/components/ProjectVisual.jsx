import React from 'react';
import { 
  Terminal, Database, Cpu, Activity, CheckCircle2, ShieldCheck, 
  MapPin, Globe, Sparkles, Layers, FileCode2, ArrowUpRight, BarChart3, Box
} from 'lucide-react';

export default function ProjectVisual({ projectId, className = "" }) {
  switch (projectId) {
    case 'odoo-enterprise-suite':
      return (
        <div className={`w-full h-full bg-[#07241B] p-4 sm:p-5 flex flex-col justify-between select-none font-mono-code ${className}`}>
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-[#D6C29A]/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-[#D6C29A] font-semibold ml-2">ODOO_ENTERPRISE_CORE.py</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-400 bg-[#0B3D2E] px-2 py-0.5 rounded border border-[#D6C29A]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYNC ACTIVE</span>
            </div>
          </div>

          {/* ERP Dashboard Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 my-3">
            <div className="p-2.5 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15">
              <span className="text-[10px] text-[#999B96] block">Inventory Moves</span>
              <span className="text-sm sm:text-base font-bold text-[#F3F0E8]">14,820</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">+18% Real-time</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15">
              <span className="text-[10px] text-[#999B96] block">Invoices Cleared</span>
              <span className="text-sm sm:text-base font-bold text-[#D6C29A]">₹8.4M</span>
              <span className="text-[9px] text-[#D6C29A] block mt-0.5">GST Compliant</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15">
              <span className="text-[10px] text-[#999B96] block">DB Query Speed</span>
              <span className="text-sm sm:text-base font-bold text-[#F3F0E8]">11ms</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">PostgreSQL 16</span>
            </div>
          </div>

          {/* Module Workflows List */}
          <div className="space-y-1.5 bg-[#101110]/60 p-2.5 rounded-lg border border-[#D6C29A]/10 text-[10px] sm:text-[11px]">
            <div className="flex items-center justify-between text-[#F3F0E8]">
              <span className="flex items-center gap-1.5">
                <Box size={12} className="text-[#D6C29A]" />
                <span>account.move &bull; Automated Ledger Reconcile</span>
              </span>
              <span className="text-emerald-400 font-semibold">VALIDATED</span>
            </div>
            <div className="flex items-center justify-between text-[#999B96]">
              <span className="flex items-center gap-1.5">
                <Layers size={12} className="text-[#D6C29A]" />
                <span>stock.picking &bull; Barcode Dispatch Trigger</span>
              </span>
              <span className="text-[#D6C29A]">QUEUED</span>
            </div>
          </div>

          {/* Bottom Terminal Status */}
          <div className="pt-2 flex items-center justify-between text-[10px] text-[#999B96] border-t border-[#D6C29A]/10">
            <span>MODULE: /odoo/custom_addons/operations_suite</span>
            <span className="text-[#D6C29A]">OWL + QWeb</span>
          </div>
        </div>
      );

    case 'bisag-geospatial-platform':
      return (
        <div className={`w-full h-full bg-[#07241B] p-4 sm:p-5 flex flex-col justify-between select-none font-mono-code ${className}`}>
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-[#D6C29A]/20 pb-3">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-[#D6C29A]" />
              <span className="text-[11px] text-[#F3F0E8] font-semibold">BISAG-N GEOSPATIAL VALIDATOR</span>
            </div>
            <div className="text-[10px] text-[#D6C29A] bg-[#101110] px-2 py-0.5 rounded border border-[#D6C29A]/20">
              COORD: 23.2156° N, 72.6369° E
            </div>
          </div>

          {/* Map Grid Vector Visualizer */}
          <div className="relative my-3 flex-1 rounded-lg bg-[#101110] border border-[#D6C29A]/20 overflow-hidden p-3 flex flex-col justify-between">
            {/* Coordinate Grid Background Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B3D2E_1px,transparent_1px),linear-gradient(to_bottom,#0B3D2E_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

            <div className="relative z-10 flex items-center justify-between text-[10px]">
              <span className="text-[#D6C29A] font-semibold">SPATIAL RASTER QUALITY CHECK</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} /> 99.8% FIDELITY
              </span>
            </div>

            {/* Simulated Satellite Vector Bounds */}
            <div className="relative z-10 flex items-center justify-center py-2">
              <div className="w-36 h-20 rounded border-2 border-dashed border-[#D6C29A] bg-[#0B3D2E]/40 flex flex-col items-center justify-center p-2 text-center backdrop-blur-[1px]">
                <Activity size={16} className="text-emerald-400 mb-1 animate-pulse" />
                <span className="text-[10px] text-[#F3F0E8] font-bold">POLYGON LAYER_04</span>
                <span className="text-[9px] text-[#D6C29A]">Standardized Schema</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[10px] text-[#999B96]">
              <span>ATTRIBUTES: 48 COLS</span>
              <span className="text-emerald-400 font-semibold">NO NULL DISCREPANCIES</span>
            </div>
          </div>

          {/* Bottom Meta */}
          <div className="pt-2 flex items-center justify-between text-[10px] text-[#999B96] border-t border-[#D6C29A]/10">
            <span>ENGINE: Python / Spatial PostgreSQL GIS</span>
            <span className="text-[#D6C29A]">Gandhinagar, India</span>
          </div>
        </div>
      );

    case 'indrashil-academic-portal':
      return (
        <div className={`w-full h-full bg-[#07241B] p-4 sm:p-5 flex flex-col justify-between select-none font-mono-code ${className}`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#D6C29A]/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D6C29A]" />
              <span className="text-[11px] text-[#F3F0E8] font-semibold">INDRASHIL_CAMPUS_PORTAL</span>
            </div>
            <div className="text-[10px] text-emerald-400 bg-[#0B3D2E] px-2 py-0.5 rounded border border-[#D6C29A]/20">
              API STATUS: 200 OK
            </div>
          </div>

          {/* Academic Portal Modules */}
          <div className="grid grid-cols-2 gap-3 my-3">
            <div className="p-3 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-[#D6C29A]">ACTIVE ENROLLMENTS</span>
                <BarChart3 size={12} className="text-[#D6C29A]" />
              </div>
              <span className="text-lg font-bold text-[#F3F0E8]">3,420+</span>
              <span className="text-[9px] text-[#999B96] block mt-0.5">Students & Faculty</span>
            </div>

            <div className="p-3 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-[#D6C29A]">REST ENDPOINTS</span>
                <Activity size={12} className="text-emerald-400" />
              </div>
              <span className="text-lg font-bold text-[#F3F0E8]">42 APIS</span>
              <span className="text-[9px] text-emerald-400 block mt-0.5">JWT Secure Session</span>
            </div>
          </div>

          {/* Academic Log Item */}
          <div className="bg-[#101110]/60 p-2.5 rounded-lg border border-[#D6C29A]/10 text-[10px]">
            <div className="flex items-center justify-between text-[#F3F0E8] mb-1">
              <span>GET /api/v1/students/course-registry</span>
              <span className="text-emerald-400">14ms</span>
            </div>
            <div className="w-full bg-[#0B3D2E] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#D6C29A] h-full w-[94%]" />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-[#999B96] border-t border-[#D6C29A]/10">
            <span>STACK: React.js &bull; Node.js &bull; PostgreSQL</span>
            <span className="text-[#D6C29A]">Academic Portal</span>
          </div>
        </div>
      );

    case 'frappe-erpnext-workflow-hub':
      return (
        <div className={`w-full h-full bg-[#07241B] p-4 sm:p-5 flex flex-col justify-between select-none font-mono-code ${className}`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#D6C29A]/20 pb-3">
            <div className="flex items-center gap-2">
              <Layers size={14} className="text-[#D6C29A]" />
              <span className="text-[11px] text-[#F3F0E8] font-semibold">FRAPPE_WORKFLOW_ENGINE</span>
            </div>
            <span className="text-[10px] text-[#D6C29A] bg-[#101110] px-2 py-0.5 rounded border border-[#D6C29A]/20">
              ERPNext v15
            </span>
          </div>

          {/* Multi-tier Approval Pipeline Visual */}
          <div className="my-3 space-y-2">
            <div className="p-2.5 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15 flex items-center justify-between text-[11px]">
              <span className="text-[#F3F0E8]">1. Purchase Order Created</span>
              <span className="text-emerald-400 font-semibold">&check; AUTO-LOGGED</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15 flex items-center justify-between text-[11px]">
              <span className="text-[#F3F0E8]">2. Department Head Review</span>
              <span className="text-emerald-400 font-semibold">&check; APPROVED</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0B3D2E]/60 border border-[#D6C29A]/30 flex items-center justify-between text-[11px]">
              <span className="text-[#D6C29A] font-semibold">3. Finance Escrow Disbursement</span>
              <span className="text-amber-300 font-semibold animate-pulse">&bull; IN REVIEW</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-[#999B96] border-t border-[#D6C29A]/10">
            <span>DOCTYPE: Custom Purchase Requisition</span>
            <span className="text-[#D6C29A]">Automated Hooks</span>
          </div>
        </div>
      );

    case 'fullstack-ecommerce-inventory':
      return (
        <div className={`w-full h-full bg-[#07241B] p-4 sm:p-5 flex flex-col justify-between select-none font-mono-code ${className}`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#D6C29A]/20 pb-3">
            <div className="flex items-center gap-2">
              <Box size={14} className="text-[#D6C29A]" />
              <span className="text-[11px] text-[#F3F0E8] font-semibold">COMMERCE_SYNC_PIPELINE</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-[#0B3D2E] px-2 py-0.5 rounded border border-[#D6C29A]/20">
              ATOMIC LOCKS ACTIVE
            </span>
          </div>

          {/* Live Storefront Mock Metrics */}
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="p-2 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15 text-center">
              <span className="text-[9px] text-[#999B96] block">Latency</span>
              <span className="text-sm font-bold text-emerald-400">8ms</span>
            </div>
            <div className="p-2 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15 text-center">
              <span className="text-[9px] text-[#999B96] block">Live Cart</span>
              <span className="text-sm font-bold text-[#F3F0E8]">128 Items</span>
            </div>
            <div className="p-2 rounded-lg bg-[#101110]/80 border border-[#D6C29A]/15 text-center">
              <span className="text-[9px] text-[#999B96] block">Stock Sync</span>
              <span className="text-sm font-bold text-[#D6C29A]">100%</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#101110]/70 border border-[#D6C29A]/10 text-[10px] flex items-center justify-between text-[#F3F0E8]">
            <span>POST /api/v1/checkout/reserve-inventory</span>
            <span className="text-emerald-400">STATUS 201</span>
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-[#999B96] border-t border-[#D6C29A]/10">
            <span>React.js &bull; Node &bull; MongoDB</span>
            <span className="text-[#D6C29A]">Stripe Ready</span>
          </div>
        </div>
      );

    case 'ai-invoice-pipeline':
      return (
        <div className={`w-full h-full bg-[#07241B] p-4 sm:p-5 flex flex-col justify-between select-none font-mono-code ${className}`}>
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#D6C29A]/20 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#D6C29A]" />
              <span className="text-[11px] text-[#F3F0E8] font-semibold">AI_DOCUMENT_OCR_PIPELINE</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-[#0B3D2E] px-2 py-0.5 rounded border border-[#D6C29A]/20">
              ACCURACY: 99.4%
            </span>
          </div>

          {/* OCR Document Scanner Box */}
          <div className="my-3 p-3 rounded-lg bg-[#101110] border border-[#D6C29A]/20 space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between text-[#D6C29A]">
              <span>Extracted Fields:</span>
              <span className="text-emerald-400">JSON Parsed</span>
            </div>
            <div className="p-1.5 rounded bg-[#12291F] text-[#F3F0E8] flex justify-between">
              <span>Vendor: TechCorp Solutions Ltd.</span>
              <span className="text-[#D6C29A]">Confidence: 0.99</span>
            </div>
            <div className="p-1.5 rounded bg-[#12291F] text-[#F3F0E8] flex justify-between">
              <span>Invoice #INV-2025-089</span>
              <span className="text-[#D6C29A]">Tax: ₹14,250</span>
            </div>
            <div className="p-1.5 rounded bg-[#0B3D2E] text-emerald-300 flex justify-between font-semibold">
              <span>Auto-Posted to ERP Account: 2100-AP</span>
              <span>&check; Committed</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-[#999B96] border-t border-[#D6C29A]/10">
            <span>FastAPI &bull; Vision Model &bull; XML-RPC</span>
            <span className="text-[#D6C29A]">Zero Data Entry</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
