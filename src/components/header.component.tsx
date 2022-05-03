import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

export interface HeaderProps {
  url?: string;
}

const Header = ({ url }: HeaderProps ): JSX.Element => {
  const breadcrumbUrl = url && url.substr(1);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/welcome">BigLibra</Link>
          </li>
          <li className="breadcrumb-item">{breadcrumbUrl}</li>
        </ol>
        <button className="btn float-sm-right">
          <Link to="/library" className="btn btn-secondary">
            Library
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default Header;
