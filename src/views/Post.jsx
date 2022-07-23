import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import { usePrismicDocumentByUID, } from '@prismicio/react'

export default function Post() {
    let params = useParams();
    const [post] = usePrismicDocumentByUID('post', params.post_uid)

    return (
        <div className="container mx-auto px-4">
            <h1>
                {post?.data.titulo_do_post}
            </h1>
            <p>
                {post?.data.conteudo}
            </p>
        </div>
    )
}
