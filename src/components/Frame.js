import * as React from 'react';
import Link from 'gatsby-link'

export const Frame = ({image, label, link}) => <Link to={`/characters/${link}`} className={`frame  ${image}`}><span>{label}</span></Link>
