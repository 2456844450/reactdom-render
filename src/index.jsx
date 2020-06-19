

const createElement = (tag, attrs, ...children) => {
  return {
    tag,
    attrs,
    children
  }
}

const React = {
  createElement
}


const render = (vnode, container) => {
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }
 
  const dom = document.createElement(vnode.tag)
  
  
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach( key => {
      if (key === 'className') {
        dom.setAttribute('class', vnode.attrs[key])
      }
    })
  }
  if (vnode.children) {
    vnode.children.forEach(child => render(child, dom))
  }
  

  return container.appendChild( dom )
}
const ReactDOM = {
  render
}

ReactDOM.render(
  <div className="app">
    <h1>Hello World</h1>
  </div>,
  document.getElementById('root')
)
