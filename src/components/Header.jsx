import { Link } from "react-router-dom"
import Logo from '../../public/assets/Logo.svg'

const Header = () => {
  return (
    <header className="py-7 font-roboto">
      <div className="container flex justify-between items-center">

        {/* logo */}
        <Link to='/' className="hover:opacity-80">
          <img src={Logo} width={94} height={44} alt="Logo" />
        </Link>

        {/* nav */}
        <nav>
          <ul className="space-x-14 flex items-center">
            <li>
              <Link to='/' className="hover:text-brndcolor duration-150 text-sm font-medium">Объявления</Link>
            </li>
            <li>
              <Link to='/' className="hover:text-brndcolor duration-150 text-sm font-medium">Отслеживаемые авто</Link>
            </li>
            <li>
              <Link to='/' className="hover:text-brndcolor duration-150 text-sm font-medium">История авто</Link>
            </li>
            <li>
              <Link to='/' className="hover:text-brndcolor duration-150 text-sm font-medium">Оплата</Link>
            </li>
            <li>
              <Link to='/' className="hover:text-brndcolor duration-150 text-sm font-medium">Инструкция</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;