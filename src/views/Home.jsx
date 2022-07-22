import React from 'react'
import { usePrismicDocumentByUID, useSinglePrismicDocument } from '@prismicio/react'

export default function Home() {

    const [home, homeState] = usePrismicDocumentByUID('page', 'home-uid')
    const [sobreNos, sobreNosState] = useSinglePrismicDocument('sobre-nos')
    console.log(sobreNos)

    return (
        <div className='text-center'>
            {sobreNos && (
                <img src={sobreNos.data.banner.url} alt="" />
            )}
            {home && home.data.conteudo}
        </div>
    )
}
