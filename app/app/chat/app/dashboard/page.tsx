import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Lead Dashboard</h1>
      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
              <th className="p-3">Answers</th>
              <th className="p-3">Appointment</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t align-top">
                <td className="p-3">{lead.name || 'Unknown'}</td>
                <td className="p-3">{lead.contact || '-'}</td>
                <td className="p-3">{lead.status}</td>
                <td className="p-3">
                  <pre className="whitespace-pre-wrap text-xs">
                    {JSON.stringify(lead.answers, null, 2)}
                  </pre>
                </td>
                <td className="p-3">{lead.appointmentSlot || '-'}</td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td className="p-3 text-slate-500" colSpan={5}>
                  No leads yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
