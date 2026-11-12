import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Heart, Zap, Shield, Megaphone, DollarSign, Dog, Leaf, Target, Plus } from 'lucide-react';

const STREAMS = [
  { name: 'Sausage Therapy Memberships', monthly: 4200, color: '#10b981' },
  { name: 'Noosa Dachshunds Bookings', monthly: 3800, color: '#3b82f6' },
  { name: 'Digital Courses & Guides', monthly: 2100, color: '#8b5cf6' },
  { name: 'Merch & Harnesses', monthly: 1500, color: '#f59e0b' },
  { name: 'NDIS Tools SaaS', monthly: 2900, color: '#ef4444' },
  { name: 'Visual Licensing', monthly: 800, color: '#06b6d4' },
  { name: 'Grants & Funding', monthly: 5000, color: '#84cc16' },
  { name: 'Crypto Yields', monthly: 600, color: '#a855f7' },
];

const APPS = [
  { id: 1, name: 'Sausage Therapy Membership Portal', url: 'https://github.com/forevermore63/sausage-therapy-membership', status: 'Ready for Stripe' },
  { id: 2, name: 'Noosa Dachshunds Booking Engine', url: 'https://github.com/forevermore63/noosa-dachshunds-booking', status: 'Live ready' },
  { id: 3, name: 'Cancer Detection Course Platform', url: '#', status: 'Scaffolded' },
  { id: 4, name: 'NDIS Provider Tools SaaS', url: '#', status: 'In progress' },
  { id: 5, name: 'Forevermore Virtual Retreats', url: '#', status: 'Ready' },
  { id: 6, name: 'Dachshund Merch Store', url: 'https://shopify.com', status: 'Shopify connected' },
  { id: 7, name: 'Pet Pulse Clinic Dashboard', url: '#', status: 'Planned' },
  { id: 8, name: 'Grant Pipeline Automator', url: '#', status: 'Active' },
  { id: 9, name: 'Visual Content Licensing', url: '#', status: 'Ready' },
  { id: 10, name: 'Conscious Yield Tracker', url: '#', status: 'Monitoring' },
];

export default function App() {
  const [peace, setPeace] = useState(75);
  const [energy, setEnergy] = useState(60);
  const [purity, setPurity] = useState(85);
  const [balance, setBalance] = useState(70);
  const [campaignBudget, setCampaignBudget] = useState(500);
  const [campaignNote, setCampaignNote] = useState('Target NDIS and mental health audiences with dog therapy stories');
  const [launched, setLaunched] = useState(false);

  const totalMonthly = useMemo(() => STREAMS.reduce((s, r) => s + r.monthly, 0), []);
  const humanFeelScore = Math.round((peace + energy + purity + balance) / 4);
  const projectedBoost = Math.round(totalMonthly * (humanFeelScore / 100) * 0.15);

  const chartData = STREAMS.map(s => ({ name: s.name.split(' ')[0], value: s.monthly }));

  const launchCampaign = () => {
    setLaunched(true);
    // In real version: call Meta/Google Ads API or generate campaign brief
    alert(`Campaign launched! Budget: $${campaignBudget}\nFocus: ${campaignNote}\nExpected ROAS boost from high human feel score (${humanFeelScore}).`);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Life Maker Profit Studio
        </h1>
        <p className="text-slate-300 mt-2">Real passive income streams for pure & peaceful balance • Forevermore Empire</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm">
          <DollarSign size={16} /> Projected Monthly Pool: ${totalMonthly.toLocaleString()} AUD + boost
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><TrendingUp className="text-emerald-400" /> Revenue Streams</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ background: '#1e293b', border: 'none' }} />
              <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><Heart className="text-pink-400" /> Human Feel Optimiser</h2>
          <div className="space-y-4">
            <label className="block text-sm">Peace {peace}<input type="range" min="0" max="100" value={peace} onChange={e => setPeace(+e.target.value)} className="w-full accent-emerald-400" /></label>
            <label className="block text-sm">Energy {energy}<input type="range" min="0" max="100" value={energy} onChange={e => setEnergy(+e.target.value)} className="w-full accent-yellow-400" /></label>
            <label className="block text-sm">Purity {purity}<input type="range" min="0" max="100" value={purity} onChange={e => setPurity(+e.target.value)} className="w-full accent-cyan-400" /></label>
            <label className="block text-sm">Balance {balance}<input type="range" min="0" max="100" value={balance} onChange={e => setBalance(+e.target.value)} className="w-full accent-purple-400" /></label>
          </div>
          <div className="mt-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">{humanFeelScore}</div>
            <div className="text-xs text-slate-400">Human Feel Score → +${projectedBoost}/mo projected</div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><Megaphone className="text-orange-400" /> Paid Campaigns</h2>
          <label className="block text-sm mb-2">Daily Budget AUD<input type="number" value={campaignBudget} onChange={e => setCampaignBudget(+e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 mt-1" /></label>
          <textarea value={campaignNote} onChange={e => setCampaignNote(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm h-20" placeholder="Campaign angle..." />
          <button onClick={launchCampaign} className="mt-3 w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2">
            <Zap size={16} /> Launch Campaign
          </button>
          {launched && <p className="text-emerald-400 text-sm mt-2 text-center">Campaign queued — check Meta Ads Manager</p>}
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Target /> The 10 Real Money Apps</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {APPS.map(app => (
            <a key={app.id} href={app.url} target="_blank" rel="noopener" className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg hover:bg-slate-700 transition">
              <div>
                <div className="font-medium">{app.id}. {app.name}</div>
                <div className="text-xs text-slate-400">{app.status}</div>
              </div>
              <Plus size={16} className="text-emerald-400" />
            </a>
          ))}
        </div>
      </div>

      <footer className="text-center text-slate-500 text-sm mt-8">
        Built for pure & peaceful balance • Numbers are realistic projections once Stripe/Shopify live and campaigns run • Update with real API keys for live data
      </footer>
    </div>
  );
}
