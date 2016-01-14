import React, { Component, PropTypes } from 'react'
import Remarkable from 'remarkable'

import styles from 'css/Markdown'

const MARKDOWN_PARSER = new Remarkable({
  breaks: true,
})

class Markdown extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...props } = this.props
    console.log(children.length)
    console.log(children.slice(0, 50))
    console.log(MARKDOWN_PARSER.render(children.slice(0, 50)))
    return (
      <div {...props}>
        <div className={styles.container}>
          {React.Children.map(children, child => (
            <div dangerouslySetInnerHTML={{
              __html: MARKDOWN_PARSER.render(String(child))
            }} />
          ))}
        </div>
      </div>
    )
  }
}

export default Markdown
