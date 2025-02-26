// importiamo il contesto globale e la parte React di utilizzo dello stesso
import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

// importo componente card listato
import PostCard from "./PostCard";

export default function PostsList() {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { post } = useContext(GlobalContext);

    return (
        <>
            {
                post.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </>
    );
}