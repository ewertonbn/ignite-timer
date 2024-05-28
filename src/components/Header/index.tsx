import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MoonStars, Scroll, Sun, Timer } from 'phosphor-react'

import logoIgniteImg from '../../assets/logo-ignite.svg'
import { ThemeContext } from '../../context/ThemeContext'

import { HeaderContainer, ThemeSwitch } from './styles'

export function Header() {
  const { selectedTheme, changeTheme } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <img src={logoIgniteImg} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
        <ThemeSwitch
          type="button"
          onClick={changeTheme}
          aria-label="Alterar tema"
          title="Alterar tema"
        >
          {selectedTheme === 'dark' ? (
            <Sun size={24} />
          ) : (
            <MoonStars size={24} />
          )}
        </ThemeSwitch>
      </nav>
    </HeaderContainer>
  )
}
