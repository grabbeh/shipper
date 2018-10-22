import React from 'react'
import posed from 'react-pose'
import BasicBox from './Box'

const Box = props => {
  const { className, style, hostRef, innerRef, ...rest } = props
  return (
    <div className={className} style={style} ref={innerRef} {...rest}>
      <BasicBox {...props} />
    </div>
  )
}

const TweenBox = posed(Box)({
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  },
  hidden: {
    opacity: 0,
    y: -300
  }
})

export default TweenBox