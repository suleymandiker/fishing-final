import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({
  children,
  activeClassName,
  href,
  as
}: {
  children: any
  activeClassName: any
  href: string
  as?: any
}) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
     // as özelliği kullanılacaksa as={as} eklenmeli
    <Link href={href}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
}

export default ActiveLink
