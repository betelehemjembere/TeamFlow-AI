export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
        <p className="mt-1 text-gray-500">Track and manage your tasks efficiently.</p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Task board</h2>
        <p className="mt-2 text-sm text-gray-500">
          Priorities, progress, and deadlines will be displayed here.
        </p>
      </div>
    </div>
  );
}
