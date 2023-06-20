import React from "react"
import Image from "next/image"
export default function _footer(vercelLogo)
{

    return  (  
    <div> 
      <Image
                  src="/images/footer.png"
                  alt="Vercel Logo"
                  width={800 }
                  height={50}
                  className={vercelLogo}
                  

                />
      </div>
      )
  
}