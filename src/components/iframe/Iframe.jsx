import React from 'react'
import Iframe from 'react-iframe'

function Iframe() {
  return (  
<>
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.718185307366!2d-70.7067472879191!3d-33.40451579505184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6a592ba9671%3A0xa769a671ce1c6268!2sIlustre%20Municipalidad%20de%20Renca!5e0!3m2!1ses!2scl!4v1706731664581!5m2!1ses!2scl"
        width="268"
        height="197"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
</>

  )
}

export default Iframe