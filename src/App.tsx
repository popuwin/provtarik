export default function App() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="bg-[#F7F8FA] text-[#1A1A1A]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#top" className="text-lg font-semibold text-[#1B3A5C]">ТарикПеревозки</a>
          <nav className="hidden gap-6 text-sm text-[#5A6472] md:flex">
            <a href="#services">Услуги</a>
            <a href="#drivers">Водители</a>
            <a href="#prices">Цены</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <a href="tel:+79990000000" className="rounded-lg bg-[#1B3A5C] px-4 py-2 text-sm font-medium text-white">Позвонить</a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[85vh] overflow-hidden pt-14">
          <img src={`${base}images/hero-sprinters.png`} alt="Mercedes Sprinter" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">ТарикПеревозки. Один стандарт - безупречно.</h1>
            <p className="mt-5 max-w-2xl text-lg text-[#5A6472]">Пассажирские и грузовые перевозки на Mercedes Sprinter. Основное направление: Саратов - Москва.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="rounded-lg bg-[#1B3A5C] px-6 py-3 text-sm font-medium text-white">Пассажирские</a>
              <a href="#services" className="rounded-lg bg-[#2E2E2E] px-6 py-3 text-sm font-medium text-white">Грузовые</a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">Услуги</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="overflow-hidden rounded-xl">
                <img src={`${base}images/blue-sprinter.png`} alt="Синий Sprinter" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#1B3A5C]">Пассажирские перевозки</h3>
              <p className="mt-3 text-[#5A6472]">До 20 мест, комфортный салон, кондиционер, чистота и пунктуальность.</p>
              <p className="mt-2 text-[#5A6472]">Водитель: Тарик, 45 лет, стаж более 25 лет.</p>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="overflow-hidden rounded-xl">
                <img src={`${base}images/white-sprinter.png`} alt="Белый Sprinter" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#2E2E2E]">Грузовые перевозки</h3>
              <p className="mt-3 text-[#5A6472]">Грузы любой сложности, аккуратная погрузка, сохранность и точные сроки.</p>
              <p className="mt-2 text-[#5A6472]">Водитель: Андрей, 25 лет, стаж более 7 лет.</p>
            </article>
          </div>
        </section>

        <section id="drivers" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">Водители</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-semibold">Тарик, 45 лет</h3>
              <p className="mt-2 text-[#5A6472]">Стаж более 25 лет. Пассажирские рейсы Саратов - Москва.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-semibold">Андрей, 25 лет</h3>
              <p className="mt-2 text-[#5A6472]">Стаж более 7 лет. Грузовые рейсы по городу и межгороду.</p>
            </div>
          </div>
        </section>

        <section id="prices" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">Цены</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-2xl font-semibold text-[#1B3A5C]">Пассажирские</p>
              <p className="mt-3 text-3xl font-semibold">от 1 900 руб./пассажир</p>
              <p className="mt-2 text-[#5A6472]">Маршрут Саратов - Москва.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-2xl font-semibold text-[#2E2E2E]">Грузовые</p>
              <p className="mt-3 text-3xl font-semibold">от 2 000 руб.</p>
              <p className="mt-2 text-[#5A6472]">Точная стоимость после уточнения деталей.</p>
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">Контакты</h2>
          <div className="mt-6 space-y-2 text-lg">
            <a href="tel:+79990000000" className="block">+7 (999) 000-00-00</a>
            <a href="https://wa.me/79990000000" className="block">WhatsApp</a>
            <a href="https://t.me/tarikperevozki" className="block">Telegram</a>
            <a href="mailto:info@tarikperevozki.ru" className="block">info@tarikperevozki.ru</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-[#5A6472] md:px-6">
          <p className="text-lg font-semibold text-[#1B3A5C]">ТарикПеревозки</p>
          <p className="mt-1">Саратов - Москва | © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}