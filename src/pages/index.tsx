import { Header, menuItems, MenuItem } from "@/comps/LayoutElements";

export default function Home() {
  const mainClass = `flex min-h-screen flex-col items-center justify-between p-10`;

  return (<>
      <Header />
      <main className={mainClass}>
        <ul>
          {menuItems.map((menuItem: MenuItem) => (
            <li key={menuItem.href}>
              <a href={menuItem.href}>{menuItem.text}</a>
            </li>
          ))}
        </ul>
      </main>
    </>);
}
