import React, { FC } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

/**
 * SpringFadeUp
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @returns {any}
 * @constructor
 */
export const SpringFadeUp: FC = ({ children }) => {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  const fade = useSpring({
    config: { ...config.default },
    from: {
      opacity: 0,
      transform: 'translate(0px, 24px)',
    },
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(0px, 24px)',
  })

  return (
    <div ref={ref}>
      <animated.div style={fade}>{children}</animated.div>
    </div>
  )
}
