import './Navigation.scss';
import { NavigationList } from '../NavigationList/NavigationList';

export const Navigation = () => {

  return (
    <div className="navigation__container">
      <nav className="navigation">
        <NavigationList />
      </nav>
    </div>
  )
}