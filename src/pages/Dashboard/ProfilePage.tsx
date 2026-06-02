import Header from "../../layouts/dashboard/header";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text)] transition-colors duration-300">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-sm transition-colors duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-[var(--border)]">
            <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-md">
              K
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-extrabold tracking-tight">Kauan P. S.</h1>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">Full-Stack Developer</p>
              <p className="text-xs text-[var(--text-muted)] mt-2">Curitiba, Paraná, Brasil</p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold">Account Settings</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">Your account information and settings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[var(--text-secondary)] block">Email</span>
                <span className="text-sm font-medium">kauanps0404@gmail.com</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[var(--text-secondary)] block">Role</span>
                <span className="text-sm font-medium">Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
