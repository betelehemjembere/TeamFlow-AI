export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Welcome back to TeamFlow AI.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Projects", value: "12", tone: "bg-blue-50 text-blue-700" },
          { label: "Tasks", value: "48", tone: "bg-emerald-50 text-emerald-700" },
          { label: "Completed", value: "32", tone: "bg-violet-50 text-violet-700" },
          { label: "Team Members", value: "8", tone: "bg-amber-50 text-amber-700" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold">{item.value}</p>
            <div className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${item.tone}`}>
              Updated today
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Recent activity</h2>
        <p className="mt-2 text-sm text-gray-500">
          Your latest team updates will appear here.
        </p>
      </div>
    </div>
  );
}