export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500">
            Sign in to your TeamFlow AI account.
          </p>
        </div>

        <form className="space-y-4">
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
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
