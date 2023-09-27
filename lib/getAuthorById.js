import { useAuth } from "@/contexts/AuthContext";

const getAuthorById = (authorId) => {
    const {authors} = useAuth()

    if(authors) {
        // console.log("author11111111111111", authors[0])
        const authorData = authors.find(a => a._id === authorId)
        // console.log(authorData)
        return (authorData)
    }
}

export default getAuthorById;