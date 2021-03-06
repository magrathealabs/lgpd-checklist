import React from 'react'
import { steps } from '../data.js'
import logo from '../images/logo.svg'
import { url } from '../shared/meta'
import Scrollspy from 'react-scrollspy'

const Sidebar = props => (
  <div className="fixed">
    <a href="/">
      <img src={logo} alt="LGPD Checklist" className="logo" />
    </a>
    <nav>
      <ul>
        <Scrollspy items={['your-data', 'accountability-management', 'new-rights', 'consent', 'follow-up', 'special-cases']} currentClassName="is-current">
          { steps.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </Scrollspy>
      </ul>
      <h4 style={{ marginTop: '20px' }}>Outras ferramentas</h4>
      <ul>
        <li><a href='https://lgpd.magrathealabs.com/'>LGPD na Prática</a></li>
      </ul>
      <h4 style={{ marginTop: '20px' }}>Adaptado por</h4>
      <ul>
        <li><a href='https://www.magrathealabs.com'>Magrathea</a></li>
      </ul>
    </nav>
  </div>
)

export default Sidebar
