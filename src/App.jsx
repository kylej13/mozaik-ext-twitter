import React    from 'react'
import Mozaik   from 'mozaik/browser'
import twitter from 'mozaik-ext-twitter'


const MozaikComponent = Mozaik.Component.Mozaik
const ConfigActions   = Mozaik.Actions.Config

Mozaik.Registry.addExtensions({ twitter })

React.render(<MozaikComponent/>, document.getElementById('mozaik'))

ConfigActions.loadConfig()
