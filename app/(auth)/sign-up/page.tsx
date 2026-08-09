export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-gray-500">
            Start collaborating with your team.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-md border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-black p-3 text-white"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
