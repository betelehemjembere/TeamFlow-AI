export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">
        Dashboard
      </h1>

      <p className="mt-1 text-gray-500">
        Welcome back to TeamFlow AI.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-gray-500">Projects</p>
          <p className="mt-2 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-gray-500">Tasks</p>
          <p className="mt-2 text-3xl font-bold">48</p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="mt-2 text-3xl font-bold">32</p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-gray-500">Team Members</p>
          <p className="mt-2 text-3xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
}