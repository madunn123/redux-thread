export default function TopNavigation({ user }) {
  return (
    <nav className="border-b-[1px] py-7 border-slate-700">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest">KECIPIRIT TANPA HENTI</h1>

          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8">
              <img
                src={user?.avatar ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjIMoCbaJDLPtKoU6cLQv2pykZr78-OPbAFueArkbhw&s'}
                alt={user?.avatar}
                className="object-cover w-full h-full bg-cover rounded-full"
              />
            </div>
            <span className="text-lg font-bold capitalize text-slate-200/90 -tracking-tighter">{user?.name ?? 'anonymous'}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
