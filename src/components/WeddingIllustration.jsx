import { motion } from 'motion/react'

/**
 * Componente para ilustraciones de boda
 * Acepta tanto SVG como imágenes raster
 * @param {string} src - Ruta a la ilustración (SVG o imagen)
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases CSS adicionales
 * @param {object} animationProps - Props de animación para Motion
 */
export function WeddingIllustration({ 
  src, 
  alt, 
  className = '', 
  animationProps = {},
  ...props 
}) {
  const isSVG = src?.endsWith('.svg')
  
  const defaultAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: 'easeOut' },
    ...animationProps
  }

  if (isSVG) {
    return (
      <motion.div {...defaultAnimation} className={className}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto"
          {...props}
        />
      </motion.div>
    )
  }

  return (
    <motion.div {...defaultAnimation} className={className}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto"
        {...props}
      />
    </motion.div>
  )
}

